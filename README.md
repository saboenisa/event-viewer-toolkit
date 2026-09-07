A PowerShell‑based toolkit for analyzing Windows Security Event Logs
⭐ Overview
The Event Viewer Toolkit is a lightweight PowerShell project designed to help analysts collect, filter, export, and review Windows Security logs.
It focuses on high‑value security events such as authentication attempts, privilege escalation, and process creation — core signals used in SOC and DFIR investigations.

This toolkit is built using safe, fake sample logs, making it ideal for learning, demonstrations, and GitHub portfolio projects.

🚀 Features
Log Collection — Retrieve raw Windows Security logs

Event Filtering — Focus on key SOC‑relevant event IDs

Exporting — Save logs to CSV and JSON formats

Suspicious Activity Detection — Color‑coded alerts for failed logins, privilege escalation, and new processes

Fake sample logs for safe testing

Documentation explaining event IDs, suspicious patterns, and workflow

📁 Repository Structure
Code
event-viewer-toolkit/
│
├── scripts/
│   ├── collect_logs.ps1
│   ├── filter_security_events.ps1
│   ├── export_logs.ps1
│   └── suspicious_activity.ps1
│
├── examples/
│   ├── sample_events.csv
│   └── sample_events.json
│
├── docs/
│   ├── event_ids.md
│   ├── suspicious_patterns.md
│   └── how_it_works.md
│
└── README.md
📜 Scripts Overview
collect_logs.ps1
Collects raw Windows Security logs using Get-WinEvent.

filter_security_events.ps1
Filters important event IDs:

4624 — Successful login

4625 — Failed login

4672 — Special privileges assigned

4688 — New process created

export_logs.ps1
Exports filtered logs to CSV and JSON for analysis.

suspicious_activity.ps1
Highlights suspicious events using color‑coded console output.

🧪 Example Data
The examples/ folder contains fake sample logs:

sample_events.csv

sample_events.json

These allow testing and demonstration without accessing real system logs.

📚 Documentation
The docs/ folder includes:

event_ids.md — Explains each monitored event ID

suspicious_patterns.md — Common indicators of malicious activity

how_it_works.md — Toolkit architecture and workflow

🖥️ Usage
You can run the scripts individually depending on your needs:

Collect logs
Code
.\scripts\collect_logs.ps1
Filter important events
Code
.\scripts\filter_security_events.ps1
Export logs
Code
.\scripts\export_logs.ps1
Detect suspicious activity
Code
.\scripts\suspicious_activity.ps1

❤️ Author
Created by Enisa — SOC learner, IT support specialist, and cybersecurity enthusiast.
