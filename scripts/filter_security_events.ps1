# Filter key security events
$importantEvents = @(4624, 4625, 4672, 4688)

Get-WinEvent -LogName Security |
Where-Object { $_.Id -in $importantEvents } |
Select-Object TimeCreated, Id, LevelDisplayName, Message

