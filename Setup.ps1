$url = "https://github.com/Clysop/ClyPack-1.16.4/archive/master.zip"
$output = "$PSScriptRoot\modpack"

cls
Write-Output "Setting up modpack...`n`n`n`n`n`n"
Write-Output "Downloading modpack..."

Invoke-WebRequest -Uri $url -OutFile ($output + ".zip")

Write-Output "Download complete."
Write-Output "Extracting modpack..."

Expand-Archive ($output + ".zip") -Force
Copy-Item -Path ($output + "/*/*") -Destination "." -Force -Recurse
Remove-Item -Path $output -Recurse
Remove-Item -Path ($output + ".zip") -Recurse

Write-Output "Extraction complete."
Write-Output "Downloading mods...`n"

java -jar InstanceSync.jar

Write-Output "`nSetup complete."
Read-Host "Press ENTER to continue..."