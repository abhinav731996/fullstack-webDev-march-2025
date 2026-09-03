"use client";

import React, { useState } from "react";
import { Table, Card, Badge, Form, InputGroup, Row, Col, Container, Button } from "react-bootstrap";
import { Search, Eye, PencilSquare, GraphUpArrow, GraphDownArrow, ChevronExpand } from "react-bootstrap-icons";
import dynamic from "next/dynamic";

import { ReservationsData } from "@/data/ReservationsData";
import { GuestsData } from "@/data/GuestData";
import { RoomsData } from "@/data/RoomsData";

import "../../../../styles/scss/theme/champins/reservation.scss";
import { FaCalendar } from "react-icons/fa";
import { FaCalendarDays } from "react-icons/fa6";
import { GiDuration } from "react-icons/gi";
import { BiSolidLike } from "react-icons/bi";

//  Fix for Next.js (SSR issue)
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ApexChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Confirmed",
        data: [92, 53, 53, 68, 92],
      },
      {
        name: "Canceled",
        data: [35, 53, 35, 46, 63],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 200,
        toolbar: { show: false }
      },
      colors: ['#0d6efd', '#d1e345'],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
          borderRadius: 2,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 4,
        colors: ['transparent']
      },
      xaxis: {
        categories: ["Feb", "Mar", "Apr", "May", "Jun"],
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 4,
      },
      grid: {
        borderColor: '#f1f1f1',
        strokeDashArray: 4,
      },
      legend: {
        show: false
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " Rooms"
          }
        }
      }
    },
  });

  return (
    <div className="h-100 d-flex flex-column p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="fs-5 fw-bold text-dark pt-2 ps-2">Reservation Trend</h2>
        <span className="text-muted fw-bold" >...</span>
      </div>
      <div className="flex-grow-1">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="bar"
          height={280}
        />
      </div>
    </div>
  );
};

