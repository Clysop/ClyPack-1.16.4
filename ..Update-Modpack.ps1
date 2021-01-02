param (
  [switch]$SkipConfirm
)

$REPO = 'Clysop/ClyPack-1.16.4'
$BRANCH = 'master'

$output = "$PSScriptRoot\modpack"

$mmc_file = "$PSScriptRoot\..\mmc-pack.json"
$mi_file = "$PSScriptRoot\minecraftinstance.json"

$archive_url = "https://github.com/$REPO/archive/$BRANCH.zip"
$api_url = "https://api.github.com/repos/$REPO/branches/$BRANCH"

cls
Write-Output "Checking for modpack updates...`n"

$api_response = Invoke-RestMethod $api_url
$remote_date = Get-Date $api_response.commit.commit.author.date

if ((Test-Path $mi_file) -and ((Get-Item $mi_file).LastWriteTime -gt $remote_date)) {
  Write-Output "You have the latest version."
  Write-Output "If you want to update anyway, delete 'minecraftinstance.json' and run this script again.`n"
  if (!$SkipConfirm.IsPresent) {
    Read-Host "Press ENTER to continue..."
  }
  Exit
}

Write-Output "`n`n`n`n`nNew version available."
Write-Output "Downloading modpack..."

Invoke-WebRequest $archive_url -OutFile "$output.zip"

Write-Output "Download complete."
Write-Output "Extracting modpack..."

Expand-Archive "$output.zip" -Force
Copy-Item "$output\*\*" "." -Force -Recurse
Remove-Item $output -Recurse
Remove-Item "$output.zip"

(Get-Item $mi_file).LastWriteTime = Get-Date

Write-Output "Extraction complete."

Write-Output "Downloading mods...`n"

java -jar InstanceSync.jar

if (Test-Path "$PSScriptRoot\thirdparty-mods") {
  Move-Item "$PSScriptRoot\thirdparty-mods\*" "$PSScriptRoot\mods" -Force
  Remove-Item "$PSScriptRoot\thirdparty-mods" -Recurse
}

if (Test-Path $mmc_file) {
  $mi_content = Get-Content $mi_file | ConvertFrom-Json
  $forge_version = $mi_content.baseModLoader.forgeVersion
  
  Write-Output "`nFound MultiMC instance, setting forge version to $forge_version."
  
  $mmc_content = Get-Content $mmc_file | ConvertFrom-Json
  foreach ($item in $mmc_content.components) {
    if ($item.uid -eq "net.minecraftforge") {
      $item.version = $forge_version
    }
  }
  ConvertTo-Json $mmc_content -Depth 4 | Set-Content $mmc_file
}

Write-Output "`nSetup complete.`n"

if (!$SkipConfirm.IsPresent) {
  Read-Host "Press ENTER to continue..."
}
