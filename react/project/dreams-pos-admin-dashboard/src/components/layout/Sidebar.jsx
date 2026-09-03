import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo/Logo.png";

const Sidebar = ({ showSidebar }) => {
  return (
    <aside
  className={`sidebar ${
    showSidebar ? "show-sidebar" : ""
  }`}
>
      {/* LOGO */}
      <div className="sidebar-header">
        <NavLink to="/dashboard">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
        </NavLink>
      </div>

      {/* MAIN */}
      <div className="sidebar-padding">
        <div className="sidebar-section">
          <p className="section-title">Main</p>

          <ul>
            <li>
              <NavLink to="/dashboard" className="active-link">
                <div className="menu-item">
                  <i className="bi bi-grid"></i>
                  <span>Dashboard</span>
                </div>

                <i className="bi bi-chevron-down arrow-icon"></i>
              </NavLink>
            </li>

            <li>
              <NavLink to="/admin">
                <div className="menu-item">
                  <i className="bi bi-person"></i>
                  <span>Super Admin</span>
                </div>

                <i className="bi bi-chevron-right arrow-icon"></i>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* INVENTORY */}
        <div className="sidebar-section">
          <p className="section-title">Inventory</p>

          <ul>
            <li>
              <NavLink to="/products">
                <div className="menu-item">
                  <i className="bi bi-box"></i>
                  <span>Products</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/create-product">
                <div className="menu-item">
                  <i className="bi bi-plus-square"></i>
                  <span>Create Product</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/expired-products">
                <div className="menu-item">
                  <i className="bi bi-exclamation-circle"></i>
                  <span>Expired Products</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/low-stocks">
                <div className="menu-item">
                  <i className="bi bi-graph-down-arrow"></i>
                  <span>Low Stocks</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/category">
                <div className="menu-item">
                  <i className="bi bi-ui-checks-grid"></i>
                  <span>Category</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/subcategory">
                <div className="menu-item">
                  <i className="bi bi-grid"></i>
                  <span>Sub Category</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/brands">
                <div className="menu-item">
                  <i className="bi bi-handbag"></i>
                  <span>Brands</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/units">
                <div className="menu-item">
                  <i className="bi bi-rulers"></i>
                  <span>Units</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/variant-attributes">
                <div className="menu-item">
                  <i className="bi bi-columns-gap"></i>
                  <span>Variant Attributes</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/warranties">
                <div className="menu-item">
                  <i className="bi bi-shield-check"></i>
                  <span>Warranties</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/print-barcode">
                <div className="menu-item">
                  <i className="bi bi-upc-scan"></i>
                  <span>Print Barcode</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/print-qr">
                <div className="menu-item">
                  <i className="bi bi-qr-code"></i>
                  <span>Print QR Code</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* STOCK */}
        <div className="sidebar-section">
          <p className="section-title">Stock</p>

          <ul>
            <li>
              <NavLink to="/manage-stock">
                <div className="menu-item">
                  <i className="bi bi-box-seam"></i>
                  <span>Manage Stock</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/stock-adjustment">
                <div className="menu-item">
                  <i className="bi bi-magic"></i>
                  <span>Stock Adjustment</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/stock-transfer">
                <div className="menu-item">
                  <i className="bi bi-truck"></i>
                  <span>Stock Transfer</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* SALES */}
        <div className="sidebar-section">
          <p className="section-title">Sales</p>

          <ul>
            <li>
              <NavLink to="/sales">
                <div className="menu-item">
                  <i className="bi bi-cart"></i>
                  <span>Sales</span>
                </div>

                <i className="bi bi-chevron-right arrow-icon"></i>
              </NavLink>
            </li>

            <li>
              <NavLink to="/invoices">
                <div className="menu-item">
                  <i className="bi bi-receipt"></i>
                  <span>Invoices</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/sales-return">
                <div className="menu-item">
                  <i className="bi bi-arrow-counterclockwise"></i>
                  <span>Sales Return</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/quotation">
                <div className="menu-item">
                  <i className="bi bi-file-earmark-text"></i>
                  <span>Quotation</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-display"></i>
                  <span>POS</span>
                </div>

                <i className="bi bi-chevron-right arrow-icon"></i>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Promo */}
        <div className="sidebar-section">
          <p className="section-title">Promo</p>

          <ul>
            <li>
              <NavLink to="/sales">
                <div className="menu-item">
                  <i className="bi bi-ticket-perforated"></i>
                  <span>Coupons</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/invoices">
                <div className="menu-item">
                  <i className="bi bi-wallet2"></i>
                  <span>Gift Card</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-file-earmark-medical"></i>
                  <span>Discount</span>
                </div>

                <i className="bi bi-chevron-right arrow-icon"></i>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Purchases */}
        <div className="sidebar-section">
          <p className="section-title">Purchases</p>

          <ul>
            <li>
              <NavLink to="/sales">
                <div className="menu-item">
                  <i className="bi bi-bag"></i>
                  <span>Purchases</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/invoices">
                <div className="menu-item">
                  <i className="bi bi-file-earmark-check"></i>
                  <span>Purchase Order</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-file-earmark-arrow-up"></i>
                  <span>Purchase Return</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Finance */}
        <div className="sidebar-section">
          <p className="section-title">ProFinance & Accounts</p>

          <ul>
            <li>
              <NavLink to="/sales">
                <div className="menu-item">
                  <i className="bi bi-file-break"></i>
                  <span>Expenses</span>
                </div>

                <i className="bi bi-chevron-right arrow-icon"></i>
              </NavLink>
            </li>

            <li>
              <NavLink to="/invoices">
                <div className="menu-item">
                  <i className="bi bi-file-earmark-diff"></i>
                  <span>Income</span>
                </div>

                <i className="bi bi-chevron-right arrow-icon"></i>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-bank"></i>
                  <span>Bank Accounts</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-piggy-bank"></i>
                  <span>Money Transfer</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-file-earmark-binary"></i>
                  <span>Balance Sheet</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-exclamation-circle"></i>
                  <span>Trial Balance</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-search"></i>
                  <span>Cash Flow</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-file-earmark-font"></i>
                  <span>Account Statement</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Peoples */}
        <div className="sidebar-section">
          <p className="section-title">Peoples</p>

          <ul>
            <li>
              <NavLink to="/sales">
                <div className="menu-item">
                  <i className="bi bi-people"></i>
                  <span>Customers</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/invoices">
                <div className="menu-item">
                  <i className="bi bi-person-up"></i>
                  <span>Biller</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-person-down"></i>
                  <span>Suppliers</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-houses"></i>
                  <span>Stores</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-archive"></i>
                  <span>Warehouses</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* HRM */}
        <div className="sidebar-section">
          <p className="section-title">HRM</p>

          <ul>
            <li>
              <NavLink to="/sales">
                <div className="menu-item">
                  <i className="bi bi-person"></i>
                  <span>Employees</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/invoices">
                <div className="menu-item">
                  <i className="bi bi-compass"></i>
                  <span>Department</span>
                </div>
              </NavLink>
            </li>

            <li>
              <NavLink to="/pos">
                <div className="menu-item">
                  <i className="bi bi-share"></i>
                  <span>Desigination</span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
