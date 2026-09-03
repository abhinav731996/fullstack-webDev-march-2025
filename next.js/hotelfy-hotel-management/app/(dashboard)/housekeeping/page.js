"use client";

import React, { useState, useMemo } from "react";
import { Container, Card, Table, Dropdown } from "react-bootstrap";
import { ChevronExpand } from "react-bootstrap-icons";
import { HouseKeepingData } from "@/data/HouseKeepingData";

import "../../../styles/scss/theme/housekeeping.scss";

const getStatusClass = (status) => {
  switch (status) {
    case "cleaningInProgress":
      return "status-cleaning";
    case "completed":
      return "status-completed";
    case "pending":
      return "status-pending";
    default:
      return "status-cleaning";
  }
};

const getStatusLabel = (status) => {
  switch (status) {
    case "cleaningInProgress":
      return "Cleaning in Progress";
    case "completed":
      return "Completed";
    case "pending":
      return "Pending";
    default:
      return "Unknown";
  }
};

const getPriorityClass = (priority) => {
  switch (priority) {
    case "high":
      return "priority-high";
    case "normal":
      return "priority-normal";
    case "low":
      return "priority-low";
    default:
      return "priority-normal";
  }
};

const getPriorityLabel = (priority) => {
  switch (priority) {
    case "high":
      return "High";
    case "normal":
      return "Normal";
    case "low":
      return "Low";
    default:
      return "Unknown";
  }
};

const Page = () => {
  const [sortConfig, setSortConfig] = useState(null);
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [priorityFilter, setPriorityFilter] = useState("Priority");
  const [floorFilter, setFloorFilter] = useState("Floor");

  const handleSort = (key) => {
    let direction = 'asc';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  const sortedData = useMemo(() => {
    let filteredItems = [...HouseKeepingData];

    if (statusFilter !== "All Status") {
      filteredItems = filteredItems.filter(item => getStatusLabel(item.housekeepingStatus) === statusFilter);
    }
    
    if (priorityFilter !== "Priority") {
      filteredItems = filteredItems.filter(item => getPriorityLabel(item.priority) === priorityFilter);
    }
    
    if (floorFilter !== "Floor") {
      filteredItems = filteredItems.filter(item => item.floor === floorFilter);
    }

    if (sortConfig !== null) {
      filteredItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    return filteredItems;
  }, [sortConfig, statusFilter, priorityFilter, floorFilter]);

  return (
    <Container fluid className="housekeeping-page p-3 rounded-4">
      <Card className="border-0 shadow-sm p-2">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="fw-bold mb-0 text-dark">List Orders</h5>
            <div className="header-actions">
              <Dropdown onSelect={(e) => setStatusFilter(e)}>
                <Dropdown.Toggle className="btn-status" id="dropdown-status">
                  {statusFilter}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="All Status">All Status</Dropdown.Item>
                  <Dropdown.Item eventKey="Cleaning in Progress">Cleaning in Progress</Dropdown.Item>
                  <Dropdown.Item eventKey="Completed">Completed</Dropdown.Item>
                  <Dropdown.Item eventKey="Pending">Pending</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>   
              <Dropdown className="hide-mobile" onSelect={(e) => setPriorityFilter(e)}>
                <Dropdown.Toggle className="btn-priority" id="dropdown-priority">
                  {priorityFilter}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Priority">All</Dropdown.Item>
                  <Dropdown.Item eventKey="High">High</Dropdown.Item>
                  <Dropdown.Item eventKey="Normal">Normal</Dropdown.Item>
                  <Dropdown.Item eventKey="Low">Low</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="hide-mobile" onSelect={(e) => setFloorFilter(e)}>
                <Dropdown.Toggle className="btn-floor" id="dropdown-floor">
                  {floorFilter}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="Floor">All</Dropdown.Item>
                  <Dropdown.Item eventKey="1st">1st</Dropdown.Item>
                  <Dropdown.Item eventKey="2nd">2nd</Dropdown.Item>
                  <Dropdown.Item eventKey="3rd">3rd</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="show-mobile">
                <Dropdown.Toggle className="btn-sort" id="dropdown-sort-mobile">
                  Filters
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Header>Priority: {priorityFilter}</Dropdown.Header>
                  <Dropdown.Item onClick={() => setPriorityFilter("Priority")}>All</Dropdown.Item>
                  <Dropdown.Item onClick={() => setPriorityFilter("High")}>High</Dropdown.Item>
                  <Dropdown.Item onClick={() => setPriorityFilter("Normal")}>Normal</Dropdown.Item>
                  <Dropdown.Item onClick={() => setPriorityFilter("Low")}>Low</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Floor: {floorFilter}</Dropdown.Header>
                  <Dropdown.Item onClick={() => setFloorFilter("Floor")}>All</Dropdown.Item>
                  <Dropdown.Item onClick={() => setFloorFilter("1st")}>1st</Dropdown.Item>
                  <Dropdown.Item onClick={() => setFloorFilter("2nd")}>2nd</Dropdown.Item>
                  <Dropdown.Item onClick={() => setFloorFilter("3rd")}>3rd</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>

          <div className="table-responsive">
            <Table hover className="custom-table align-middle text-nowrap">
              <thead>
                <tr>
                  <th onClick={() => handleSort('roomNumber')}>
                    Room <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('floor')}>
                    Floor <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('roomType')}>
                    Room Type <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('housekeepingStatus')}>
                    Housekeeping Status <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('priority')}>
                    Priority <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('reservationStatus')}>
                    Reservation Status <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('assignedStaff')}>
                    Assigned Staff <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                  <th onClick={() => handleSort('notes')}>
                    Notes <ChevronExpand className="ms-1 sort-icon" size={12} />
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedData.length > 0 ? sortedData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.roomNumber}</td>
                    <td>{item.floor}</td>
                    <td>
                      <div className="room-type">
                        <span className="dot"></span>
                        {item.roomType}
                      </div>
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle 
                          variant="light" 
                          className={`status-badge ${getStatusClass(item.housekeepingStatus)}`}
                        >
                          {getStatusLabel(item.housekeepingStatus)}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>Cleaning in Progress</Dropdown.Item>
                          <Dropdown.Item>Completed</Dropdown.Item>
                          <Dropdown.Item>Pending</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td>
                      <Dropdown>
                        <Dropdown.Toggle 
                          variant="light" 
                          className={`priority-badge ${getPriorityClass(item.priority)}`}
                        >
                          <span className="p-dot"></span>
                          {getPriorityLabel(item.priority)}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>High</Dropdown.Item>
                          <Dropdown.Item>Normal</Dropdown.Item>
                          <Dropdown.Item>Low</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </td>
                    <td className="text-capitalize">{item.reservationStatus}</td>
                    <td>{item.assignedStaff}</td>
                    <td className="text-muted">{item.notes}</td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="8" className="text-center py-4">No records found matching the selected filters</td>
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
