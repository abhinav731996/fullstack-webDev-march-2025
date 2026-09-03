import Chart from "react-apexcharts";

const SalesChart = () => {

  const salesChart = {
    series: [
      {
        name: "Sales",
        data: [
          12000, 24000, 8000, 14000, 28000, 13000,
          9000, 18000, 43000, 4000, 30000, 14000,
        ],
      },
    ],

    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },

      colors: ["#FE9F43"],

      dataLabels: {
        enabled: false,
      },

      stroke: {
        curve: "smooth",
      },

      grid: {
        show: false,
      },

      plotOptions: {
        bar: {
          borderRadius: 10,
          columnWidth: "70%",
          borderRadiusApplication: "end",
        },
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
          formatter: (value) => `${value / 1000}K`,
        },
      },
    },
  };

  return (
    <Chart
      options={salesChart.options}
      series={salesChart.series}
      type="bar"
      height={340}
    />
  );
};

export default SalesChart;