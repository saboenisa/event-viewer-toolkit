# ===============================
#   EVENT VIEWER TOOLKIT DASHBOARD
# ===============================

$events = Get-WinEvent -LogName Security

$totalEvents = $events.Count
$failedLogins = ($events | Where-Object { $_.Id -eq 4625 }).Count
$successfulLogins = ($events | Where-Object { $_.Id -eq 4624 }).Count
$privEsc = ($events | Where-Object { $_.Id -eq 4672 }).Count
$processCreated = ($events | Where-Object { $_.Id -eq 4688 }).Count

Write-Host "==============================="
Write-Host "       SECURITY DASHBOARD       "
Write-Host "==============================="
Write-Host "Total Events: $totalEvents"
Write-Host "Successful Logins (4624): $successfulLogins"
Write-Host "Failed Logins (4625): $failedLogins"
Write-Host "Privilege Escalations (4672): $privEsc"
Write-Host "Processes Created (4688): $processCreated"
Write-Host "==============================="

