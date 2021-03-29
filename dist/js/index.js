var options = {
  theme: {
    mode: "dark",
  },
  chart: {
    type: "line",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    height: 40,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 2,
  },
  series: [
    {
      name: "Series",
      data: [900, 100, 0, 3000, 49, 62, 69, 91, 300],
    },
  ],
  xaxis: {
    show: !1,
    labels: {
      show: !1,
    },
    axisBorder: {
      show: !1,
    },
  },
  yaxis: {
    show: !1,
  },
  grid: {
    show: !1,
    padding: {
      bottom: -40,
      left: 0,
      right: 0,
    },
  },
  legend: {
    horizontalAlign: "left",
  },
  colors: ["#42b649"],
};

var chart = new ApexCharts(document.querySelector("#btc"), options);
var chart2 = new ApexCharts(document.querySelector("#btc-2"), {
  ...options,
  colors: ["#d43333"],
});

chart.render();
chart2.render();

var options = {
  series: [
    {
      name: "series1",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "series2",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: [
      "2018-09-19T00:00:00.000Z",
      "2018-09-19T01:30:00.000Z",
      "2018-09-19T02:30:00.000Z",
      "2018-09-19T03:30:00.000Z",
      "2018-09-19T04:30:00.000Z",
      "2018-09-19T05:30:00.000Z",
      "2018-09-19T06:30:00.000Z",
    ],
  },
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
  theme: {
    mode: "dark",
  },
  legend: {
    show: false,
  },
  markers: {
    size: 5,
  },
};

var chart = new ApexCharts(
  document.querySelector("#bitcoin_statistics"),
  options
);

var chart2 = new ApexCharts(
  document.querySelector("#bitcoin_statistics-2"),
  options
);

var chart3 = new ApexCharts(
  document.querySelector("#bitcoin_statistics-3"),
  options
);

chart.render();
chart2.render();
chart3.render();
