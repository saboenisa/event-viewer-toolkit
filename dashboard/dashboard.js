fetch('../filtered_events.json')
    .then(response => response.json())
    .then(data => {

        let successful = data.filter(e => e.Id === 4624).length;
        let failed = data.filter(e => e.Id === 4625).length;
        let priv = data.filter(e => e.Id === 4672).length;
        let process = data.filter(e => e.Id === 4688).length;

        document.getElementById("successfulLogins").innerHTML = "Successful Logins: " + successful;
        document.getElementById("failedLogins").innerHTML = "Failed Logins: " + failed;
        document.getElementById("privEsc").innerHTML = "Privilege Escalations: " + priv;
        document.getElementById("processCreated").innerHTML = "Processes Created: " + process;

        // PIE CHART
        new Chart(document.getElementById("pieChart"), {
            type: 'pie',
            data: {
                labels: ["Successful", "Failed", "Priv Esc", "Process"],
                datasets: [{
                    data: [successful, failed, priv, process],
                    backgroundColor: ["green", "red", "yellow", "blue"]
                }]
            }
        });

        // BAR CHART
        new Chart(document.getElementById("barChart"), {
            type: 'bar',
            data: {
                labels: ["Successful", "Failed", "Priv Esc", "Process"],
                datasets: [{
                    label: "Event Counts",
                    data: [successful, failed, priv, process],
                    backgroundColor: ["green", "red", "yellow", "blue"]
                }]
            }
        });
    });

