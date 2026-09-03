"use client";

import React, { useState } from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { StarFill, ThreeDots, GraphUpArrow } from "react-bootstrap-icons";
import dynamic from "next/dynamic";


import { ReviewsData } from "@/data/ReviewsData";
import { GuestsData } from "@/data/GuestData";
import { RoomsData } from "@/data/RoomsData";

import "../../../styles/scss/theme/reviews.scss";

// Dynamic import for ApexCharts to avoid SSR issues
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ReviewStatsChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Reviews",
        data: [40, 75, 80, 78],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 200,
        toolbar: { show: false },
      },
      colors: ["#D8EB12", "#0d6efd", "#D8EB12", "#0d6efd"],
      plotOptions: {
        bar: {
          columnWidth: "90%",
          borderRadius: 4,
          distributed: true,
          dataLabels: {
            position: "top", // top, center, bottom
          },
        },
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: "12px",
          colors: ["#304758"],
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: ["Week 1", "Week 2", "Week 3", "Week 4"],
        axisBorder: { show: false },
        axisTicks: { show: false },
        labels: {
          style: {
            colors: "#adb5bd",
            fontSize: "15px",
          },
        },
      },
      yaxis: {
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          style: {
            colors: "#adb5bd",
          },
        },
      },
      grid: {
        borderColor: "#f1f3f5",
        strokeDashArray: 4,
      },
      legend: {
        show: false,
      },
    },
  });

  return (
    <div className="mt-3">
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={280}
      />
    </div>
  );
};
const RatingsChart = () => {
  const [state] = useState({
    series: [85],
    options: {
      chart: {
        type: "radialBar",
        height: 280,
      },
      plotOptions: {
        radialBar: {
          startAngle: 0,
          endAngle: 360,
          hollow: {
            margin: 15,
            size: "65%",
            background: "#f1f5f9",
            image: undefined,
          },
          track: {
            background: "#D8EB12",
            strokeWidth: "100%",
            margin: 0,
            dropShadow: {
              enabled: false,
            },
          },
          dataLabels: {
            show: false,
          },
        },
      },
      fill: {
        type: "solid",
        colors: ["#0d6efd"],
      },
      stroke: {
        lineCap: "round",
      },
    },
  });

  const ratingCategories = [
    { name: "Location", rating: 4.7 },
    { name: "Value for Money", rating: 4.4 },
    { name: "Facilities / Amenities", rating: 4.5 },
    { name: "Service / Staff", rating: 5.0 },
    { name: "Comfort", rating: 4.6 },
    { name: "Cleanliness", rating: 4.8 },
  ];

  return (
    <div>
      <div className="position-relative d-flex justify-content-center align-items-center">
        <ReactApexChart
          options={state.options}
          series={state.series}
          type="radialBar"
          height={320}
        />
        <div className="position-absolute text-center d-flex flex-column align-items-center justify-content-center rating-center-content">
          <span className="text-muted small mb-1">Excellent Rating</span>
          <div className="d-flex align-items-baseline justify-content-center">
            <span className="fw-bold text-dark fs-2 lh-1">4.7</span>
            <span className="text-muted fs-5 lh-1 ms-1">/5.0</span>
          </div>
          <span className="text-muted small mt-1">1,248 Reviews</span>
        </div>
      </div>

      <div className="rating-breakdown px-3">
        {ratingCategories.map((cat, idx) => (
          <div key={idx} className="rating-row">
            <span>{cat.name}</span>
            <div className="d-flex align-items-center gap-2">
              <span className="rating-value">{cat.rating.toFixed(1)}</span>
              <div className="rating-stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarFill
                    key={star}
                    size={10}
                    color={star <= Math.round(cat.rating) ? "#ffc107" : "#e9ecef"}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  // Sort rooms by a mock score to get top 3
  const topRooms = [...RoomsData]
    .sort((a, b) => b.price - a.price) // using price as a proxy for "top rated" here or we could just take first 3
    .slice(0, 3);

  const mockRoomStats = [
    { rating: 4.7, occupancy: 92, tags: ["view", "comfortable", "service", "spacious"] },
    { rating: 4.9, occupancy: 88, tags: ["modern", "quiet", "business", "lounge"] },
    { rating: 4.7, occupancy: 85, tags: ["elegant", "cleanliness", "design", "relaxing"] },
  ];

  return (
    <Container fluid className="reviews-page p-3">
      <Row className="g-3 mb-4">
        {/* Review Statistics */}
        <Col lg={4}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0 text-dark fs-6">Review Statistics</h5>
                <div className="d-flex rounded-2">
                  <Badge bg="light" text="dark" className="border-0 fw-normal">
                    This Week
                  </Badge>
                  <Badge className="bg-primary bg-opacity-25 text-primary border-0 graph" >
                    This Month
                  </Badge>
                  <Badge bg="light" text="dark" className="border-0 fw-normal">
                    This Year
                  </Badge>
                </div>
              </div>
              <Row className="g-2 mb-2 mt-3 rate">
                <Col sm={6}>
                  <div className="border rounded-4 p-2">
                    <div className="text-muted small fw-bold mb-4 mt-2">Total Guests</div>
                    <h3 className="fw-bold mb-0 fs-5 mb-2">1,248 Reviews</h3>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="border rounded-4 p-2 d-flex flex-column justify-content-center h-100">
                    <div className="text-muted small fw-bold mb-4 mt-2">Average Rating</div>
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <h3 className="fw-bold mb-0 fs-5">68,25%</h3>
                      <Badge className="rounded-pill px-2 py-1 d-flex align-items-center gap-1 border-0 fw-bold graph">
                        <GraphUpArrow size={10} /> +1.4%
                      </Badge>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mt-4 p-0">
                <Col lg={12} className="p-0">
                  <ReviewStatsChart />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        {/* Ratings */}
        <Col lg={3}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <h5 className="fw-bold mb-0 text-dark">Ratings</h5>
                <ThreeDots className="text-muted" size={20} />
              </div>
              <RatingsChart />
            </Card.Body>
          </Card>
        </Col>
        {/* Top-Rated Room Type */}
        <Col lg={5}>
          <Card className="border-0 shadow-sm h-100">
            <Card.Body>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h5 className="fw-bold mb-0 text-dark">Top-Rated Room Type</h5>
                <ThreeDots className="text-muted" size={20} />
              </div>
              <div className="room-list">
                {topRooms.map((room, index) => {
                  const stats = mockRoomStats[index];
                  return (
                    <div key={room.id} className="room-list-item">
                      <img src={room.image} alt={room.name} className="room-image" />
                      <div className="room-details">
                        <div className="room-header">
                          <h5>
                            <span className="rank-badge">{index + 1}</span> {room.name}
                          </h5>
                          <div className="room-price">
                            ${room.price}<span>/night</span>
                          </div>
                        </div>
                        <div className="room-stats">
                          <div className="rating">
                            {stats.rating}
                            <div className="stars">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <StarFill
                                  key={star}
                                  size={12}
                                  color={star <= Math.round(stats.rating) ? "#ffc107" : "#e9ecef"}
                                />
                              ))}
                            </div>
                          </div>
                          <div className="occupancy">
                            Occupancy Rate <span>{stats.occupancy}%</span>
                          </div>
                        </div>
                        <div className="room-tags">
                          {stats.tags.map((tag, i) => (
                            <span key={i} className="tag">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* Reviews Section */}
      <Card className="border-0 shadow-sm">
        <Card.Body className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold mb-0 text-dark">Reviews</h5>
            <ThreeDots className="text-muted" size={20} />
          </div>

          <Row className="g-4">
            {ReviewsData.map((review) => {
              const guest = GuestsData.find((g) => g.id === review.guestId);
              const room = RoomsData.find((r) => r.id === review.roomId);
              const guestName = guest?.name || "Unknown Guest";

              // Get initials for avatar
              const initials = guestName
                .split(" ")
                .map((n) => n[0])
                .join("")
                .substring(0, 2);

              return (
                <Col md={6} xl={3} key={review.id}>
                  <div className="review-card">
                    <div className="reviewer-info">
                      <div className="avatar">{initials}</div>
                      <div className="details">
                        <h6>{guestName}</h6>
                        <div className="rating">
                          <div className="stars">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <StarFill
                                key={star}
                                size={12}
                                color={star <= Math.round(review.rating) ? "#ffc107" : "#e9ecef"}
                              />
                            ))}
                          </div>
                          <span>{review.rating.toFixed(1)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="stay-info">
                      <span className="room-type">{room?.name || "Room"}</span>
                      <span>{review.date}</span>
                    </div>

                    <p className="comment">{review.comment}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Page;
