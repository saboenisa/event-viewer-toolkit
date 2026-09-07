# Export filtered logs to CSV and JSON

$events = Get-WinEvent -LogName Security |
Where-Object { $_.Id -in @(4624,4625,4672,4688) }

# Export to CSV
$events | Select-Object TimeCreated, Id, Message |
Export-Csv -Path ".\filtered_events.csv" -NoTypeInformation

# Export to JSON
$events | ConvertTo-Json | Out-File ".\filtered_events.json"

