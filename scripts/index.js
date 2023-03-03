/* Pie Chart - race distribution by gender 0 */
anychart.onDocumentReady(function () {
  
  // Create palette.
    var customPalette = anychart.palettes.rangeColors();
	  customPalette.items(['#9E485C', '#2D0637']);
    customPalette.count(5);

    // create data
    var data = [
      {x: "Black/African American", value: 16},
      {x: "European/Caucasian-American", value: 142},
      {x: "Latino/Hispanic American", value: 25},
      {x: "Asian", value: 71},
      {x: "Other", value: 16}
    ];

    // create a chart and set the data
    var chart = anychart.pie(data);
    chart.palette(customPalette);

    // set the chart title
    chart.title("Men");
    chart.title().fontFamily('Outfit');
    chart.title().fontColor('hsla(288, 59%, 22%, 1)');
    chart.title().fontSize(20);
  chart.background().fill("hsla(0, 88%, 90%, 1)");
  chart.legend().enabled(false);
    chart.legend().itemsLayout("horizontal-expandable");
    chart.legend().fontFamily('Outfit');
    chart.legend().fontSize(10);
    chart.legend().fontColor('hsla(288, 59%, 22%, 1)');
    chart.labels().fontFamily('Outfit');
    chart.labels().fontSize(40);

    // set the container id
    chart.container("gender-pie-chart-1");

    // initiate drawing the chart
    chart.draw();
});

/* Pie Chart - race distribution by gender 0 */
anychart.onDocumentReady(function () {
  
  // Create palette.
    var customPalette = anychart.palettes.rangeColors();
	  customPalette.items(['#9E485C', '#2D0637']);
    customPalette.count(5);

    // create data
    var data = [
      {x: "Black/African American", value: 10},
      {x: "European/Caucasian-American", value: 162},
      {x: "Latino/Hispanic American", value: 17},
      {x: "Asian", value: 65},
      {x: "Other", value: 21}
    ];

    // create a chart and set the data
    var chart = anychart.pie(data);
    chart.palette(customPalette);

    // set the chart title
    chart.title("Women");
    chart.title().fontFamily('Outfit');
    chart.title().fontColor('hsla(288, 59%, 22%, 1)');
    chart.title().fontSize(20);
    chart.background().fill("hsla(0, 88%, 90%, 1)");
    chart.legend().enabled(false);
    chart.legend().itemsLayout("horizontal-expandable");
    chart.legend().fontFamily('Outfit');
    chart.legend().fontSize(10);
    chart.legend().fontColor('hsla(288, 59%, 22%, 1)');
    chart.labels().fontFamily('Outfit');
    chart.labels().fontSize(40);
  

    // set the container id
    chart.container("gender-pie-chart-2");

    // initiate drawing the chart
    chart.draw();
});


anychart.onDocumentReady(function () {
  var chart = anychart.line();
  
  // Create palette.
    var customPalette = anychart.palettes.rangeColors();
	  customPalette.items(['#9E485C', '#2D0637']);
    customPalette.count(1);

    var lineSeries = chart.column([
      {x:"2.0", value:0.0615384615},
      {x:"3.0", value:0.0231213873},
      {x: "4.0", value:0.0648464164}, 
  		{x:"5.0", value:0.2262895175},
   	  {x:"6.0", value:0.3885057471},
      {x:"6.5", value: 0.6666666667},
      {x:"7.0", value:0.5964912281}, 
      {x:"7.5", value:1.0}, 
      {x:"8.0", value:0.7824773414}, 
      {x: "8.5", value:1.0},
      {x: "9.0", value: 0.83280757}, 
      {x:"10.0", value: 0.8418604651}
      
    ]);

    chart.palette(customPalette);
  
    var title = chart.title();
    title.enabled(true);
    title.text('Ratings vs. Decision Rates for Men Rating Women');
  
    chart.title().fontFamily('Outfit');
    chart.title().fontColor('hsla(288, 59%, 22%, 1)');
    chart.title().fontSize(20);
    chart.background().fill("hsla(0, 88%, 90%, 1)");
    chart.legend().itemsLayout("horizontal-expandable");
    chart.legend().fontFamily('Outfit');
    chart.legend().fontSize(10);
    chart.legend().fontColor('hsla(288, 59%, 22%, 1)');
    chart.labels().fontFamily('Outfit');
    chart.labels().fontSize(40);

    chart.container("rating-vs-decision-chart-men");
    chart.draw();
});

anychart.onDocumentReady(function () {
  var chart = anychart.line();
  
    // Create palette.
    var customPalette = anychart.palettes.rangeColors();
	  customPalette.items(['#9E485C', '#2D0637']);
    customPalette.count(1);

    var lineSeries = chart.column([
        {x: "1.0", value: 0.1},
        {x:"2.0", value:0.055},
       	{x:"3.0", value:0.082}, 
  		  {x:"4.0", value:0.13},
   		  {x:"5.0", value:0.22},
      	{x:"6.0", value:0.31}, 
      	{x:"7.0", value:0.51}, 
      	{x:"8.0", value:0.64},
      	{x:"9.0", value:0.74}, 
      	{x: "9.5", value: 0.5}, 
      	{x:"10.0", value: 0.87}
      
    ]);
  
    chart.palette(customPalette);

    var title = chart.title();
    title.enabled(true);
    title.text('Ratings vs. Decision Rates for Women Rating Men on Physical Attractiveness');
  
    chart.title().fontFamily('Outfit');
    chart.title().fontColor('hsla(288, 59%, 22%, 1)');
    chart.title().fontSize(20);
    chart.background().fill("hsla(0, 88%, 90%, 1)");
    chart.legend().itemsLayout("horizontal-expandable");
    chart.legend().fontFamily('Outfit');
    chart.legend().fontSize(10);
    chart.legend().fontColor('hsla(288, 59%, 22%, 1)');
    chart.labels().fontFamily('Outfit');
    chart.labels().fontSize(40);


    chart.container('rating-vs-decision-chart-women');
    chart.draw();
});