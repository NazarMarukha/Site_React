
let canvas = document.getElementById("barChart");
let ctx = canvas.getContext('2d');

// Global Options:
Chart.defaults.global.legend.display = false;


var data = {
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  datasets: [{
      fill: false,
      lineTension: 0,
      borderColor: "#f1a80a", // The main line color
      borderWidth: 4,
      borderDash: [], // try [5, 15] for instance
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "white",
      pointBackgroundColor: "#f1a80a",
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "#f1a80a",
      pointHoverBorderColor: "white",
      pointHoverBorderWidth: 2,
      pointRadius: 7,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: true
      data: [
      {
        x: 1,
        y: 9
      },
      {
        x: 4,
        y: 16
      },
      {
        x: 7,
        y: 13
      },
      {
        x: 9,
        y: 45
      },
      {
        x: 12,
        y: 23
      },
      {
        x: 15,
        y: 40
      }
      ],
      spanGaps: true,
    }, {
      fill: false,
      lineTension: 0,
      borderColor: "#00cccc",
      borderWidth: 4,
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: "white",
      pointBackgroundColor: "#00cccc",
      pointBorderWidth: 2,
      pointHoverRadius: 8,
      pointHoverBackgroundColor: "#00cccc",
      pointHoverBorderColor: "white",
      pointHoverBorderWidth: 2,
      pointRadius: 7,
      pointHitRadius: 10,
      // notice the gap in the data and the spanGaps: false
      data: [
      {
        x: 1,
        y: 2
      },
      {
        x: 5,
        y: 28
      },
      {
        x: 9,
        y: 32
      },
      {
        x: 12,
        y: 52
      },
      {
        x: 15,
        y: 48
      }
       ],
      spanGaps: false,
    }

  ]
};

// Notice the scaleLabel at the same level as Ticks
var options = {
  scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    display: false
                },
                gridLines: {
                  display: false,
                  drawBorder: false
                }
  
            }],

            xAxes: [{
                ticks: {
                    display: false
                },
                gridLines: {
                // You can change the color, the dash effect, the main axe color, etc.
                  borderDash: [2, 2],
                  color: "#b0b0b0",
                  drawBorder: false 
                  }
        }],          
        }  
};

// Chart declaration:
var myBarChart = new Chart(ctx, {
  type: 'line',
  data: data,
  options: options
});

