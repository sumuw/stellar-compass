[CmdletBinding()]
param(
    [ValidatePattern('^\d+\.\d+\.\d+$')]
    [string]$Version = '0.165.0'
)

$ErrorActionPreference = 'Stop'
$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$installDir = [System.IO.Path]::GetFullPath((Join-Path $projectRoot '.tools\hugo'))

if (-not $installDir.StartsWith($projectRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
    throw "Refusing to install Hugo outside the project: $installDir"
}

$archiveName = "hugo_${Version}_windows-amd64.zip"
$checksumsName = "hugo_${Version}_checksums.txt"
$releaseBase = "https://github.com/gohugoio/hugo/releases/download/v${Version}"
$tempDir = Join-Path ([System.IO.Path]::GetTempPath()) ("stellar-compass-hugo-" + [System.Guid]::NewGuid().ToString('N'))
$archivePath = Join-Path $tempDir $archiveName
$checksumsPath = Join-Path $tempDir $checksumsName

New-Item -ItemType Directory -Path $tempDir -Force | Out-Null

try {
    Write-Host "Downloading Hugo $Version..."
    Invoke-WebRequest -Uri "$releaseBase/$archiveName" -OutFile $archivePath
    Invoke-WebRequest -Uri "$releaseBase/$checksumsName" -OutFile $checksumsPath

    $checksumLine = Get-Content -LiteralPath $checksumsPath | Where-Object { $_ -match "\s+$([regex]::Escape($archiveName))$" } | Select-Object -First 1
    if (-not $checksumLine) {
        throw "Checksum entry not found for $archiveName"
    }

    $expectedHash = ($checksumLine -split '\s+')[0].ToLowerInvariant()
    $sha256 = [System.Security.Cryptography.SHA256]::Create()
    $archiveStream = [System.IO.File]::OpenRead($archivePath)
    try {
        $hashBytes = $sha256.ComputeHash($archiveStream)
        $actualHash = ([System.BitConverter]::ToString($hashBytes) -replace '-', '').ToLowerInvariant()
    }
    finally {
        $archiveStream.Dispose()
        $sha256.Dispose()
    }

    if ($actualHash -ne $expectedHash) {
        throw "Hugo checksum mismatch. Expected $expectedHash but received $actualHash"
    }

    New-Item -ItemType Directory -Path $installDir -Force | Out-Null
    Expand-Archive -LiteralPath $archivePath -DestinationPath $installDir -Force
    Write-Host "Hugo $Version installed at $installDir"
}
finally {
    $resolvedTempRoot = [System.IO.Path]::GetFullPath([System.IO.Path]::GetTempPath())
    $resolvedTempDir = [System.IO.Path]::GetFullPath($tempDir)
    if ($resolvedTempDir.StartsWith($resolvedTempRoot, [System.StringComparison]::OrdinalIgnoreCase)) {
        Remove-Item -LiteralPath $resolvedTempDir -Recurse -Force -ErrorAction SilentlyContinue
    }
}
