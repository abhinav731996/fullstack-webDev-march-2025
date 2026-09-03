import CustomerOverview from "../../components/charts/CustomerOverview";
import OrderStatics from "../../components/charts/OrderStatics";
import SalesChart from "../../components/charts/SalesChart";
import SalesStaticsChart from "../../components/charts/SalesStaticsChart";
import TopCategoryChart from "../../components/charts/TopCategoryChart";
import Layout from "../../components/layout/Layout";
import {
  topSellingProducts,
  lowStockProducts,
  recentSales,
  overview,
  recentTransactions,
  topCustomers,
} from "../../data/DashboardData";

import Chart from "react-apexcharts";

const Dashboard = () => {
  return (
    <Layout>
      <div className="dashboard-page">
        {/* TOP HEADER */}
        <div className="dashboard-header">
          <div>
            <h2>Welcome, Admin</h2>
            <p>
              You have <span>200+</span> Orders, Today
            </p>
          </div>

          <button className="date-btn">
            <i className="bi bi-calendar"></i>
            01 Jan 2024 - 07 Jan 2024
          </button>
        </div>

        {/* ALERT */}
        <div className="dashboard-alert">
          <div>
            <i className="bi bi-exclamation-circle"></i>
            Your Product <span>Apple Iphone 15 is running Low</span>, already
            below 5 Pcs.
            <a href="#"> Add Stock</a>
          </div>

          <i className="bi bi-x"></i>
        </div>

        {/* STATS */}
        <div className="row g-4">
          <div className="col-xl-3 col-md-6">
            <div className="dashboard-stat orange">
              <div className="stat-icon">
                <i className="bi bi-file-earmark-text"></i>
              </div>

              <div  className="stat-content">
                <p>Total Sales</p>
                <div className="stat-value">
                  <h4>$48,988,078</h4>
                  <div className="heigher">
                    <i className="bi bi-arrow-up-short"></i>
                    +22%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="dashboard-stat dark">
              <div className="stat-icon">
                <i className="bi bi-repeat"></i>
              </div>

              <div className="stat-content">
                <p>Total Sales Return</p>
                <div className="stat-value">
                  <h4>$16,478,145</h4>
                  <div className="lower">
                    <i className="bi bi-arrow-down-short"></i>
                    -22%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="dashboard-stat green">
              <div className="stat-icon">
                <i className="bi bi-gift"></i>
              </div>

              <div className="stat-content">
                <p>Total Purchase</p>
                <div className="d-flex justify-content-between">
                  <h4>$24,145,789</h4>
                  <div className="heigher">
                    <i className="bi bi-arrow-up-short"></i>
                    +22%
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3 col-md-6">
            <div className="dashboard-stat blue">
              <div className="stat-icon">
                <i className="bi bi-caret-down-square"></i>
              </div>

              <div className="stat-content">
                <p>Total Purchase Return</p>
                <div className="stat-value">
                  <h4>$18,458,747</h4>
                  <div className="heigher">
                    <i className="bi bi-arrow-up-short"></i>
                    +22%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SMALL STATS */}
        <div className="row g-4 mt-1">
          {overview.map((item, index) => (
            <div className="col-xl-3 col-md-6" key={index}>
              <div className="mini-card">
                <div className="mini-top">
                  <div>
                    <h4>{item.amount}</h4>
                    <p>{item.title}</p>
                  </div>

                  <div className={`mini-icon ${item.iconClass}`}>
                    <i className={`bi ${item.icon}`}></i>
                  </div>
                </div>

                <div className="mini-bottom">
                  <div>
                    <span
                      className={
                        item.growth.includes("+")
                          ? "growth-success"
                          : "growth-danger"
                      }
                    >
                      {item.growth}
                    </span>
                    <span className="bottom-p"> vs Last Month</span>
                  </div>

                  <a href="/">View All</a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CHART SECTION */}
        <div className="row g-4 mt-1">
          {/* LEFT CHART */}
          <div className="col-xl-8">
            <div className="dashboard-card">
              <div className="card-header-custom">
                <div className="d-flex gap-2 align-items-center">
                  <button className="cart-icon">
                    <i className="bi bi-cart"></i>
                  </button>
                  <h5>Sales & Purchase</h5>
                </div>

                <div className="chart-filter">
                  <button>1D</button>
                  <button>1W</button>
                  <button>1M</button>
                  <button>3M</button>
                  <button>6M</button>
                  <button className="active">1Y</button>
                </div>
              </div>

              <div className="card-sales">
                <div className="purchase-card">
                  <div className="d-flex align-items-center gap-2">
                    <div className="dote-light"></div>
                    <p>Total Purchase</p>
                  </div>
                  <h5>49k</h5>
                </div>

                <div className="sales-card">
                  <div className="d-flex align-items-center gap-2">
                    <div className="dote-dark"></div>
                    <p>Total Sales</p>
                  </div>
                  <h5>38k</h5>
                </div>
              </div>

              <SalesChart />
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-xl-4">
            <div className="dashboard-card">
              <div className="card-header-custom">
                <div className="d-flex gap-2 align-items-center">
                  <button className="exclamation-icon">
                    <i className="bi bi-exclamation-circle"></i>
                  </button>
                  <h5>Overall Information</h5>
                </div>
              </div>

              <div className="overall-info">
                <div className="info-box">
                  <i className="bi bi-person-check"></i>
                  <p>Suppliers</p>
                  <h5>6987</h5>
                </div>

                <div className="info-box">
                  <i className="bi bi-people"></i>
                  <p>Customer</p>
                  <h5>4896</h5>
                </div>

                <div className="info-box">
                  <i className="bi bi-cart"></i>
                  <p>Orders</p>
                  <h5>487</h5>
                </div>
              </div>

              <div className="customer-chart">
                <div className="card-overview-custom">
                  <h4>Top Selling Products</h4>

                  <button className="today-btn">
                    <i className="bi bi-calendar4"></i>
                    Today
                    <i className="bi bi-chevron-down"></i>
                  </button>
                </div>
                <div className="chart-wrapper">
                  <div className="chart-width">
                  <CustomerOverview />
                  </div>

                  <div className="chart-stats">
                    <div className="chart-stats-right">
                      <h3>5.5K</h3>
                      <p>First Time</p>
                      <div className="green-btn">
                        <i className="bi bi-arrow-up-left"></i> 25%
                      </div>
                    </div>

                    <div className="horizontal-line"></div>

                    <div className="chart-stats-right">
                      <h3>3.5K</h3>
                      <p>Return</p>
                      <span className="green-btn">
                        <i className="bi bi-arrow-up-left"></i> 25%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TABLES */}
        {/* BOTTOM SECTION */}
        <div className="row g-4 mt-1">
          {/* TOP SELLING */}
          <div className="col-xl-4">
            <div className="dashboard-list-card">
              <div className="card-header-custom">
                <h4>Top Selling Products</h4>

                <button className="today-btn">
                  <i className="bi bi-calendar4"></i>
                  Today
                  <i className="bi bi-chevron-down"></i>
                </button>
              </div>

              <div className="dashboard-list">
                {topSellingProducts.map((item) => (
                  <div className="list-item" key={item.id}>
                    <div className="list-left">
                      <img src={item.image} alt={item.name} />

                      <div>
                        <h5>{item.name}</h5>
                        <p>
                          {item.price} • {item.sales}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`growth-badge ${
                        item.status === "increase"
                          ? "success-badge"
                          : "danger-badge"
                      }`}
                    >
                      {item.status === "increase" ? "+" : "-"}
                      {item.growth}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LOW STOCK */}
          <div className="col-xl-4">
            <div className="dashboard-list-card">
              <div className="card-header-custom">
                <h4>Low Stock Products</h4>

                <button className="view-btn">View All</button>
              </div>

              <div className="dashboard-list">
                {lowStockProducts.map((item) => (
                  <div className="list-item" key={item.id}>
                    <div className="list-left">
                      <img src={item.image} alt={item.name} />

                      <div>
                        <h5>{item.name}</h5>
                        <p>ID : {item.productId}</p>
                      </div>
                    </div>

                    <div className="stock-info">
                      <span>Instock</span>
                      <h6>{item.stock}</h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RECENT SALES */}
          <div className="col-xl-4">
            <div className="dashboard-list-card">
              <div className="card-header-custom">
                <h4>Recent Sales</h4>

                <button className="today-btn">
                  <i className="bi bi-calendar4"></i>
                  Today
                  <i className="bi bi-chevron-down"></i>
                </button>
              </div>

              <div className="dashboard-list">
                {recentSales.map((item) => (
                  <div className="list-item" key={item.id}>
                    <div className="list-left">
                      <img src={item.image} alt={item.product} />

                      <div>
                        <h5>{item.product}</h5>

                        <p>
                          {item.category} • {item.amount}
                        </p>
                      </div>
                    </div>

                    <div className="sale-right">
                      <span>{item.date}</span>

                      <button
                        className={`sale-status ${
                          item.status === "Completed"
                            ? "completed-status"
                            : item.status === "Cancelled"
                              ? "cancel-status"
                              : item.status === "Onhold"
                                ? "hold-status"
                                : "processing-status"
                        }`}
                      >
                        {item.status}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ===================== NEW SECTION ===================== */}
<div className="row g-4 mt-1">
  {/* SALES STATICS */}
  <div className="col-xl-6">
    <div className="dashboard-list-card">
      <div className="card-header-custom">
        <div className="d-flex align-items-center gap-2">
          <button className="sales-icon">
            <i className="bi bi-exclamation-triangle"></i>
          </button>

          <h4>Sales Statics</h4>
        </div>

        <button className="today-btn">
          <i className="bi bi-calendar4"></i>
          2025
          <i className="bi bi-chevron-down"></i>
        </button>
      </div>

      <div className="sales-static-top">
        <div className="revenue-card">
          <div>
            <h3>$48,988,078</h3>
            <p>Revenue</p>
          </div>

          <span className="success-badge">
            <i className="bi bi-arrow-up-short"></i>
            25%
          </span>
        </div>

        <div className="expense-card">
          <div>
            <h3>$12,189</h3>
            <p>Expense</p>
          </div>

          <span className="danger-badge">
            <i className="bi bi-arrow-down-short"></i>
            59%
          </span>
        </div>
      </div>

      <SalesStaticsChart />
    </div>
  </div>

  {/* RECENT TRANSACTIONS */}
  <div className="col-xl-6">
    <div className="dashboard-list-card">
      <div className="card-header-custom">
        <div className="d-flex align-items-center gap-2">
          <button className="sales-icon purple-btn">
            <i className="bi bi-flag"></i>
          </button>

          <h4>Recent Transactions</h4>
        </div>

        <a href="/" className="view-all-link">
          View All
        </a>
      </div>

      {/* TABS */}
      <div className="transaction-tabs">
        <button className="active">Sale</button>
        <button>Purchase</button>
        <button>Quotation</button>
        <button>Expenses</button>
        <button>Invoices</button>
      </div>

      {/* TABLE */}
      <div className="transaction-table">
        <div className="table-head">
          <span>Date</span>
          <span>Customer</span>
          <span>Status</span>
          <span>Total</span>
        </div>

        {recentTransactions.map((item) => (
          <div className="table-body" key={item.id}>
            <div className="table-date">{item.date}</div>

            <div className="table-customer">
              <img src={item.image} alt={item.customer} />

              <div>
                <h5>{item.customer}</h5>
                <p>{item.orderId}</p>
              </div>
            </div>

            <div>
              <span
                className={`table-status ${
                  item.status === "Completed"
                    ? "completed-status"
                    : "draft-status"
                }`}
              >
                {item.status}
              </span>
            </div>

            <h4>{item.total}</h4>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

{/* ===================== SECOND ROW ===================== */}
<div className="row g-4 mt-1">
  {/* TOP CUSTOMERS */}
  <div className="col-xl-4">
    <div className="dashboard-list-card">
      <div className="card-header-custom">
        <div className="d-flex align-items-center gap-2">
          <button className="sales-icon orange-light">
            <i className="bi bi-people"></i>
          </button>

          <h4>Top Customers</h4>
        </div>

        <a href="/" className="view-all-link">
          View All
        </a>
      </div>

      <div className="customer-list">
        {topCustomers.map((item) => (
          <div className="customer-item" key={item.id}>
            <div className="customer-left">
              <img src={item.image} alt={item.name} />

              <div>
                <h5>{item.name}</h5>

                <p>
                  <i className="bi bi-geo-alt"></i>
                  {item.country}

                  <span className="small-dot orange"></span>

                  {item.orders} Orders
                </p>
              </div>
            </div>

            <h4>{item.amount}</h4>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* TOP CATEGORIES */}
  <div className="col-xl-4">
    <div className="dashboard-list-card">
      <div className="card-header-custom">
        <div className="d-flex align-items-center gap-2">
          <button className="sales-icon pink-light">
            <i className="bi bi-box"></i>
          </button>

          <h4>Top Categories</h4>
        </div>

        <button className="today-btn">
          <i className="bi bi-calendar4"></i>
          Weekly
          <i className="bi bi-chevron-down"></i>
        </button>
      </div>

      <TopCategoryChart />

      <div className="category-list">
        <div className="category-item">
          <div className="left">
            <span className="category-dot electronics"></span>
            <p>Electronics</p>
          </div>

          <h5>
            698 <span>Sales</span>
          </h5>
        </div>

        <div className="category-item">
          <div className="left">
            <span className="category-dot sports"></span>
            <p>Sports</p>
          </div>

          <h5>
            545 <span>Sales</span>
          </h5>
        </div>

        <div className="category-item">
          <div className="left">
            <span className="category-dot lifestyle"></span>
            <p>Lifestyles</p>
          </div>

          <h5>
            456 <span>Sales</span>
          </h5>
        </div>
      </div>

      <div className="category-statics">
        <div className="statics-item">
          <div>
            <span className="small-dot blue"></span>
            Total Number Of Categories
          </div>

          <h5>698</h5>
        </div>

        <div className="statics-item">
          <div>
            <span className="small-dot orange"></span>
            Total Number Of Products
          </div>

          <h5>7899</h5>
        </div>
      </div>
    </div>
  </div>

  {/* ORDER STATICS */}
  <div className="col-xl-4">
    <div className="dashboard-list-card">
      <div className="card-header-custom">
        <div className="d-flex align-items-center gap-2">
          <button className="sales-icon blue-light">
            <i className="bi bi-box-seam"></i>
          </button>

          <h4>Order Statistics</h4>
        </div>

        <button className="today-btn">
          <i className="bi bi-calendar4"></i>
          Weekly
          <i className="bi bi-chevron-down"></i>
        </button>
      </div>

      <OrderStatics />
    </div>
  </div>
</div>
        
      </div>
    </Layout>
  );
};

export default Dashboard;
