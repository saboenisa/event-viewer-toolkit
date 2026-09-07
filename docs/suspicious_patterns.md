Suspicious Activity Patterns
🔍 Overview
This document describes common suspicious patterns found in Windows Security logs. These patterns help analysts identify potential malicious activity.

🚫 Multiple Failed Logins (4625)
Repeated failed logins may indicate:

brute‑force attacks

password spraying

unauthorized access attempts

🔐 Privilege Escalation (4672)
Unexpected privileged logins may indicate:

compromised admin accounts

lateral movement

escalation attempts by malware

⚠️ Unusual Process Creation (4688)
Suspicious processes include:

powershell.exe with encoded commands

cmd.exe spawning unexpected tools

rundll32.exe executing unknown DLLs

wscript.exe or cscript.exe running scripts

🌙 Logins Outside Business Hours (4624/4625)
Unexpected authentication activity during late hours may indicate:

unauthorized access

compromised accounts

attacker persistence

🌐 Logins From Unusual IPs
Remote logins from unknown or foreign IP addresses may indicate:

credential theft

VPN compromise

external attacker activity
