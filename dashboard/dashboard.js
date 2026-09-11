function loadScenario(name) {
    fetch(`../fake_data/${name}.json`)
        .then(response => response.json())
        .then(data => updateDashboard(data))
        .catch(error => console.error("Error loading scenario:", error));
}

function updateDashboard(data) {

    let successful = data.filter(e => e.Id === 4624).length;
    let failed = data.filter(e => e.Id === 4625).length;
    let priv = data.filter(e => e.Id === 4672).length;
    let process = data.filter(e => e.Id === 4688).length;

    document.getElementById("successfulLogins").innerHTML = "Successful Logins: " + successful;
    document.getElementById("failedLogins").innerHTML = "Failed Logins: " + failed;
    document.getElementById("privEsc").innerHTML = "Privilege Escalations: " + priv;
    document.getElementById("processCreated").innerHTML = "Processes Created: " + process;

    // Destroy old charts if they exist
    if (window.pieChartInstance) window.pieChartInstance.destroy();
    if (window.barChartInstance) window.barChartInstance.destroy();

    // PIE (soft donut)
    window.pieChartInstance = new Chart(document.getElementById("pieChart"), {
        type: 'doughnut',
        data: {
            labels: ["Successful", "Failed", "Priv Esc", "Process"],
            datasets: [{
                data: [successful, failed, priv, process],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',   // soft teal
                    'rgba(255, 99, 132, 0.6)',   // soft red
                    'rgba(255, 206, 86, 0.6)',   // soft yellow
                    'rgba(54, 162, 235, 0.6)'    // soft blue
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '45%',
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });

    // BAR (soft colors)
    window.barChartInstance = new Chart(document.getElementById("barChart"), {
        type: 'bar',
        data: {
            labels: ["Successful", "Failed", "Priv Esc", "Process"],
            datasets: [{
                label: "Event Counts",
                data: [successful, failed, priv, process],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderWidth: 0
            }]
        },
        options: {
            animation: {
                duration: 800
            }
        }
    });
}

// Load default scenario
loadScenario('bruteforce');
