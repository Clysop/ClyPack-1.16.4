$url = "https://github.com/Clysop/ClyPack-1.16.4/archive/master.zip"
$output = "modpack"
$mmc_file = "..\mmc-pack.json"

cls
Write-Output "Setting up modpack...`n`n`n`n`n`n"
Write-Output "Downloading modpack..."

Invoke-WebRequest -Uri $url -OutFile ($output + ".zip")

Write-Output "Download complete."
Write-Output "Extracting modpack..."

Expand-Archive ($output + ".zip") -Force
Copy-Item ($output + "\*\*") "." -Force -Recurse
Remove-Item $output -Recurse
Remove-Item ($output + ".zip")

Write-Output "Extraction complete."
Write-Output "Downloading mods...`n"

java -jar InstanceSync.jar

Move-Item "thirdparty-mods\*" "mods" -Force
Remove-Item "thirdparty-mods" -Recurse

if (Test-Path $mmc_file) {
  Write-Output "`nFound MultiMC instance file, setting forge version to $forge_version."
  
  $content = Get-Content $mmc_file | ConvertFrom-Json
  foreach ($item in $content.components) {
    if ($item.uid -eq "net.minecraftforge") {
      $item.version = "$(Get-Content "forge_version.txt")"
    }
  }
  ConvertTo-Json $content | Set-Content $mmc_file
}

Remove-Item "forge_version.txt"

Write-Output "`nSetup complete."
Read-Host "Press ENTER to continue..."