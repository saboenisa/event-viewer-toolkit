Windows Security Event IDs

🔐 Overview
This document explains the key Windows Security Event IDs used in the Event Viewer Toolkit. These events are commonly monitored by SOC analysts to detect authentication activity, privilege escalation, and process creation.

🟦 Event ID 4624 — Successful Logon
A user successfully authenticated to the system.

Why it matters:

Helps identify normal login patterns

Useful for correlating with suspicious failed logins

Can reveal unexpected accounts logging in successfully

🟥 Event ID 4625 — Failed Logon
A failed authentication attempt occurred.

Why it matters:

Multiple failures may indicate brute‑force attempts

Failed logins from unusual IPs or times are suspicious

Helps detect password‑guessing attacks

🟨 Event ID 4672 — Special Privileges Assigned
A user logged in with administrative or elevated privileges.

Why it matters:

Indicates privileged account usage

Useful for detecting privilege escalation

Should be monitored closely in SOC environments

🟩 Event ID 4688 — New Process Created
A new process was started on the system.

Why it matters:

Helps detect malware execution

Useful for identifying suspicious processes

Important for correlating with privilege escalation events
