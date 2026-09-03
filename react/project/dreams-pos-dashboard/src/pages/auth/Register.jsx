import { Link } from "react-router-dom";
import registerBanner from "../../assets/images/register-banner.jpg";

const Register = () => {
  return (
    <div className="auth-wrapper">
      <div className="container-fluid">
        <div className="row auth-card">

          <div className="col-lg-6 left-side">

            <img
              src="https://dreamspotech.com/html/template/dreamspos/assets/img/logo.png"
              alt="logo"
              className="logo"
            />

            <h2>Register</h2>

            <p>Create New Dreamspos Account</p>

            <div className="mb-3">
              <label className="form-label">
                Name
              </label>

              <input
                type="text"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Email Address
              </label>

              <input
                type="email"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">
                Password
              </label>

              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                />

                <span className="input-group-text">
                  <i className="bi bi-eye-slash"></i>
                </span>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">
                Confirm Password
              </label>

              <div className="input-group">
                <input
                  type="password"
                  className="form-control"
                />

                <span className="input-group-text">
                  <i className="bi bi-eye-slash"></i>
                </span>
              </div>
            </div>

            <div className="form-check mb-4">
              <input
                type="checkbox"
                className="form-check-input"
                id="terms"
              />

              <label
                htmlFor="terms"
                className="form-check-label"
              >
                I agree to the Terms & Privacy
              </label>
            </div>

            <button className="auth-btn w-100">
              Sign Up
            </button>

            <div className="text-center mt-4 bottom-text">
              Already have account?{" "}
              <Link to="/">
                Sign In Instead
              </Link>
            </div>

            <div className="divider">
              <span>OR</span>
            </div>

            <div className="social-login">
              <button className="facebook">
                <i className="bi bi-facebook"></i>
              </button>

              <button className="google">
                <i className="bi bi-google"></i>
              </button>

              <button className="apple">
                <i className="bi bi-apple"></i>
              </button>
            </div>

            <div className="copyright">
              Copyright © 2025 - DreamsPOS
            </div>

          </div>

          <div className="col-lg-6 right-side p-0">
            <img
              src={registerBanner}
              alt="register"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;