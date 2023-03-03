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
    chart.title("Race distribution by gender 1");
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
    chart.title("Race distribution by gender 2");
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