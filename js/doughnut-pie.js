   var data = {
  labels: [
    "Research",
    "Information",
    "Product Design",
    "Packaging"
  ],
  datasets: [
    {
      data: [62, 17, 13, 8],
      backgroundColor: [
        "#85c875",
        "#0bc4df",
        "#1e75eb",
        "#f1a80a"
      ],
      hoverBackgroundColor: [
        "#85c875",
        "#0bc4df",
        "#1e75eb",
        "#f1a80a"
      ],
      borderWidth: 0,

    }],


};

Chart.defaults.global.legend.display = false;

var promisedDeliveryChart = new Chart(document.getElementById('doughnut-pie'), {
  type: 'doughnut',
  plugins:[
    {beforeDraw: function(chart){
    var width=chart.chart.width,
        height=chart.chart.height,
        
      ctx= chart.chart.ctx;

      ctx.restore();
      var fontSize=(height/55).toFixed(2);   //розмір шрифта (підбирай число замість 150)
      ctx.font=fontSize+"em sans-serif";
      ctx.textBaseline="middle";
      var text="MC",
      textX=Math.round((width-ctx.measureText(text).width)/2),  //вирівнювання по горизонталі
      textY=height/2;   //вирівнювання по вертикалі

      ctx.fillText(text, textX, textY);
      ctx.save();


     }
    }
  ],
  data: data,
  options: {
    responsive: true,
    cutoutPercentage: 65,
    maintainAspectRatio: false,
    legend: {
      display: false
    }
  }
});



