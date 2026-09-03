import Chart from "react-apexcharts";

const CustomerOverview = () => {

  const customerOverview = {
    series: [75, 65],

    options: {
      chart: {
        height: 350,
        type: "radialBar",
      },

      colors: ["#E04F16", "#0E9384"],

      labels: ["First Time", "Return"],

      plotOptions: {
        radialBar: {

          hollow: {
            size: "45%",
          },

          track: {
            background: "#f3f4f6",
          },

          dataLabels: {

            name: {
              fontSize: "10px",
              fontWeight: 600,
              color: "#6B7280",
            },

            value: {
              fontSize: "10px",
              fontWeight: 700,
              color: "#111827",

              formatter: function (val) {
                return `${val}%`;
              },
            },

          },
        },
      },

      stroke: {
        lineCap: "round",
      },

      legend: {
        show: true,
        position: "bottom",

        fontSize: "14px",

        labels: {
          colors: "#111827",
        },

        markers: {
          radius: 12,
        },
      },
    },
  };

  return (
    <Chart
      options={customerOverview.options}
      series={customerOverview.series}
      type="radialBar"
      height={150}
    />
  );
};

export default CustomerOverview;