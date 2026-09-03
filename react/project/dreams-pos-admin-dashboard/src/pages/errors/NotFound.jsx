
import { Link } from "react-router-dom";

import notFound from "/images/404/error.PNG";

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-card">
        {/* IMAGE */}
        <div className="error-image">
          <img
            src={notFound}
            alt="404 Error"
          />
        </div>

        {/* CONTENT */}
        <div className="error-content">
          <h2>Oops, something went wrong</h2>

          <p>
            Error 404 Page not found. Sorry the page you looking for
            doesn&apos;t exist or has been moved
          </p>

          <Link to="/dashboard" className="back-btn">
            <i className="bi bi-arrow-left-circle"></i>
            Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;