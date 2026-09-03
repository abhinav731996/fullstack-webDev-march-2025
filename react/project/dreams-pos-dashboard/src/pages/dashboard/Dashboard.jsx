import SalesChart from "../../components/charts/SalesChart";

const Dashboard = () => {
  return (
    <div>
      <div className="row g-4 mb-4">
        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h6>Total Sales</h6>
            <h3>$12,500</h3>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card p-3 shadow-sm">
            <h6>Revenue</h6>
            <h3>$8,000</h3>
          </div>
        </div>
      </div>

      <div className="card p-3 shadow-sm">
        <SalesChart />
      </div>
    </div>
  );
};

export default Dashboard;