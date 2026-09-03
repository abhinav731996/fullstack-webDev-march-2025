"use client";

import { useReducer } from "react";
import { RoomsData } from "@/data/RoomsData";
import styles from "@/styles/scss/theme/rooms/Rooms.module.scss";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import {
  AspectRatio,
  Check,
  HouseDoor,
  People,
  SegmentedNav,
  Sliders2,
  Water,
} from "react-bootstrap-icons";

const initialState = {
  selectedRoom: RoomsData[0],
  sortBy: "popular",
  roomType: "all",
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECT_ROOM":
      return { ...state, selectedRoom: action.payload };
    case "SET_SORT":
      return { ...state, sortBy: action.payload };
    case "SET_TYPE":
      return { ...state, roomType: action.payload };
    default:
      return state;
  }
}

export default function RoomsPage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  let filteredRooms = [...RoomsData];

  if (state.roomType !== "all") {
    filteredRooms = filteredRooms.filter((room) =>
      room.name.toLowerCase().includes(state.roomType.toLowerCase())
    );
  }

  if (state.sortBy === "price") {
    filteredRooms.sort((a, b) => a.price - b.price);
  }

  const occupancy =
    (state.selectedRoom.bookedRooms /
      state.selectedRoom.totalRooms) *
    100;

  return (
    <Container fluid className={styles.container}>
      <Row>
        {/* LEFT */}
        <Col lg={8}>
          <div className={styles.left}>
            <div className={styles.header}>
              <h4>Room Category</h4>

              <div className={styles.controls}>
                <span>Sort by:</span>

                <Dropdown>
                  <Dropdown.Toggle className={styles.dropdown}>
                    {state.sortBy === "popular" ? "Popular" : "Price"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => dispatch({ type: "SET_SORT", payload: "popular" })}>
                      Popular
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch({ type: "SET_SORT", payload: "price" })}>
                      Price
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                  <Dropdown.Toggle className={styles.dropdown}>
                    {state.roomType === "all" ? "All Type" : state.roomType}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => dispatch({ type: "SET_TYPE", payload: "all" })}>
                      All Type
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch({ type: "SET_TYPE", payload: "Deluxe" })}>
                      Deluxe
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch({ type: "SET_TYPE", payload: "Suite" })}>
                      Suite
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <button className={styles.addBtn}>Add Room</button>
                <button className={styles.filterBtn}>
                  <Sliders2 />
                </button>
              </div>
            </div>

            {/* CARDS */}
            {filteredRooms.map((room) => (
              <div
                key={room.id}
                className={styles.card}
                onClick={() =>
                  dispatch({ type: "SELECT_ROOM", payload: room })
                }
              >
                <img src={room.image} alt="" />

                <div className={styles.info}>
                  {/* TOP */}
                  <div className={styles.top}>
                    <h5>{room.name}</h5>

                    <span
                      className={
                        room.status === "available"
                          ? styles.available
                          : styles.full
                      }
                    >
                      {room.status === "available"
                        ? "Available"
                        : "Fully Booked"}
                    </span>
                  </div>

                  <div className={styles.description}>
                  {/* DESC */}
                  <p>{room.description}</p>
                  {/* PRICE RIGHT */}
                <div className={styles.price}>
                  <h4>${room.price}</h4>{" "}
                  <span> /night</span>
                </div>
                </div>
                  <hr/>

                  {/* META */}
                  <div className={styles.meta}>
                    <span><AspectRatio /> <span className={styles.icnDtl}> {room.size}</span> </span>
                    <span><SegmentedNav /> <span className={styles.icnDtl}> {room.bed} </span></span>
                    <span><People /> <span className={styles.icnDtl}>{room.guests} guests </span></span>
                    <span><HouseDoor /> <span className={styles.icnDtl}> {room.bookedRooms}/{room.totalRooms} Rooms </span></span>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </Col>

        {/* RIGHT */}
<Col lg={4}>
  <div className={styles.right}>
    
    {/* HEADER */}
    <div className={styles.rightHeader}>
      <h3>{state.selectedRoom.name}</h3>
      <span
        className={
          state.selectedRoom.status === "available"
            ? styles.available
            : styles.full
        }
      >
        {state.selectedRoom.status === "available"
          ? "Available"
          : "Fully Booked"}
      </span>
    </div>

    {/* OCCUPANCY */}
    <p className={styles.occupancyText}>
      {state.selectedRoom.bookedRooms} /{" "}
      {state.selectedRoom.totalRooms} Rooms –{" "}
      {Math.round(
        (state.selectedRoom.bookedRooms /
          state.selectedRoom.totalRooms) *
          100
      )}
      % Occupied
    </p>

    <div className={styles.progress}>
      <div
        style={{
          width: `${
            (state.selectedRoom.bookedRooms /
              state.selectedRoom.totalRooms) *
            100
          }%`,
        }}
      />
    </div>

    {/* IMAGE */}
    <img
      src={state.selectedRoom.image}
      className={styles.mainImage}
      alt=""
    />

    <div className="d-flex flex-row gap-1 justify-content-between">
      <img
      src={state.selectedRoom.image}
      className={styles.mainImage2}
      alt=""
    />
      <img
      src={state.selectedRoom.image}
      className={styles.mainImage2}
      alt=""
    />
      <img
      src={state.selectedRoom.image}
      className={styles.mainImage2}
      alt=""
    />
      <img
      src={state.selectedRoom.image}
      className={styles.mainImage2}
      alt=""
    />
      <img
      src={state.selectedRoom.image}
      className={styles.mainImage2}
      alt=""
    />
    </div>

    {/* META (FIXED) */}
    <div className={styles.meta}>
      <span>
        <AspectRatio />
        <span className={styles.icnDtl}>
          {state.selectedRoom.size}
        </span>
      </span>

      <span>
        <SegmentedNav />
        <span className={styles.icnDtl}>
          {state.selectedRoom.bed}
        </span>
      </span>

      <span>
        <People />
        <span className={styles.icnDtl}>
          {state.selectedRoom.guests} guests
        </span>
      </span>

      <span>
        <HouseDoor />
        <span className={styles.icnDtl}>
          {state.selectedRoom.bookedRooms}/
          {state.selectedRoom.totalRooms} Rooms
        </span>
      </span>
    </div>
    <br/>

    {/* DESCRIPTION */}
    <p className={styles.desc}>
      {state.selectedRoom.description}
    </p>
    <br/>

    {/* FEATURES */}
    <h5>Features</h5>
<ul className={styles.gridList}>
  {state.selectedRoom.features.map((f, i) => (
    <li key={i}>
      <span className={styles.iconBox}>
        <Check />
      </span>
      <span>{f}</span>
    </li>
  ))}
</ul>
<br/>

    {/* FACILITIES */}
    <h5>Facilities</h5>
    <ul className={styles.gridList}>
      {state.selectedRoom.facilities.map((f, i) => (
        <li key={i}>
          <span>
        <Water />
      </span>
      <span>{f}</span>
        </li>
      ))}
    </ul>
    <br/>

    {/* AMENITIES */}
    <h5>Amenities</h5>
    <ul className={styles.gridList}>
      {state.selectedRoom.amenities.map((f, i) => (
        <li key={i}>
          <span className={styles.iconBox}>
        <Check />
      </span>
      <span>{f}</span>
        </li>
      ))}
    </ul>

  </div>
</Col>
      </Row>
    </Container>
  );
}