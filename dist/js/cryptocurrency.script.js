var ctx = document.getElementById("statistics");
var data = {
  labels: [
    "2019-09-09",
    "2019-09-10",
    "2019-09-11",
    "2019-09-12",
    "2019-09-13",
    "2019-09-14",
  ],
  datasets: [
    {
      label: "Sales ($) ",
      data: [3000, 5000, 2000, 1000, 500, 800],
    },
  ],
};
var myChart = new Chart(ctx, {
  type: "line",
  data,
});
