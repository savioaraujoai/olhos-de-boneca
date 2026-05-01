Start-Process -FilePath "npm" -ArgumentList "run","dev" -WorkingDirectory "C:\Users\savio\Downloads\OlhosDeBoneca" -WindowStyle Normal
Start-Sleep -Seconds 8
Invoke-Expression "netstat -ano | findstr :3000"
Write-Host "Servidor deve estar rodando em http://localhost:3000"
