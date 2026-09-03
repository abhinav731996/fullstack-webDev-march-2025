import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar bg-dark text-white p-3">
      <h4 className="mb-4">DreamsPOS</h4>

      <ul className="list-unstyled">
        <li>
          <NavLink to="/" className="nav-link text-white">
            Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/products" className="nav-link text-white">
            Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/sales" className="nav-link text-white">
            Sales
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;