// pages/dashboard.jsx
"use client";

import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import { Card, Row, Col, Table, Container } from "react-bootstrap";
import styles from "../../styles/scss/theme/Dashboard.module.scss";
import { DashboardData } from "../../data/DashboardData";
import {
  BoxArrowInLeft,
  BoxArrowInRight,
  ChevronDown,
  ChevronExpand,
  GraphDownArrow,
  GraphUpArrow,
  PatchCheck,
  PersonCircle,
  PersonRolodex,
  Search,
} from "react-bootstrap-icons";
import { GuestsData } from "@/data/GuestData";
import { RoomsData } from "@/data/RoomsData";
import Chart from "react-apexcharts";

// For charts (you need to import dynamic, react & "use client")
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

// Chart-1
const revenueOptions = {
  chart: {
    type: "area",
    toolbar: { show: false },
  },
  stroke: {
    curve: "smooth",
    width: 3,
  },
  colors: ["#c1e24a"],
  fill: {
    type: "gradient",
    // gradient: {
    //   shadeIntensity: 1,
    //   opacityFrom: 0.4,
    //   opacityTo: 0.1,
    // },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  },
  yaxis: {
    labels: {
      formatter: (val) => `$${val / 1000}K`,
    },
  },
  tooltip: {
    y: {
      formatter: (val) => `$${val}`,
    },
  },
};

const revenueSeries = [
  {
    name: "Revenue",
    data: [280000, 180000, 315000, 220000, 300000, 310000],
  },
];

// chart-2
const occupancyOptions = {
  chart: {
    type: "bar",
    toolbar: { show: false },
  },
  colors: ["#4A90E2"],
  plotOptions: {
    bar: {
      columnWidth: "50%",
      borderRadius: 6,
    },
  },
  xaxis: {
    categories: [
      "12 Jun",
      "13 Jun",
      "14 Jun",
      "15 Jun",
      "16 Jun",
      "17 Jun",
      "18 Jun",
    ],
  },
  yaxis: {
    max: 100,
  },
  dataLabels: {
    enabled: false,
  },
};

const occupancySeries = [
  {
    name: "Occupied",
    data: [70, 45, 60, 72, 55, 68, 52],
  },
];

//chart-3
const bookingOptions = {
  chart: {
    type: "donut",
  },
  labels: ["Direct Website", "OTA", "Walk-ins", "Corporate"],
  colors: ["#bce24a", "#5052e3", "#eaeaea", "#eaeaea"],
  plotOptions: {
    pie: {
      donut: {
        size: "75%",
        labels: {
          show: true,
          total: {
            show: true,
            label: "",
            formatter: () => "🏨",
          },
        },
      },
    },
  },
  legend: {
    show: false, // ❗ Image me side labels hai, bottom legend nahi
  },
  dataLabels: {
    enabled: false,
  },
};
const bookingSeries = [42, 33, 15, 10];

// chart-4
const ratingOptions = {
  chart: {
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: {
        size: "65%",
      },
      track: {
        background: "#eaeaea",
      },
      dataLabels: {
        name: {
          show: false,
        },
        value: {
          fontSize: "24px",
          fontWeight: 600,
          formatter: (val) => `${val} / 5`,
        },
      },
    },
  },
  colors: ["#4A90E2"],
};

const ratingSeries = [4.7];

// right side chart
const MiniBarChart = () => {
  const options = {
    chart: {
      type: "bar",
      sparkline: { enabled: true },
    },
    plotOptions: {
      bar: {
        columnWidth: "60%",
        borderRadius: 3,
      },
    },
    colors: ["#258BFB"],
  };

  const series = [
    {
      data: [10, 12, 8, 14, 9, 11, 13, 10, 12, 8, 14, 9],
    },
  ];

  return (
    <ReactApexChart options={options} series={series} type="bar" height={80} />
  );
};

