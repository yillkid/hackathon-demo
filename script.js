document.addEventListener("DOMContentLoaded", function () {
    // 3-1. 獲取今天的時間日期，格式為：YYYY/MM/DD HH:mm
    const now = new Date();
    const formattedDateTime = now.getFullYear() + '/' +
        String(now.getMonth() + 1).padStart(2, '0') + '/' +
        String(now.getDate()).padStart(2, '0') + ' ' +
        String(now.getHours()).padStart(2, '0') + ':' +
        String(now.getMinutes()).padStart(2, '0');

    document.getElementById('current-datetime').textContent = formattedDateTime;

    // 4-1 & 4-2. 根據網址參數設定溫度和濕度
    const urlParams = new URLSearchParams(window.location.search);
    const temperature = urlParams.get('temperature') || '-';
    const humidity = urlParams.get('humidity') || '-';

    document.getElementById('temperature-value').textContent = temperature + ' °C';
    document.getElementById('humidity-value').textContent = humidity + ' %';

    // 5-1 & 5-2. 繪製圖表
    const temperatureData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Temperature',
            data: temperature.split(','),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    const humidityData = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Humidity',
            data: humidity.split(','),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const configTemperature = {
        type: 'bar',
        data: temperatureData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const configHumidity = {
        type: 'line',
        data: humidityData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const temperatureChart = new Chart(
        document.getElementById('temperatureChart'),
        configTemperature
    );

    const humidityChart = new Chart(
        document.getElementById('humidityChart'),
        configHumidity
    );
});

