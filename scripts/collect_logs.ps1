# Collect Windows Security Logs
$logs = Get-WinEvent -LogName Security -ErrorAction SilentlyContinue
$logs | Select-Object TimeCreated, Id, LevelDisplayName, Message

