"use client";

import { usePathname } from "next/navigation";
import styles from "../styles/scss/theme/Header.module.scss";
import { Search, Bell, ChatDots, Buildings } from "react-bootstrap-icons";
import { List } from "react-bootstrap-icons";

export default function Header({ toggleSidebar }) {
  const pathname = usePathname();

  const pageTitles = {
    "/": "Dashboard",
    "/inbox": "Inbox",
    "/calendar": "Calendar",
    "/campaigns": "Campaigns",
    "/campaigns/reservations": "Reservation",
    "/campaigns/guest-profile": "Guest Profile",
    "/rooms/rooms": "Rooms",
    "/rooms/create-new-room": "Rooms",
    "/housekeeping": "Housekeeping",
    "/inventory": "Inventory",
    "/finance/finance": "Finance",
    "/finance/invoice": "Invoice",
    "/reviews": "Reviews",
  };

  const title = pageTitles[pathname] || "Dashboard";
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        {/* LEFT */}
        <div className={styles.left}>
          <span className={styles.logo}>
            <Buildings className={styles.logo} />
          </span>
        </div>

        {/* CENTER → TITLE */}
        <div className={styles.center}>
          <h4>{title}</h4>
        </div>

        {/* RIGHT → TOGGLE (MOBILE ONLY) */}
        <div className={styles.righttog}>
          <div className="d-md-none" onClick={toggleSidebar}>
            <List size={26} />
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        {/* SEARCH */}
        <div className={styles.search}>
          <Search className={styles.searchIcon} />
          <input type="text" placeholder="Search placeholder" />
        </div>

        {/* ICONS */}
        <div className={styles.icons}>
          <div className={styles.iconBox}>
            <ChatDots />
          </div>
          <div className={styles.iconBox}>
            <Bell />
          </div>
        </div>

        {/* PROFILE */}
        <div className={styles.profile}>
          <img src="https://i.pravatar.cc/40" alt="user" />
          <div>
            <p>Polina Streward</p>
            <small>Admin</small>
          </div>
        </div>
      </div>
    </header>
  );
}