export default function Dashboard() {
  const totalRooms = 120;
  const occupied = DashboardData.filter((d) => d.status === "checkedIn").length;
  const pending = DashboardData.filter((d) => d.status === "pending").length;
  const reserved = DashboardData.filter((d) => d.status === "reserved").length;
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Status");

  //  Optimize lookup (O(1))
  const guestsMap = useMemo(() => {
    return Object.fromEntries(GuestsData.map((g) => [g.id, g]));
  }, []);

  const roomsMap = useMemo(() => {
    return Object.fromEntries(RoomsData.map((r) => [r.id, r]));
  }, []);

  const filteredReservations = DashboardData.filter((reservation) => {
    const guest = guestsMap[reservation.guestId];

    const searchString = searchTerm.toLowerCase();

    const matchesSearch =
      (guest?.name || "").toLowerCase().includes(searchString) ||
      reservation.bookingId.toLowerCase().includes(searchString) ||
      reservation.status.toLowerCase().includes(searchString);

    const matchesStatus =
      statusFilter === "All Status" ||
      reservation.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  return (
    <Container fluid className={styles.dashboardContainer}>
      <Row>
        <Col lg={9}>
          {/* top bar */}
          <div className={styles.cardPrimary}>
            <div className={styles.leftDetails}>
              <h2>Hi, Polina</h2>
              <p>Saturday, 25 November 2028</p>
              <div className={styles.bluCard}>
                <div className="d-flex flex-column">
                  <p>Total Earnings</p>
                  <h2>$58,240</h2>
                </div>
                <div className={styles.prmArrow}>
                  <span>
                    <GraphUpArrow /> +15.6%
                  </span>
                  <p>from last week</p>
                </div>
              </div>
            </div>

            <div className={styles.gryCard}>
              <div className={styles.cdlogo}>
                <PatchCheck />
              </div>
              <div className="d-flex flex-column">
                <p>New Reservations</p>
                <h2>128</h2>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <span>
                  <GraphUpArrow /> +12.4%
                </span>
                <p>from last week</p>
              </div>
            </div>

            <div className={styles.gryCard}>
              <div className={styles.cdlogo}>
                <BoxArrowInRight />
              </div>
              <div className="d-flex flex-column">
                <p>Guests Checked In</p>
                <h2>94</h2>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <span>
                  <GraphUpArrow /> +8.7%
                </span>
                <p>week-over-week</p>
              </div>
            </div>

            <div className={styles.gryCard}>
              <div className={styles.cdlogo}>
                <BoxArrowInLeft />
              </div>
              <div className="d-flex flex-column">
                <p>Guests Checked Out</p>
                <h2>76</h2>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <span className={styles.redCor}>
                  <GraphDownArrow /> -3.2%
                </span>
                <p>from last week</p>
              </div>
            </div>
          </div>

          {/* Chart */}

          {/* chart-1 */}
          <Row className="mb-4">
            <Col md={6}>
              <Card className={styles.cardBox}>
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Room Availability</h6>
                  <span className={styles.btnGry}>
                    Last 6 Months <ChevronDown />
                  </span>
                </div>
                <Chart
                  options={revenueOptions}
                  series={revenueSeries}
                  type="area"
                  height={250}
                />
              </Card>
            </Col>

            {/* chart-2 */}
            <Col md={6}>
              <Card className={styles.cardBox}>
                <div className="d-flex justify-content-between align-items-center">
                  <h6>Occupancy Trend</h6>
                  <span className={styles.btnGry}>
                    Last 7 Days <ChevronDown />
                  </span>
                </div>
                <Chart
                  options={occupancyOptions}
                  series={occupancySeries}
                  type="bar"
                  height={250}
                />
              </Card>
            </Col>
          </Row>

          <Row className="mb-4">
            {/* Cart-3 */}
            <Col md={6}>
              <Card className={styles.cardBox}>
                <div className="d-flex align-items-center justify-content-between">
                  <h6>Booking Source</h6>
                  <span>...</span>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <Chart
                    options={bookingOptions}
                    series={bookingSeries}
                    type="donut"
                    width={180}
                  />

                  <div className={styles.bookingLabels}>
                    <div>
                      <p>Direct Website 42%</p>
                      
                    </div><br/>
                    <div>
                      <p>Online Travel Agencies (OTA) 33%</p>
                      
                    </div><br/>
                    <div>
                      <p>Walk-in Guests 15%</p>
                      
                    </div><br/>
                    <div>
                      <p>Corporate Partnerships 10%</p>
                      
                    </div><br/>
                  </div>
                </div>
              </Card>
            </Col>

            {/* chart-4 */}
            <Col md={6}>
              <Card className={styles.cardBox}>
                <div  className="d-flex align-items-center justify-content-between">
                <h6>Booking Source</h6>
                <span>...</span>

                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <Chart
                    options={ratingOptions}
                    series={ratingSeries}
                    type="radialBar"
                    width={250}
                  />

                  <div className={styles.ratingBreakdown}>
                    <div>
                      Cleanliness <span>4.8</span>
                    </div><br/>
                    <div>
                      Comfort <span>4.6</span>
                    </div><br/>
                    <div>
                      Service & Staff <span>4.9</span>
                    </div><br/>
                    <div>
                      Facilities <span>4.5</span>
                    </div><br/>
                    <div>
                      Value for Money <span>4.6</span>
                    </div><br/>
                    <div>
                      Location <span>4.7</span>
                    </div><br/>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>

          {/* Booking List / Table*/}
          <Card className={styles.tableWrapper}>
            {/* HEADER */}
            <div className={styles.tableHeader}>
              <h2>Overall Rating</h2>

              <div className={styles.filters}>
                {/* SEARCH */}
                <div className={styles.searchBox}>
                  <Search />
                  <input
                    type="text"
                    placeholder="Search guest, id..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                {/* FILTER */}
                <select
                  className={styles.selectBox}
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option>All Status</option>
                  <option>confirmed</option>
                  <option>pending</option>
                  <option>canceled</option>
                </select>
              </div>
            </div>

            {/* TABLE */}
            <div className={styles.table}>
              <Table responsive hover>
                <thead>
                  <tr>
                    <th>
                      Booking Id & Guest <ChevronExpand />
                    </th>
                    <th>
                      Room Type <ChevronExpand />
                    </th>
                    <th>
                      Room <ChevronExpand />
                    </th>
                    <th>
                      Duration <ChevronExpand />
                    </th>
                    <th>
                      Check-In/Out <ChevronExpand />
                    </th>
                    <th>
                      Status <ChevronExpand />
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredReservations.map((reservation) => {
                    const guest = guestsMap[reservation.guestId];
                    const room = roomsMap[reservation.roomId];

                    return (
                      <tr key={reservation.id}>
                        <td>
                          <strong>{reservation.bookingId}</strong>
                          <p className={styles.subText}>
                            {guest?.name || "Unknown"}
                          </p>
                        </td>

                        <td>{room?.name || "Unknown"}</td>
                        <td>{reservation.roomNumber}</td>

                        <td>{reservation.duration}</td>

                        <td>
                          <div>{reservation.checkIn}</div>
                          <span className={styles.subText}>
                            {reservation.checkOut}
                          </span>
                        </td>

                        <td>
                          <span
                            className={`${styles.badge} ${
                              reservation.status === "confirmed"
                                ? styles.success
                                : reservation.status === "pending"
                                  ? styles.warning
                                  : styles.danger
                            }`}
                          >
                            {reservation.status}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>

        {/* right side */}
        <Col lg={3}>
          <div className={styles.rightSidebar}>
            {/* ROOM AVAILABILITY */}
            <div className={styles.sideCard}>
              <div className={styles.cardHeader}>
                <h6>Room Availability</h6>
                <span>...</span>
              </div>

              <p className={styles.subText}>Total All Rooms</p>
              <h3>120</h3>

              <MiniBarChart />

              <div className={styles.legend}>
                <span>
                  <i className={styles.blue}></i> 68 Occupied
                </span>
                <span>
                  <i className={styles.gray}></i> 25 Available
                </span>
                <span>
                  <i className={styles.yellow}></i> 22 Reserved
                </span>
                <span>
                  <i className={styles.light}></i> 5 Not Ready
                </span>
              </div>
            </div>

            {/* TASKS */}
            <div className={styles.sideCard}>
              <div className={styles.cardHeader}>
                <h6>Tasks</h6>
                <button className={styles.addBtn}>+</button>
              </div>

              <div className="d-flex gap-2 align-items-start">
                <input type="checkbox" />
                <div className={styles.taskItem}>
                  <div>
                    <p>Confirm Group Booking for VIP Guests</p>
                    <span>March 12, 2035</span>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-2 align-items-start">
                <input type="checkbox" />
                <div className={styles.taskItem}>
                  <div>
                    <p>Update Room Maintenance Schedule</p>
                    <span>March 13, 2035</span>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-2 align-items-start">
                <input type="checkbox" />
                <div className={styles.taskItem}>
                  <div>
                    <p>Review Monthly Revenue Report</p>
                    <span>March 14, 2035</span>
                  </div>
                </div>
              </div>

              <div className="d-flex gap-2 align-items-start">
                <input type="checkbox" />
                <div className={styles.taskItem}>
                  <div>
                    <p>Coordinate Staff Shift Assignments</p>
                    <span>March 15, 2035</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RECENT ACTIVITIES */}
            <div className={styles.sideCard}>
              <div className={styles.cardHeader}>
                <h6>Recent Activities</h6>
                <span>...</span>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.icon}>
                  <PersonRolodex />
                </div>
                <div>
                  <p>Front Desk Admin</p>
                  <div>
                    <span>Checked in Emily Carter to Room 210.</span>
                  </div>
                  <div>
                    <span>9:45 AM</span>
                  </div>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.icon2}>
                  <PersonCircle />
                </div>
                <div>
                  <p>Housekeeping Team</p>
                  <div>
                    <span>Marked Room 305 as Clean & Ready.</span>
                  </div>
                  <div>
                    <span>9:20 AM</span>
                  </div>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.icon}>
                  <PersonRolodex />
                </div>
                <div>
                  <p>Front Desk Admin</p>
                  <div>
                    <span>Checked in Emily Carter to Room 210.</span>
                  </div>
                  <div>
                    <span>9:45 AM</span>
                  </div>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.icon2}>
                  <PersonCircle />
                </div>
                <div>
                  <p>Housekeeping Team</p>
                  <div>
                    <span>Marked Room 305 as Clean & Ready.</span>
                  </div>
                  <div>
                    <span>9:20 AM</span>
                  </div>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.icon}>
                  <PersonRolodex />
                </div>
                <div>
                  <p>Front Desk Admin</p>
                  <div>
                    <span>Checked in Emily Carter to Room 210.</span>
                  </div>
                  <div>
                    <span>9:45 AM</span>
                  </div>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.icon2}>
                  <PersonCircle />
                </div>
                <div>
                  <p>Housekeeping Team</p>
                  <div>
                    <span>Marked Room 305 as Clean & Ready.</span>
                  </div>
                  <div>
                    <span>9:20 AM</span>
                  </div>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.icon}>
                  <PersonRolodex />
                </div>
                <div>
                  <p>Front Desk Admin</p>
                  <div>
                    <span>Checked in Emily Carter to Room 210.</span>
                  </div>
                  <div>
                    <span>9:45 AM</span>
                  </div>
                </div>
              </div>

              <div className={styles.activityItem}>
                <div className={styles.icon2}>
                  <PersonCircle />
                </div>
                <div>
                  <p>Housekeeping Team</p>
                  <div>
                    <span>Marked Room 305 as Clean & Ready.</span>
                  </div>
                  <div>
                    <span>9:20 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
