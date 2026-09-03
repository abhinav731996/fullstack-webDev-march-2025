"use client";

import React, { useState, useMemo } from "react";
import { Container, Row, Col, Card, Table, Dropdown, Form, ButtonGroup, Button } from "react-bootstrap";
import { ChevronExpand, Search, Wallet2, GraphUpArrow, Building, CreditCard, PiggyBank, House } from "react-bootstrap-icons";
import dynamic from "next/dynamic";
import { FinanceData } from "@/data/FinanceData";

import "../../../../styles/scss/theme/finance.scss";

// Dynamic import for ApexCharts to avoid SSR issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const CashflowChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Income",
        data: [12000, 9000, 8500, 11500, 7000, 10000, 13000, 15600, 14000, 7000, 12000, 9000],
      },
      {
        name: "Expense",
        data: [-8000, -11000, -8500, -14000, -6000, -8000, -9000, -7000, -9500, -10000, -8500, -11000],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 300,
        stacked: true,
        toolbar: { show: false },
      },
      colors: ["#D8EB12", "#258BFB"],
      plotOptions: {
        bar: {
          columnWidth: "40%",
          borderRadius: 4,
          borderRadiusApplication: 'end',
          borderRadiusWhenStacked: 'all',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      xaxis: {
        categories: [
          "Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: "#adb5bd",
            fontSize: "12px",
          },
        },
      },
      yaxis: {
        labels: {
          formatter: (y) => {
            if (y === 0) return "0K";
            return (y / 1000).toFixed(0) + "K";
          },
          style: {
            colors: "#adb5bd",
          },
        },
      },
      grid: {
        borderColor: "#f1f3f5",
        strokeDashArray: 4,
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        markers: {
          radius: 2,
        }
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$" + Math.abs(val).toLocaleString();
          }
        }
      }
    },
  });

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="bar"
      height={300}
    />
  );
};

const MoneyTrackerChart = () => {
  const [state] = useState({
    series: [28, 22, 18, 16, 16],
    options: {
      chart: {
        type: "donut",
        height: 250,
      },
      colors: ["#258BFB", "#D8EB12", "#8ab4f8", "#e9ecef", "#f3f7a1"],
      plotOptions: {
        pie: {
          donut: {
            size: "75%",
            labels: {
              show: false,
            },
          },
          expandOnClick: false
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 5,
        colors: ["#fff"], // creates the gap effect
      },
      legend: {
        show: false,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + "%";
          }
        }
      }
    },
  });

  return (
    <div className="position-relative d-flex justify-content-center">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="donut"
        height={220}
      />
      <div
        className="position-absolute d-flex align-items-center justify-content-center chart-circle"
      >
        <House size={32} color="#258BFB" />
      </div>
    </div>
  );
};