const ApexChartDonut = () => {
  const [state] = React.useState({
    series: [225, 182, 156, 128, 104, 70],
    options: {
      chart: {
        type: 'donut',
        height: 320,
      },
      labels: ['Deluxe Suite', 'Superior Room', 'Executive Suite', 'Standard Room', 'Premium Deluxe', 'Family Suite'],
      colors: ['#0d6efd', '#d1e345', '#f0f4c3', '#f8f9fa', '#e9ecef', '#6ea8fe'],
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 3,
        colors: ['#ffffff']
      },
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
          }
        }
      },
      legend: {
        show: true,
        position: 'right',
        offsetY: 40,
        itemMargin: {
          vertical: 8
        },
        formatter: function (seriesName, opts) {
          return seriesName + "  -  " + opts.w.globals.series[opts.seriesIndex] + " Booked";
        }
      },
      tooltip: {
        enabled: true,
      }
    },
  });

  return (
    <div className="h-100 d-flex flex-column p-2">
      <div className="d-flex justify-content-between align-items-center pb-4">
        <h2 className="fs-5 fw-bold text-dark  pt-2 ps-2">Most Booked</h2>
        <span className="text-muted fw-bold">...</span>
      </div>
      <div className="flex-grow-1 position-relative">
        <ReactApexChart options={state.options} series={state.series} type="donut" height={320} />
      </div>
    </div>
  );
}

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filteredReservations = ReservationsData.filter((reservation) => {
    const guest = GuestsData.find((g) => g.id === reservation.guestId);

    const searchString = searchTerm.toLowerCase();

    const matchesSearch =
      (guest?.name || "").toLowerCase().includes(searchString) ||
      (reservation.bookingId || "")
        .toLowerCase()
        .includes(searchString) ||
      (reservation.status || "").toLowerCase().includes(searchString);

    const matchesStatus =
      statusFilter === "All Status" ||
      reservation.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      <Container fluid className="reservation-page rounded-4 p-3">
        <Row className="g-3 mb-2 h-100">
          <Col lg={4}>
            <Row className="g-3 mb-4">
              <Col lg={6}>
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Body className="p-3">
                    <div className="d-flex justify-content-between align-items-start mb-3 mt-2">
                      <h3 className="fw-bold mb-0 text-dark">42</h3>
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm icon">
                        <FaCalendarDays size={14} />
                      </div>
                    </div>
                    <p className="text-muted small mb-4">Total Reservations Today</p>
                    <div className="d-flex align-items-center gap-2">
                      <Badge className="rounded-pill px-2 py-1 d-flex align-items-center gap-1 border-0 fw-bold percentage-text mb-2">
                        <GraphUpArrow size={12} />
                        +9.3%
                      </Badge>
                      <span className="text-muted fw-bold card-text">from last month</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Body className="p-3">
                    <div className="d-flex justify-content-between align-items-start mb-3 mt-2">
                      <h3 className="fw-bold mb-0 text-dark">3.6</h3>
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm icon">
                        <GiDuration size={14} />
                      </div>
                    </div>
                    <p className="text-muted small mb-4 fw-bold">Average Stay Duration</p>
                    <div className="d-flex align-items-center gap-2">
                      <Badge className="rounded-pill px-2 py-1 d-flex align-items-center gap-1 border-0 fw-bold percentage-text mb-2">
                        <GraphUpArrow size={15} /> +12.5%
                      </Badge>
                      <span className="text-muted fw-bold card-text">from last month</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="g-3">
              <Col lg={6}>
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Body className="p-3">
                    <div className="d-flex justify-content-between align-items-start mb-3 mt-2">
                      <h3 className="fw-bold mb-0 text-dark">80%</h3>
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm icon">
                        <BiSolidLike size={14} />
                      </div>
                    </div>
                    <p className="text-muted small mb-4 fw-bold">Confirmed Rate</p>
                    <div className="d-flex align-items-center gap-2">
                      <Badge className="rounded-pill px-2 py-1 d-flex align-items-center gap-1 border-0 fw-bold percentage-text mb-2">
                        <GraphUpArrow size={12} /> +3.3%
                      </Badge>
                      <span className="text-muted fw-bold card-text">from last month</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6}>
                <Card className="border-0 shadow-sm rounded-4 h-100">
                  <Card.Body className="p-3">
                    <div className="d-flex justify-content-between align-items-start mb-3 mt-2">
                      <h3 className="fw-bold mb-0 text-dark">4.8%</h3>
                      <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow-sm icon">
                        <FaCalendar size={14} />
                      </div>
                    </div>
                    <p className="text-muted small mb-4 fw-bold">Cancellation Rate</p>
                    <div className="d-flex align-items-center gap-2">
                      <Badge className="rounded-pill px-2 py-1 d-flex align-items-center gap-1 border-0 fw-bold percentage-text mb-2">
                        <GraphDownArrow /> -2.2%
                      </Badge>
                      <span className="text-muted card-text fw-bold">from last month</span>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4 h-100">
              <ApexChart />
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="border-0 shadow-sm rounded-4 h-100">
              <ApexChartDonut />
            </Card>
          </Col>
        </Row>
        <div className="rounded-4 p-1 mt-3">
          <Card className="border-0 shadow-sm rounded-4">
            <Card.Body className="p-4">
              {/* Header */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fs-4 fw-bold mb-0">Reservation</h2>
                <div className="d-flex gap-4">
                  <InputGroup className="bg-light rounded-pill border-0 px-4">
                    <InputGroup.Text className="bg-transparent border-0 pe-1">
                      <Search className="text-muted" />
                    </InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Search guest, id, etc"
                      className="bg-transparent border-0 px-2"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </InputGroup>
                  <Form.Select
                    className="bg-light border-0 rounded-pill ps-3"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option>All Status</option>
                    <option>Confirmed</option>
                    <option>Pending</option>
                    <option>Canceled</option>
                  </Form.Select>
                </div>
              </div>
              {/* Table */}
              <Table responsive="xxl" hover className="align-middle mb-0">
                <thead>
                  <tr>
                    <th>Booking Id & Guest <ChevronExpand/></th>
                    <th>Room Type <ChevronExpand/></th>
                    <th>Room <ChevronExpand/></th>
                    <th>Request <ChevronExpand/></th>
                    <th>Duration <ChevronExpand/></th>
                    <th>Check-In/Out <ChevronExpand/></th>
                    <th>Status <ChevronExpand/></th>
                    <th>Source <ChevronExpand/></th>
                    <th>Payment <ChevronExpand/></th>
                    <th>Action <ChevronExpand/></th>
                  </tr>
                </thead>

                <tbody>
                  {filteredReservations.map((reservation) => {
                    const guest = GuestsData.find(
                      (g) => g.id === reservation.guestId
                    );
                    const room = RoomsData.find(
                      (r) => r.id === reservation.roomId
                    );

                    return (
                      <tr key={reservation.id}>
                        <td>
                          <strong>{reservation.bookingId}</strong>
                          <div className="text-muted small">
                            {guest?.name || "Unknown"}
                          </div>
                        </td>

                        <td>{room?.name || "Unknown"}</td>
                        <td>{reservation.roomNumber}</td>
                        <td>{reservation.request || "-"}</td>
                        <td>{reservation.duration}</td>

                        <td>
                          <div>{reservation.checkIn}</div>
                          <small className="text-muted">
                            {reservation.checkOut}
                          </small>
                        </td>

                        <td>
                          <Badge
                            className="p-2 rounded-pill text-dark bg-opacity-25"
                            bg={
                              reservation.status === "confirmed"
                                ? "success"
                                : reservation.status === "pending"
                                  ? "warning"
                                  : "danger"
                            }
                          >
                            {reservation.status}
                          </Badge>
                        </td>

                        <td>{reservation.source}</td>

                        <td>
                          {reservation.payment}
                        </td>

                        <td>
                          <div className="d-flex gap-2">
                            <button className="btn btn-light btn-sm">
                              <Eye size={16} />
                            </button>
                            <button className="btn btn-light btn-sm">
                              <PencilSquare size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </div>
      </Container >
    </>
  );
};

export default Page;
