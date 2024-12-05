document.getElementById('generateGraph').addEventListener('click', function() {
    // Obtener los valores del formulario
    const enero = document.getElementById('enero').value || 0;
    const febrero = document.getElementById('febrero').value || 0;
    const marzo = document.getElementById('marzo').value || 0;

    // Crear la data para el gráfico
    const data = {
        labels: ['Enero', 'Febrero', 'Marzo'],
        datasets: [{
            label: 'Ventas Mensuales',
            data: [enero, febrero, marzo],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Opciones de configuración del gráfico
    const config = {
        type: 'bar',
        data: data,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Obtener el canvas donde se va a renderizar el gráfico
    const salesChart = document.getElementById('salesChart');

    // Destruir gráfico previo si existe
    if (salesChart.chart) {
        salesChart.chart.destroy();
    }

    // Crear el nuevo gráfico
    salesChart.chart = new Chart(salesChart, config);
});
