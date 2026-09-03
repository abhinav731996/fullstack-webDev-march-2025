import Chart from "react-apexcharts";

const TopCategoryChart = () => {
  const chartData = {
    series: [50, 24, 16],

    options: {
      chart: {
        type: "donut",
      },

      labels: ["Electronics", "Sports", "Lifestyles"],

      colors: ["#FB923C", "#EA580C", "#0F172A"],

      legend: {
        show: false,
      },

      dataLabels: {
        enabled: true,
      },

      stroke: {
        width: 4,
        colors: ["#fff"],
      },

      plotOptions: {
        pie: {
          donut: {
            size: "65%",
          },
        },
      },
    },
  };

  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="donut"
      height={180}
    />
  );
};

export default TopCategoryChart;