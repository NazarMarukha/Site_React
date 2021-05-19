
		var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var config = {
			type: 'line',
			data: {
				labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				datasets: [{
				
					label: 'My First dataset',
					borderColor: window.chartColors.green,
					backgroundColor: window.chartColors.green,
					data: [
						2100,
						2800,
						6800,
						11000,
						6250,
						3800,
						2900,
						3500,
						10100,
						9500,
						3450,
						1200
					],
					

				}, {
					label: 'My Second dataset',
					borderColor: window.chartColors.blue,
					backgroundColor: window.chartColors.blue,
					data: [
						2300,
						2800,
						6800,
						11000,
						11200,
						6500,
						2900,
						500,
						10000,
						11000,
						3000,
						1000
					],
				}, {
					label: 'My Third dataset',
					borderColor: window.chartColors.orange,
					backgroundColor: window.chartColors.orange,
					data: [
						2000,
						3200,
						12000,
						16000,
						9500,
						3500,
						4200,
						7000,
						10000,
						9200,
						4700,
						1800
					],
				
				}, {
					label: 'My Fourth dataset',
					borderColor: window.chartColors.aqua,
					backgroundColor: window.chartColors.aqua,
					data: [
						2000,
						4000,
						11250,
						16000,
						12500,
						6500,
						4200,
						6800,
						11500,
						11000,
						4800, 
						1800
					],
					
				}]
			},
			options: {
				responsive: true,
				tooltips: {
					mode: 'index',
				},
				hover: {
					mode: 'index'
				},
				scales: {
					xAxes: [{
						ticks: {
							fontSize: 12,
							fontFamily: "Lato",
							fontColor: '#777777'
						}
					}],
					yAxes: [{

						display: true,
						ticks: {
							beginAtZero: true,
							stepSize: 5000,
							max: 20000,
							fontSize: 12,
							fontFamily: "Lato",
							fontColor: '#777777'
						}
					}]
				}
			}
		};

		window.onload = function() {
			var ctx = document.getElementById('canvas').getContext('2d');
			window.myLine = new Chart(ctx, config);
		};

		