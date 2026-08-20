[CmdletBinding()]
param(
    [Parameter(Position = 0, ValueFromRemainingArguments = $true)]
    [string[]]$HugoArgs
)

$ErrorActionPreference = 'Stop'
$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$localHugo = Join-Path $projectRoot '.tools\hugo\hugo.exe'
$pathHugo = Get-Command hugo -ErrorAction SilentlyContinue

if ($pathHugo) {
    $hugoExecutable = $pathHugo.Source
}
elseif (Test-Path -LiteralPath $localHugo) {
    $hugoExecutable = $localHugo
}
else {
    Write-Error 'Hugo is not installed. Run npm run setup:hugo first.'
    exit 1
}

& $hugoExecutable @HugoArgs
exit $LASTEXITCODE