const Page = () => {
  const [activeTracker, setActiveTracker] = useState("Expenses");
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [monthFilter, setMonthFilter] = useState("This Month");
  const [sortConfig, setSortConfig] = useState(null);

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const filteredAndSortedData = useMemo(() => {
    let filteredData = [...FinanceData];

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      filteredData = filteredData.filter(item => 
        item.transactionName.toLowerCase().includes(lowerQuery) ||
        item.category.toLowerCase().includes(lowerQuery) ||
        item.note.toLowerCase().includes(lowerQuery) ||
        item.status.toLowerCase().includes(lowerQuery)
      );
    }

    if (statusFilter !== "All Status") {
      filteredData = filteredData.filter(item => item.status.toLowerCase() === statusFilter.toLowerCase());
    }

    if (monthFilter === "This Month") {
      filteredData = filteredData.filter(item => item.dateTime.startsWith("2035-03"));
    } else if (monthFilter === "Last Month") {
      filteredData = filteredData.filter(item => item.dateTime.startsWith("2035-02"));
    }

    if (sortConfig) {
      filteredData.sort((a, b) => {
        let valA = a[sortConfig.key];
        let valB = b[sortConfig.key];
        
        if (sortConfig.key === 'dateTime') {
          valA = new Date(valA).getTime();
          valB = new Date(valB).getTime();
        }

        if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
        if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
      });
    }

    return filteredData;
  }, [searchQuery, statusFilter, monthFilter, sortConfig]);

  const moneyTrackerLegend = [
    { label: "Housekeeping Supplies", value: "$17,570", percent: "28%", colorClass: "bg-primary-custom" },
    { label: "Utilities (Water, Power, Internet)", value: "$13,800", percent: "22%", colorClass: "bg-yellow" },
    { label: "Food & Beverage Procurement", value: "$11,300", percent: "18%", colorClass: "bg-blue-light" },
    { label: "Maintenance & Repairs", value: "$10,040", percent: "16%", colorClass: "bg-gray" },
    { label: "Staff Salaries & Overtime", value: "$10,040", percent: "16%", colorClass: "bg-yellow-light" },
  ];

  return (
    <Container fluid className="finance-page p-3 rounded-4">
      {/* Top Stats Row */}
      <Row className="g-3 mb-3">
        <Col lg={8}>
          <Row className="gy-3">
            <Col lg={4}>
              <Card className="shadow-sm p-3 h-100">
                <Card.Body className="p-0">
                  <div className="stat-card">
                    <div>
                      <div className="d-flex justify-content-between mb-2">
                        <div>
                          <h3 className="stat-value pt-2">$82,450</h3>
                        </div>
                        <div className="icon-wrapper">
                          <Wallet2 size={20} />
                        </div>
                      </div>
                      <div className="stat-label">Balance</div>
                      <div className="trend">
                        <span className="trend-badge">
                          <GraphUpArrow size={10} /> +6.4%
                        </span>
                        <span className="trend-text">from last month</span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="shadow-sm p-3 h-100">
                <Card.Body className="p-0">
                  <div className="stat-card">
                    <div>
                      <div className="d-flex justify-content-between mb-2">
                        <div>
                          <h3 className="stat-value pt-2">$145,200</h3>
                        </div>
                        <div className="icon-wrapper">
                          <PiggyBank size={20} />
                        </div>
                      </div>
                      <div className="stat-label">Total Income</div>
                      <div className="trend">
                        <span className="trend-badge">
                          <GraphUpArrow size={10} /> +10.8%
                        </span>
                        <span className="trend-text">from last month</span>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4}>
              <Card className="shadow-sm p-3 h-100">
                <Card.Body className="p-0">
                  <div className="stat-card">
                    <div className="d-flex justify-content-between mb-2" >
                      <div>
                        <h3 className="stat-value pt-2">$62,750</h3>
                      </div>
                      <div className="icon-wrapper">
                        <CreditCard size={20} />
                      </div>
                    </div>
                    <div className="stat-label">Total Expenses</div>
                    <div className="trend">
                      <span className="trend-badge">
                        <GraphUpArrow size={10} /> +8.3%
                      </span>
                      <span className="trend-text">from last month</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col lg={12}>
              <Card className="shadow-sm p-2 h-100">
                <Card.Body>
                  <div className="chart-header">
                    <h5 className="title">Cashflow</h5>
                    <div className="actions">
                      <Dropdown>
                        <Dropdown.Toggle id="dropdown-year">2025</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">2025</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">2024</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <button className="more-btn">
                        <ChevronExpand size={20} className="rotate-90" />
                      </button>
                    </div>
                  </div>
                  <CashflowChart />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
        {/* Charts Row */}
        <Col lg={4}>
          <Card className="shadow-sm h-100">
            <Card.Body>
              <div className="chart-header">
                <h5 className="title">Money Tracker</h5>
                <div className="actions">
                  <ButtonGroup>
                    <Button 
                      variant="light" 
                      className={`px-3 py-1 ${activeTracker === 'Income' ? 'btn-expense text-dark border-0' : 'text-dark border-0 bg-light'}`}
                      onClick={() => setActiveTracker('Income')}
                    >
                      Income
                    </Button>
                    <Button 
                      variant="light"
                      className={`px-3 py-1 ${activeTracker === 'Expenses' ? 'btn-expense text-dark border-0' : 'text-dark border-0 bg-light'}`}
                      onClick={() => setActiveTracker('Expenses')}
                    >
                      Expenses
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
              <div>
              <MoneyTrackerChart/>
              </div>
              <div className="d-flex justify-content-between align-items-end mt-4">
                <div>
                  <div className="text-muted small mb-1">Total Expense</div>
                  <h4 className="fw-bold mb-0 text-dark">$62,750</h4>
                </div>
                <div className="trend d-flex flex-column align-items-end">
                  <span className="badge text-dark mb-1 badge-yellow-pill">
                    <GraphUpArrow size={10} className="me-1" /> +8.3%
                  </span>
                  <span className="text-muted trend-text-small">from last month</span>
                </div>
              </div>
              <div className="money-tracker-legend mt-4">
                {moneyTrackerLegend.map((item, idx) => (
                  <div key={idx} className="legend-item">
                    <div className="legend-label">
                      <span className={"dot " + item.colorClass}></span>
                      {item.label}
                    </div>
                    <div className="legend-value">
                      {item.value} <span className="percentage">• {item.percent}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Transactions Table */}
      <Card className="shadow-sm p-2">
        <Card.Body>
          <div className="transactions-header">
            <h5 className="title">Recent Transactions</h5>
            <div className="filters">
              <div className="search-wrapper">
                <Search className="search-icon" size={14} />
                <Form.Control 
                  type="text" 
                  placeholder="Search guest, status, etc" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Dropdown onSelect={(eventKey) => setStatusFilter(eventKey)}>
                <Dropdown.Toggle className="filter-status" id="dropdown-trans-status">
                  {statusFilter}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="All Status">All Status</Dropdown.Item>
                  <Dropdown.Item eventKey="Success">Success</Dropdown.Item>
                  <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown onSelect={(eventKey) => setMonthFilter(eventKey)}>
                <Dropdown.Toggle className="filter-month" id="dropdown-trans-month">
                  {monthFilter}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="This Month">This Month</Dropdown.Item>
                  <Dropdown.Item eventKey="Last Month">Last Month</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          <div className="table-responsive mt-3">
            <Table hover className="transactions-table align-middle text-nowrap">
              <thead>
                <tr>
                  <th onClick={() => handleSort('dateTime')}>
                    Date & Time <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('transactionName')}>
                    Transaction Name <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('category')}>
                    Category <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('amount')}>
                    Amount <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('note')}>
                    Note <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('status')}>
                    Status <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedData.length > 0 ? filteredAndSortedData.map((item) => {
                  const [dateStr, timeStr, ampmStr] = item.dateTime.split(' ');
                  const [y, m, d] = dateStr.split('-');
                  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                  const formattedDate = `${monthNames[parseInt(m) - 1]} ${parseInt(d)}, ${y}`;

                  return (
                    <tr key={item.id}>
                      <td>
                        <div className="date-time">
                          <span>{formattedDate}</span>
                          <span className="time">{timeStr} {ampmStr}</span>
                        </div>
                      </td>
                      <td className="text-dark fw-medium">{item.transactionName}</td>
                      <td>{item.category}</td>
                      <td>
                        <span className={item.amount > 0 ? "amount-positive" : "amount-negative"}>
                          {item.amount > 0 ? "+" : "-"} ${Math.abs(item.amount).toLocaleString()}
                        </span>
                      </td>
                      <td>{item.note}</td>
                      <td>
                        <span className={item.status === "success" ? "badge-success" : "badge-pending"}>
                          {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  );
                }) : (
                  <tr>
                    <td colSpan="6" className="text-center py-4">No transactions found</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Page;
