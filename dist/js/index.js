var options = {
  theme: {
    mode: 'dark',
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
      data: [900, 100, 0, 3000, 49, 62, 69, 91, 300]
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
  colors: ['#42b649'],
};

var chart = new ApexCharts(document.querySelector("#btc"), options);
var chart2 = new ApexCharts(document.querySelector("#btc-2"), { ...options, colors: ['#d43333'] });

chart.render();
chart2.render();
