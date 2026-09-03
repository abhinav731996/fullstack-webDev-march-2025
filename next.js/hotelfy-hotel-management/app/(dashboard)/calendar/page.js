"use client";

import React, { useState, useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import "@/styles/scss/theme/calendar.scss";

const CalendarPage = () => {
  const calendarRef = useRef(null);
  const [currentView, setCurrentView] = useState("dayGridMonth");
  const [calendarTitle, setCalendarTitle] = useState("");
  const [popover, setPopover] = useState({
    show: false,
    x: 0,
    y: 0,
    event: null,
  });

  const [showAddModal, setShowAddModal] = useState(false);
  const [newTask, setNewTask] = useState({
    title: "",
    date: "",
    time: "",
    category: "Staff Schedule",
    location: "",
    desc: "",
  });

  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();

  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Front Desk Morning Shift",
      start: new Date(currentYear, currentMonth, 10, 8, 0),
      className: "event-blue",
      extendedProps: {
        location: "Front Desk",
        desc: "Regular morning shift coverage.",
        type: "Staff Schedule",
        timeStr: "08:00 AM",
      },
    },
    {
      id: "2",
      title: "Air Conditioning Check",
      start: new Date(currentYear, currentMonth, 10, 15, 30),
      className: "event-yellow",
      extendedProps: {
        location: "All Floors",
        desc: "Routine check of AC units.",
        type: "Maintenance Task",
        timeStr: "03:30 PM",
      },
    },
    {
      id: "3",
      title: "Corporate Meeting: TechVision Ltd.",
      start: new Date(currentYear, currentMonth, 11, 10, 0),
      className: "event-red",
      extendedProps: {
        location: "Meeting Room A",
        desc: "Discuss annual contract renewal.",
        type: "Guest Appointment",
        timeStr: "10:00 AM",
      },
    },
    {
      id: "4",
      title: "Housekeeping Team Briefing",
      start: new Date(currentYear, currentMonth, 12, 8, 30),
      className: "event-blue",
      extendedProps: {
        location: "Meeting Room B - Ground Floor",
        desc: "Discuss upcoming occupancy surge, deep-cleaning priorities, and restock supply checklist.",
        type: "Staff Schedule",
        timeStr: "08:30 AM",
      },
    },
    {
      id: "5",
      title: "Room Inspection: VIP Guest",
      start: new Date(currentYear, currentMonth, 12, 14, 0),
      className: "event-red",
      extendedProps: {
        location: "Room 210 - Deluxe Suite",
        desc: "Pre-arrival check for executive guest; ensure welcome amenities are in place and minibar is stocked.",
        type: "Guest Appointment",
        timeStr: "02:00 PM",
      },
    },
    {
      id: "6",
      title: "Evening Shift Training",
      start: new Date(currentYear, currentMonth, 14, 17, 0),
      className: "event-yellow",
      extendedProps: {
        location: "Training Room",
        desc: "New POS system training.",
        type: "Staff Schedule",
        timeStr: "05:00 PM",
      },
    },
    {
      id: "7",
      title: "Restaurant Shift Change",
      start: new Date(currentYear, currentMonth, 15, 11, 30),
      className: "event-yellow",
      extendedProps: {
        location: "Main Restaurant",
        desc: "Shift handover meeting.",
        type: "Staff Schedule",
        timeStr: "11:30 AM",
      },
    },
    {
      id: "8",
      title: "Late Check-Out Coordination",
      start: new Date(currentYear, currentMonth, 15, 18, 0),
      className: "event-red",
      extendedProps: {
        location: "Front Desk",
        desc: "Coordinate late departures.",
        type: "Staff Schedule",
        timeStr: "06:00 PM",
      },
    },
    {
      id: "9",
      title: "Elevator Inspection",
      start: new Date(currentYear, currentMonth, 16, 9, 0),
      className: "event-blue",
      extendedProps: {
        location: "All Elevators",
        desc: "Monthly safety inspection.",
        type: "Maintenance Task",
        timeStr: "09:00 AM",
      },
    },
    {
      id: "10",
      title: "Monthly Staff Meeting",
      start: new Date(currentYear, currentMonth, 17, 14, 30),
      className: "event-yellow",
      extendedProps: {
        location: "Banquet Hall",
        desc: "All hands meeting.",
        type: "Staff Schedule",
        timeStr: "02:30 PM",
      },
    },
    {
      id: "11",
      title: "Pre-Event Setup Review",
      start: new Date(currentYear, currentMonth, 18, 16, 0),
      className: "event-red",
      extendedProps: {
        location: "Conference Center",
        desc: "Final walkthrough for weekend event.",
        type: "Staff Schedule",
        timeStr: "04:00 PM",
      },
    },
  ]);

  useEffect(() => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      setCalendarTitle(calendarApi.view.title);
    }
  }, [currentView]);

  const changeView = (viewName) => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.changeView(viewName);
      setCurrentView(viewName);
      setCalendarTitle(calendarApi.view.title);
      setPopover({ ...popover, show: false });
    }
  };

  const handlePrev = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.prev();
      setCalendarTitle(calendarApi.view.title);
      setPopover({ ...popover, show: false });
    }
  };

  const handleNext = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.next();
      setCalendarTitle(calendarApi.view.title);
      setPopover({ ...popover, show: false });
    }
  };

  const handleToday = () => {
    if (calendarRef.current) {
      const calendarApi = calendarRef.current.getApi();
      calendarApi.today();
      setCalendarTitle(calendarApi.view.title);
      setPopover({ ...popover, show: false });
    }
  };

  const handleEventClick = (info) => {
    const rect = info.el.getBoundingClientRect();
    let x = info.jsEvent.clientX + 15;
    let y = info.jsEvent.clientY + 15;

    if (x + 260 > window.innerWidth) x -= 280;
    if (y + 150 > window.innerHeight) y -= 160;

    setPopover({
      show: true,
      x: x,
      y: y,
      event: info.event,
    });

    info.jsEvent.preventDefault();
  };

  useEffect(() => {
    const closePopover = (e) => {
      if (
        popover.show &&
        !e.target.closest(".custom-event-popover") &&
        !e.target.closest(".fc-event")
      ) {
        setPopover({ ...popover, show: false });
      }
    };
    document.addEventListener("click", closePopover);
    return () => document.removeEventListener("click", closePopover);
  }, [popover.show]);

  const renderEventContent = (eventInfo) => {
    return (
      <div className="fc-event-main">
        <span className="event-time">{eventInfo.event.extendedProps.timeStr}</span>
        <span className="event-title">{eventInfo.event.title}</span>
      </div>
    );
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    let className = "event-blue";
    if (newTask.category === "Guest Appointment") className = "event-yellow";
    if (newTask.category === "Maintenance Task") className = "event-red";

    const [year, month, day] = newTask.date.split("-");
    const [hours, minutes] = newTask.time.split(":");

    const newEvent = {
      id: Date.now().toString(),
      title: newTask.title,
      start: new Date(year, month - 1, day, hours, minutes),
      className: className,
      extendedProps: {
        location: newTask.location,
        desc: newTask.desc,
        type: newTask.category,
      },
    };

    const dateObj = new Date();
    dateObj.setHours(hours);
    dateObj.setMinutes(minutes);
    newEvent.extendedProps.timeStr = dateObj.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setEvents([...events, newEvent]);
    setShowAddModal(false);
    setNewTask({
      title: "",
      date: "",
      time: "",
      category: "Staff Schedule",
      location: "",
      desc: "",
    });
    
    // Jump calendar to the newly added date
    if (calendarRef.current) {
        const calendarApi = calendarRef.current.getApi();
        calendarApi.gotoDate(newEvent.start);
        setCalendarTitle(calendarApi.view.title);
    }
  };

  return (
    <div className="calendar-page-container">
      <div className="calendar-card-wrapper">
        <Row className="g-0">
          <Col lg={3} md={4} className="calendar-sidebar-col sidebar-border">
            <div className="calendar-sidebar ">
              <h3>Schedule Overview</h3>
              <ul className="overview-list">
                <li className="active">
                  Total All Schedules <span className="count">{events.length}</span>
                </li>
                <li>
                  Staff Schedule <span className="count">{events.filter((e) => e.className === "event-blue").length}</span>
                </li>
                <li>
                  Guest Appointment <span className="count">{events.filter((e) => e.className === "event-yellow").length}</span>
                </li>
                <li>
                  Maintenance Task <span className="count">{events.filter((e) => e.className === "event-red").length}</span>
                </li>
              </ul>
              <div className="categories-list">
                <h4>Categories</h4>
                <ul>
                  <li>
                    <span className="indicator blue"></span> Staff Schedule
                  </li>
                  <li>
                    <span className="indicator yellow"></span> Guest Appointment
                  </li>
                  <li>
                    <span className="indicator red"></span> Maintenance Task
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={9} md={8} className="calendar-main-col">
            <div className="calendar-main">
              <div className="calendar-custom-header">
                <div className="view-toggles">
                  <button
                    className={currentView === "dayGridMonth" ? "active" : ""}
                    onClick={() => changeView("dayGridMonth")}
                  >
                    Month
                  </button>
                  <button
                    className={currentView === "timeGridWeek" ? "active" : ""}
                    onClick={() => changeView("timeGridWeek")}
                  >
                    Week
                  </button>
                  <button
                    className={currentView === "timeGridDay" ? "active" : ""}
                    onClick={() => changeView("timeGridDay")}
                  >
                    Day
                  </button>
                </div>
                <div className="current-date">
                  <button className="nav-btn" onClick={handlePrev}><FaChevronLeft /></button>
                  <h2 onClick={handleToday} style={{ cursor: "pointer" }} title="Go to Today">{calendarTitle}</h2>
                  <button className="nav-btn" onClick={handleNext}><FaChevronRight /></button>
                </div>
                <div className="header-actions">
                  <button className="category-dropdown">
                    All Category <FaChevronDown />
                  </button>
                  <button className="btn-add-new" onClick={() => setShowAddModal(true)}>
                    Add new
                  </button>
                </div>
              </div>
              <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={false}
                events={events}
                eventContent={renderEventContent}
                eventClick={handleEventClick}
                height="auto"
                dayMaxEvents={true}
              />
            </div>
          </Col>
        </Row>
      </div>
      {/* Custom Popover */}
      {popover.show && popover.event && (
        <div
          className="custom-event-popover"
          style={{ top: `${popover.y}px`, left: `${popover.x}px` }}
        >
          <div className="popover-header">
            <h4>Schedule Details</h4>
            <button onClick={() => setPopover({ ...popover, show: false })}>
              &times;
            </button>
          </div>
          <div
            className={`popover-content ${
              popover.event.className.includes("event-blue")
                ? "blue"
                : popover.event.className.includes("event-yellow")
                ? "yellow"
                : "red"
            }`}
          >
            <span className="time">{popover.event.extendedProps.timeStr}</span>
            <span className="title">{popover.event.title}</span>
            <span className="location">{popover.event.extendedProps.location}</span>
            <p className="desc">{popover.event.extendedProps.desc}</p>
          </div>
        </div>
      )}
      {/* Add Task Modal */}
      <Modal show={showAddModal} onHide={() => setShowAddModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Task</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleAddTask}>
          <Modal.Body>
            <Form.Group className="mb-3">
              <Form.Label>Task Title</Form.Label>
              <Form.Control
                type="text"
                required
                value={newTask.title}
                onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                placeholder="e.g. Morning Meeting"
              />
            </Form.Group>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    required
                    value={newTask.date}
                    onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    required
                    value={newTask.time}
                    onChange={(e) => setNewTask({ ...newTask, time: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                value={newTask.category}
                onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
              >
                <option value="Staff Schedule">Staff Schedule</option>
                <option value="Guest Appointment">Guest Appointment</option>
                <option value="Maintenance Task">Maintenance Task</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                value={newTask.location}
                onChange={(e) => setNewTask({ ...newTask, location: e.target.value })}
                placeholder="e.g. Conference Room A"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={newTask.desc}
                onChange={(e) => setNewTask({ ...newTask, desc: e.target.value })}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-danger" className="rounded-4" onClick={() => setShowAddModal(false)}>
              Cancel
            </Button>
            <Button className="addtask" type="submit">
              Add Task
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
};

export default CalendarPage;
