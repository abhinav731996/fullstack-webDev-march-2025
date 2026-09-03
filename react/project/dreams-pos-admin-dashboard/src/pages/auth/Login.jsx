import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../feature/authSlice";

import authImg from "/images/auth/login.jpg";
import logo from "../../assets/icons/logo/Logo.png";

import {AdminUser} from '../../data/UserData'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
  e.preventDefault();

  // LocalStorage Users
  const localUsers =
    JSON.parse(localStorage.getItem("dreamsUsers")) || [];

  // Merge Admin + Local Users
  const allUsers = [...AdminUser, ...localUsers];

  // Match User
  const matchedUser = allUsers.find(
    (user) =>
      user.email === email &&
      user.password === password
  );

  if (!matchedUser) {
    alert("Invalid Credentials");
    return;
  }

  // Save Logged User
  dispatch(login(matchedUser));

  navigate("/dashboard");
};

  return (
    <div className="auth-page">
      <div className="auth-container">

        {/* LEFT SIDE */}
        <div className="auth-left">

          <div className="auth-content">

            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            <h2>Sign In</h2>

            <p className="subtitle">
              Access the Dreamspos panel using your email and password.
            </p>

            <form onSubmit={handleSubmit}>

              <div className="form-group">
                <label>Email</label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label>Password</label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div className="auth-options">

                <div className="remember">
                  <input type="checkbox" />
                  <span>Remember Me</span>
                </div>

                <Link to="/forgot-password" className="forgot">
                  Forgot Password?
                </Link>

              </div>

              <button type="submit" className="btn auth-btn">
                Sign In
              </button>

            </form>

            <div className="auth-footer">
              <p>
                New on our platform?
                <Link to="/register"> Create an account</Link>
              </p>

              <div className="divider">
                <span>OR</span>
              </div>

              <div className="social-login">

                <button className="social-btn facebook">
                  <i className="bi bi-facebook"></i>
                </button>

                <button className="social-btn google">
                  <i className="bi bi-google"></i>
                </button>

                <button className="social-btn apple">
                  <i className="bi bi-apple"></i>
                </button>

              </div>
            </div>

            <div className="copyright">
              Copyright © 2025 - DreamsPOS
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="auth-right">
          <img src={authImg} alt="auth" />
        </div>

      </div>
    </div>
  );
};

export default Login;