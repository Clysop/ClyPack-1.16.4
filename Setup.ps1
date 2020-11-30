$url = "https://github.com/Clysop/ClyPack-1.16.4/archive/master.zip"
$output = "$PSScriptRoot\modpack"

cls
Write-Output "Setting up modpack...`n`n`n`n`n`n"
Write-Output "Downloading modpack..."

Invoke-WebRequest -Uri $url -OutFile ($output + ".zip")

Write-Output "Download complete."
Write-Output "Extracting modpack..."

Rename-Item "mods" "mods_old"
Expand-Archive ($output + ".zip") -Force
Copy-Item ($output + "/*/*") "." -Force -Recurse
Remove-Item $output -Recurse
Remove-Item ($output + ".zip") -Recurse

Write-Output "Extraction complete."
Write-Output "Downloading mods...`n"

Move-Item "mods/*" "mods_temp" -Force
Rename-Item "mods_old" "mods"

java -jar InstanceSync.jar

Move-Item "mods_temp/*" "mods"
Remove-Item "mods_*"

Write-Output "`nSetup complete."
Read-Host "Press ENTER to continue..."