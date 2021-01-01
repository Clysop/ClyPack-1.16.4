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
Write-Output "Setting up modpack...`n`n`n`n`n`n"

# Check if there is a newer version available
$api_response = Invoke-RestMethod $api_url
$remote_date = Get-Date $api_response.commit.commit.author.date
if ((Test-Path $mi_file) -and ((Get-Item $mi_file).LastWriteTime -gt $remote_date)) {
  if ($SkipConfirm.IsPresent) {
    Exit
  }
  $confirmation = Read-Host "There doesn't seem to be a new version available, do you want to continue anyway? [Y/N]"
  if ($confirmation.ToLower() -ne "y") {
    Exit
  }
}

Write-Output "Downloading modpack..."

Invoke-WebRequest $archive_url -OutFile ("$output.zip")

Write-Output "Download complete."
Write-Output "Extracting modpack..."

Expand-Archive ($output + ".zip") -Force
Copy-Item ($output + "\*\*") "." -Force -Recurse
Remove-Item $output -Recurse
Remove-Item ($output + ".zip")

(Get-Item $mi_file).LastWriteTime = Get-Date

Write-Output "Extraction complete."

Write-Output "Downloading mods...`n"

java -jar InstanceSync.jar

if (Test-Path "$PSScriptRoot\thirdparty-mods") {
  Move-Item "thirdparty-mods\*" "mods" -Force
  Remove-Item "thirdparty-mods" -Recurse
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

Write-Output "`nSetup complete."
Read-Host "Press ENTER to continue..."
