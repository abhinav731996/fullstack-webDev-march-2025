import Chart from "react-apexcharts";

const SalesStaticsChart = () => {
  const chartData = {
    series: [
      {
        name: "Revenue",
        data: [8, 28, 27, 23, 23, 21, 28, 18, 27, 14, 8, 23],
      },
      {
        name: "Expense",
        data: [-12, -21, -9, -21, -21, -10, -21, -21, -10, -14, -16, -21],
      },
    ],

    options: {
      chart: {
        type: "bar",
        stacked: false,
        toolbar: {
          show: false,
        },
      },

      colors: ["#0E9384", "#E04F16"],

      plotOptions: {
        bar: {
          borderRadius: 5,
          columnWidth: "55%",
        },
      },

      dataLabels: {
        enabled: false,
      },

      grid: {
        borderColor: "#f1f1f1",
      },

      legend: {
        show: false,
      },

      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],

        axisBorder: {
          show: false,
        },

        axisTicks: {
          show: false,
        },
      },

      yaxis: {
        labels: {
          formatter: (value) => `${value}K`,
        },
      },
    },
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={300}
    />
  );
};

export default SalesStaticsChart;