"use client";

import React, { useMemo, useState } from "react";
import ReactApexChart from "react-apexcharts";
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
  Table,
  Form,
} from "react-bootstrap";
import { Search, ChevronExpand, PencilSquare } from "react-bootstrap-icons";
import { InventoryData } from "../../../data/InventoryData";
import "../../../styles/scss/theme/Inventory.scss";

/* -------------------- AREA CHART -------------------- */
const ApexChart = () => {
  const chartData = {
    series: [
      { name: "Stock In", data: [38, 30, 35, 40, 45, 60, 55] },
      { name: "Stock Out", data: [45, 40, 55, 50, 70, 65, 85] },
    ],
    options: {
      chart: { type: "area", height: 300, toolbar: { show: false } },
      stroke: { curve: "smooth" },
      dataLabels: { enabled: false },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <div className="chart-card">
      <div className="chart-header">
        <h5>Supply Overview</h5>
        <ButtonGroup>
          <Button size="sm">Week</Button>
          <Button size="sm">Month</Button>
          <Button size="sm">Year</Button>
        </ButtonGroup>
      </div>

      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="area"
        height={300}
      />
    </div>
  );
};

/* -------------------- BAR CHART -------------------- */
const ApexChartBar = () => {
  const chartData = {
    series: [
      { name: "Item A", data: [44] },
      { name: "Item B", data: [53] },
      { name: "Item C", data: [12] },
    ],
    options: {
      chart: { type: "bar", stacked: true, height: 300 },
      plotOptions: {
        bar: { horizontal: true },
      },
      xaxis: {
        categories: ["Inventory"],
      },
    },
  };

  return (
    <div className="chart-card">
      <h5>Stock Distribution</h5>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={300}
      />
    </div>
  );
};

/* -------------------- MAIN PAGE -------------------- */
const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [sortConfig, setSortConfig] = useState(null);

  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig?.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const filteredData = useMemo(() => {
    let data = [...InventoryData];

    // SEARCH
    if (searchTerm) {
      data = data.filter((item) =>
        [item.item, item.category, item.status]
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // FILTER
    if (statusFilter !== "All Status") {
      data = data.filter(
        (item) => item.status.toLowerCase() === statusFilter.toLowerCase()
      );
    }

    // SORT
    if (sortConfig) {
      data.sort((a, b) => {
        let aVal = a[sortConfig.key];
        let bVal = b[sortConfig.key];

        if (typeof aVal === "string") aVal = aVal.toLowerCase();
        if (typeof bVal === "string") bVal = bVal.toLowerCase();

        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return data;
  }, [searchTerm, statusFilter, sortConfig]);

  const getStatusClass = (status) => `status-${status.toLowerCase()}`;

  const getPercentage = (stock, reorder) => {
    const total = stock + reorder;
    return total === 0 ? 0 : Math.round((stock / total) * 100);
  };

  return (
    <Container fluid className="inventory-page-container">
      {/* CHARTS */}
      <Row className="mb-4">
        <Col lg={6}>
          <ApexChart />
        </Col>
        <Col lg={6}>
          <ApexChartBar />
        </Col>
      </Row>

      {/* TABLE */}
      <div className="inventory-card">
        <div className="inventory-header">
          <div className="search-container">
            <Search className="search-icon" />
            <Form.Control
              placeholder="Search..."
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <Form.Select
            className="status-filter"
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All Status</option>
            <option>High</option>
            <option>Low</option>
            <option>OutofStock</option>
          </Form.Select>
        </div>

        <Table responsive hover className="inventory-table">
          <thead>
            <tr>
              <th>#</th>
              <th onClick={() => requestSort("item")}>
                Item <ChevronExpand />
              </th>
              <th onClick={() => requestSort("category")}>
                Category <ChevronExpand />
              </th>
              <th onClick={() => requestSort("category")}>
                Status <ChevronExpand />
              </th>
              <th onClick={() => requestSort("category")}>
                Stock <ChevronExpand />
              </th>
              <th onClick={() => requestSort("category")}>
                Reorder <ChevronExpand />
              </th>
              <th onClick={() => requestSort("category")}>
                Action <ChevronExpand />
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} className="item-image" />
                </td>
                <td>{item.item}</td>
                <td>{item.category}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(item.status)}`}>
                    {item.status}
                  </span>
                </td>

                <td>
                  <div className="stock-progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${getPercentage(
                          item.quantityInStock,
                          item.quantityInReorder
                        )}%`,
                      }}
                    />
                    <span>{item.quantityInStock}</span>
                  </div>
                </td>

                <td>{item.quantityInReorder}</td>

                <td>
                  <button className="edit-btn">
                    <PencilSquare />
                  </button> {" "}
                  <button className="edit-btn2">
                    Reorder
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Page;