$url = "https://github.com/Clysop/ClyPack-1.16.4/archive/master.zip"
$output = "$PSScriptRoot\modpack"

cls
Write-Output "Setting up modpack...`n`n`n`n`n`n"
Write-Output "Downloading modpack..."

Invoke-WebRequest -Uri $url -OutFile ($output + ".zip")

Write-Output "Download complete."
Write-Output "Extracting modpack..."

if (Test-Path "mods") {
  Rename-Item "mods" "mods_old"
} else {
  New-Item -Name "mods_old" -ItemType "directory"
}

Expand-Archive ($output + ".zip") -Force
Copy-Item ($output + "\*\*") "." -Force -Recurse
Remove-Item $output -Recurse
Remove-Item ($output + ".zip")

Write-Output "Extraction complete."
Write-Output "Downloading mods...`n"

Rename-Item "mods" "mods_temp"
Rename-Item "mods_old" "mods"

java -jar InstanceSync.jar

Move-Item "mods_temp\*" "mods" -Force
Remove-Item "mods_*" -Recurse

Write-Output "`nSetup complete."
Read-Host "Press ENTER to continue..."