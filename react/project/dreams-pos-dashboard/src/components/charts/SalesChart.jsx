import Chart from "react-apexcharts";

const SalesChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },

    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
  };

  const series = [
    {
      name: "Sales",
      data: [10, 41, 35, 51, 49, 62],
    },
  ];

  return (
    <Chart
      options={options}
      series={series}
      type="area"
      height={350}
    />
  );
};

export default SalesChart;