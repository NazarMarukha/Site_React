// set the dimensions and margins of the graph
var margin = {top: 10, right: 100, bottom: 30, left: 30},
    width = 460 - margin.left - margin.right,
    height = 300 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg1 = d3.select("#lines")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
//d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_connectedscatter.csv", function(data) {

    // List of groups (here I have one group per column)

    // I strongly advise to have a look to dataReady with
    // console.log(dataReady)

    // A color scale: one color for each group
    var myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(d3.schemeSet2);

    // Add X axis --> it is a date format
    var x = d3.scaleLinear()
      .domain([0,10])
      .range([ 0, width ]);
    svg1.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    var y = d3.scaleLinear()
      .domain( [0,20])
      .range([ height, 0 ]);
    svg1.append("g")
      .call(d3.axisLeft(y));
      var data = [ {x:1, y:2}, {x:2, y:9}, {x:3, y:5} ]
    // Add the lines
    var line = d3.line()
      .x(function(d) { return x(+d.x) })
      .y(function(d) { return y(+d.value) })
    svg1.selectAll("myLines")
      .data(data)
      .enter()
      .append("path")
        .attr("class", function(d){ return d.name })
        .attr("d", function(d){ return line(d.values) } )
        .attr("stroke", function(d){ return myColor(d.name) })
        .style("stroke-width", 4)
        .style("fill", "none")
    // Add the points
    svg1
      // First we need to enter in a group
      .selectAll("myDots")
      .data(data)
      .enter()
        .append('g')
        .style("fill", function(d){ return myColor(d.name) })
        .attr("class", function(d){ return d.name })
      // Second we need to enter in the 'values' part of this group
      .selectAll("myPoints")
      .data(data)
      .enter()
      .append("circle")
        .attr("cx", function(d) { return x(d.x) } )
        .attr("cy", function(d) { return y(d.y) } )
        .attr("r", 5)
        .attr("stroke", "white")

    // Add a label at the end of each line
  

    // Add a legend (interactive)
    svg1
      .selectAll("myLegend")
      .data(data)
      .enter()
        .append('g')
        .append("text")
          .attr('x', function(d,i){ return 30 + i*60})
          .attr('y', 30)
          .text(function(d) { return d.name; })
          .style("fill", function(d){ return myColor(d.name) })
          .style("font-size", 15)
        .on("click", function(d){
          // is the element currently visible ?
          currentOpacity = d3.selectAll("." + d.name).style("opacity")
          // Change the opacity: from 0 to 1 or from 1 to 0
          d3.selectAll("." + d.name).transition().style("opacity", currentOpacity == 1 ? 0:1)

        })
})
