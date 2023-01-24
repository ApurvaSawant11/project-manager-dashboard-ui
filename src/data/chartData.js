export const pieData = {
  series: [2.4, 1.65, 0.95],
  options: {
    chart: {
      type: "donut",
    },
    colors: ["#00ddc9", "#7d8ace", "#ea1427"],
    labels: ["Under Budget", "On Budget", "Over Budget"],
    legend: {
      position: "bottom",
      offsetY: 8,
      inverseOrder: true,
      itemMargin: {
        horizontal: 20,
      },
    },
    dataLabels: {
      style: {
        fontSize: "9px",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 300,
      },
    },
    plotOptions: {
      pie: {
        customScale: 0.8,
        donut: {
          size: 70,
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 25,
            },
            value: {
              show: true,
              offsetY: -20,
              fontWeight: 500,
              fontSize: "32px",
            },
            total: {
              show: true,
              showAlways: true,
              label: "Total projects",
              fontSize: "16px",
            },
          },
        },
      },
    },
  },
};

export const lineData = {
  series: [
    {
      name: "Revenue",
      data: [0, 1000, 3400, 3250, 4150, 5600, 6400, 6400],
    },
  ],
  options: {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },

    labels: [
      "19 June",
      "20 June",
      "21 June",
      "22 June",
      "23 June",
      "24 June",
      "25 June",
      ".",
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      colors: "#038077",
      width: 2,
    },
    xaxis: {
      tickAmount: 7,
      tickPlacement: "on",
      offsetX: 20,
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        offsetY: -5,
        maxHeight: 15,
        style: {
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      seriesName: "Revenue",
      tickAmount: 7,
      labels: {
        show: true,
        maxWidth: 40,
        offsetY: 8,
        offsetX: 0,
        style: {
          fontSize: "13px",
        },
      },
      title: {
        text: "Cost €",
        rotate: 0,
        offsetX: 30,
        offsetY: -168,
        align: "left",
        style: {
          color: "#9d9d9d",
          fontWeight: 500,
          fontSize: 12,
        },
      },
    },
    grid: {
      show: true,
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  },
};
