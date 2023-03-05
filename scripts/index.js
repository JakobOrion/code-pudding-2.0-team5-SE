/* Column chart Age Distribution by Gender */
anychart.onDocumentReady(function () {
  // Create palette.
  var customPalette = anychart.palettes.rangeColors();
	customPalette.items(['#2D0637', '#9E485C']);
    customPalette.count(2);
  
  // setting data
  var data = [
    ["18", 10, 0],
    ["19", 10, 10],
    ["20", 25, 30],
    ["21", 108, 183],
    ["22", 291, 364],
    ["23", 387, 507],
    ["24", 409, 454],
    ["25", 382, 455],
    ["26", 377, 492],
    ["27", 618, 441],
    ["28", 430, 316],
    ["29", 362, 227],
    ["30", 363, 211],
    ["31", 71, 54],
    ["32", 153, 57],
    ["33", 36, 125],
    ["34", 69, 83],
    ["35", 0, 60],
    ["36", 20, 25],
    ["37", 5, 0],
    ["38", 0, 19],
    ["39", 18, 0],
    ["42", 20, 0],
    ["55", 0, 6],
  ];

  var chart = anychart.column();
  chart.palette(customPalette);
  
  chart.title("Age Distribution by Gender");
  chart.legend(true);
  chart.title().fontFamily('Outfit');
  chart.title().fontColor('hsla(288, 59%, 22%, 1)');
  chart.title().fontSize(20);
  chart.background().fill("hsla(0, 88%, 90%, 1)");
  chart.labels().fontFamily('Outfit');
  chart.labels().fontSize(40);
  var dataSet = anychart.data.set(data);
  var mapping1 = dataSet.mapAs({x: 0, value: 1});
  var mapping2 = dataSet.mapAs({x: 0, value: 2});
  var series1 = chart.column(mapping1);
  var series2 = chart.column(mapping2);
  series1.name("Male");
  series2.name("Female");

  chart.container("age-distribution-chart");
  chart.draw();
});

/* Bar chart Field of Study by Gender */
anychart.onDocumentReady(function () {
  // Create palette.
  var customPalette = anychart.palettes.rangeColors();
	customPalette.items(['#2D0637', '#9E485C']);
    customPalette.count(2);
  
  var data = [
    ["Business/Econ/Finance", 1502, 423],
    ["Engineering", 671, 193],
    ["Biological Sciences/Chemistry/Physics", 511, 482],
    ["Law", 389, 276],
    ["Political Science/International Affairs", 329, 380],
    ["Social Science, Psychologist", 172, 524],
    ["Math", 125, 82],
    ["History/Religion/Philosophy", 108, 133],
    ["Education, Academia", 73, 553],
    ["Film", 69, 57],
    ["English/Creative Writing/ Journalism", 55, 270],
    ["Other", 37, 15],
    ["Medical Science, Pharmaceuticals, and Bio Tech", 29, 114],
    ["Fine Arts/Arts Administration", 29, 158],
    ["Undergrad/undecided", 19, 0],
    ["Social Work", 18, 450],
    ["Architecture", 10],
    ["Languages", 9, 31],
   ];
    // Creates Bar chart.
    var chart = anychart.bar();
    chart.palette(customPalette);
    chart.legend(true);
    chart.title().fontFamily('Outfit');
    chart.title().fontColor('hsla(288, 59%, 22%, 1)');
    chart.title().fontSize(20);
    chart.background().fill("hsla(0, 88%, 90%, 1)");
    chart.labels().fontFamily('Outfit');
    chart.labels().fontSize(40);
    var dataSet = anychart.data.set(data);
    var mapping1 = dataSet.mapAs({x: 0, value: 1});
    var mapping2 = dataSet.mapAs({x: 0, value: 2});
    var series1 = chart.bar(mapping1);
    var series2 = chart.bar(mapping2);
    series1.name("Male");
    series2.name("Female");

    chart.title('Field of Study by Gender');
    chart.container('field-of-study-chart-gender');
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

/* Pie Chart - race distribution by gender 1 */
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

/* Column chart men rating women */
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

/* Column Chart women rating men on physical attractiveness */
anychart.onDocumentReady(function () {
  var chart = anychart.line();
  
    // Create palette.
    var customPalette = anychart.palettes.rangeColors();
	  customPalette.items(['#9E485C', '#2D0637']);
    customPalette.count(1);
    chart.palette(customPalette);

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