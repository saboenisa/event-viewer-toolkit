# Detect suspicious activity in Windows Security logs

$events = Get-WinEvent -LogName Security

foreach ($event in $events) {

    # Failed logins
    if ($event.Id -eq 4625) {
        Write-Host "[!] Failed Login: $($event.TimeCreated)" -ForegroundColor Red
    }

    # Privilege escalation
    if ($event.Id -eq 4672) {
        Write-Host "[!] Privilege Granted: $($event.TimeCreated)" -ForegroundColor Yellow
    }

    # New process creation
    if ($event.Id -eq 4688) {
        Write-Host "[+] Process Created: $($event.TimeCreated)" -ForegroundColor Cyan
    }
}

