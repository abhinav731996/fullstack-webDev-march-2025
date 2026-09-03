const OrderStatics = () => {
  const days = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];

  const rows = [
    ["light", "light", "light", "light", "light", "dark", "dark"],
    ["light", "light", "light", "light", "dark", "light", "light"],
    ["light", "dark", "dark", "light", "light", "light", "light"],
    ["light", "light", "light", "light", "light", "light", "light"],
    ["dark", "dark", "dark", "light", "light", "light", "light"],
    ["light", "light", "light", "light", "light", "dark", "dark"],
    ["light", "light", "light", "light", "light", "light", "light"],
    ["dark", "dark", "dark", "dark", "light", "light", "light"],
    ["dark", "dark", "dark", "light", "light", "light", "light"],
  ];

  return (
    <div className="order-grid-wrapper">
      <div className="days">
        {days.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </div>

      <div className="order-grid">
        {rows.flat().map((item, index) => (
          <div
            key={index}
            className={`grid-box ${
              item === "dark" ? "active-box" : ""
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatics;