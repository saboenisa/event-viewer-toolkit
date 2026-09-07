How the Toolkit Works
🧩 Overview
The Event Viewer Toolkit is a collection of PowerShell scripts designed to help SOC analysts collect, filter, export, and analyze Windows Security logs.

📥 1. Log Collection
Script: collect_logs.ps1

Uses Get-WinEvent to retrieve Security logs

Extracts key fields: TimeCreated, Event ID, Message

Provides raw data for further processing

🔎 2. Event Filtering
Script: filter_security_events.ps1  
Filters important SOC‑related events:

4624 — Successful logon

4625 — Failed logon

4672 — Privilege escalation

4688 — Process creation

This reduces noise and focuses on high‑value events.

📤 3. Exporting Logs
Script: export_logs.ps1  
Exports filtered logs to:

CSV — for spreadsheets and SIEM ingestion

JSON — for automation and API usage

This makes the logs easy to analyze or share.

🚨 4. Suspicious Activity Detection
Script: suspicious_activity.ps1  
Highlights suspicious events using color‑coding:

Red → failed logins

Yellow → privilege escalation

Cyan → new process creation

This provides a quick visual overview of potential threats.

🧪 5. Example Data
The examples/ folder contains:

sample_events.csv

sample_events.json

These files allow testing and demonstration without using real system logs.

🧱 6. Documentation
The docs/ folder explains:

event IDs

suspicious patterns

how the toolkit works

This makes the project professional and easy to understand.
