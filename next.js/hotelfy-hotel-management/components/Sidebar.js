"use client";

import React from "react";
import {
  BoxSeam,
  Building,
  Buildings,
  CalendarCheck,
  CalendarDate,
  Cash,
  ChatLeftText,
  Grid,
  HouseDoor,
  Megaphone,
  PersonBadge,
  Star,
} from "react-bootstrap-icons";
import styles from "../styles/scss/theme/Sidebar.module.scss";
import Accordion from "react-bootstrap/Accordion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = ({ closeSidebar }) => {
  const pathname = usePathname();

  return (
    <div>
      <div className="d-md-none text-end mb-3">
  <button onClick={closeSidebar}>X</button>
</div>
      <div className="d-flex flex-column align-item-center">
        <aside className={styles.sidebar}>
          <div className="mb-4">
            <h3>
              <Buildings className={styles.logo} /> Hotelfy
            </h3>
          </div>
          <div className="mb-4">
            <div className={styles.menu}>
              <li className={pathname === "/" ? styles.active : ""}>
                <Link href="/">
                  <Grid /> Dashboard
                </Link>
              </li>
              <li className={pathname === "/inbox" ? styles.active : ""}>
                <Link href="/inbox">
                  <ChatLeftText /> Inbox
                </Link>
              </li>
              <li className={pathname === "/calendar" ? styles.active : ""}>
                <Link href="/calendar">
                  <CalendarDate /> Calendar
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Megaphone /> Campaigns
                    </Accordion.Header>
                    <Accordion.Body>
                      <p><Link href={"/campaigns/reservations"}>Reservation</Link></p>
                      <p><Link href={"/campaigns/guest-profile"}>Guest Profile</Link></p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </li>
              <li className={pathname === "/rooms" ? styles.active : ""}>
                <Link href="/rooms">
                <HouseDoor /> Rooms
                </Link>
              </li>
              <li className={pathname === "/housekeeping" ? styles.active : ""}>
                <Link href="/housekeeping">
                <BoxSeam /> Housekeeping
                </Link>
              </li>
              <li className={pathname === "/inventory" ? styles.active : ""}>
                <Link href="/inventory">
                <CalendarCheck /> Inventory
                </Link>
              </li>

              <li className={styles.menuItem}>
                <Accordion flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Cash /> Finance
                    </Accordion.Header>
                    <Accordion.Body>
                      <p><Link href={"/finance/finance"}>Finance</Link></p>
                      <p><Link href={"/finance/invoice"}>Invoice</Link></p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </li>

              <li className={pathname === "/reviews" ? styles.active : ""}>
                <Link href="/reviews">
                <Star /> Reviews
                </Link>
              </li>
              <li className={pathname === "/register-login" ? styles.active : ""}>
                <Link href="/register-login">
                <PersonBadge /> Register & Login
                </Link>
              </li>
            </div>
          </div>
          <div className={styles.card}>
            <img src="https://i.pravatar.cc/40" alt="user" />
            <h5>Manage Smarter, Serve Better</h5>
            <p>
              Automate check-ins, monitor occupancy, and track performance
              effortlessly.
            </p>
            <button>Upgrade to Pro</button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
