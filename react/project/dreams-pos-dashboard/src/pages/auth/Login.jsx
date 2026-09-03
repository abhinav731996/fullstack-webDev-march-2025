import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "123456"
    ) {
      login({
        email: formData.email,
      });

      navigate("/");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-page d-flex align-items-center justify-content-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h3 className="mb-4">Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={formData.password}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password: e.target.value,
                })
              }
            />
          </div>

          <button className="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

// import { Link } from "react-router-dom";
// import loginBanner from "../../assets/images/login-banner.jpg";

// const Login = () => {
const navigate = useNavigate();
const { login } = useAuth();

const [formData, setFormData] = useState({
  email: "",
  password: "",
});

const handleSubmit = (e) => {
  e.preventDefault();

  if (formData.email === "admin@gmail.com" && formData.password === "123456") {
    login({
      email: formData.email,
    });

    navigate("/");
  } else {
    alert("Invalid Credentials");
  }
};
//   return (
//     <div className="auth-wrapper">
//       <div className="container-fluid">
//         <div className="row auth-card">

//           <div className="col-lg-6 left-side">

//             <img
//               src="https://dreamspotech.com/html/template/dreamspos/assets/img/logo.png"
//               alt="logo"
//               className="logo"
//             />

//             <h2>Sign In</h2>

//             <p>
//               Access the Dreamspos panel using your email and password.
//             </p>

//                     <form onSubmit={handleSubmit}>
        //   <div className="mb-3">
        //     <label>Email</label>
        //     <input
        //       type="email"
        //       className="form-control"
        //       value={formData.email}
        //       onChange={(e) =>
        //         setFormData({
        //           ...formData,
        //           email: e.target.value,
        //         })
        //       }
        //     />
        //   </div>

        //   <div className="mb-3">
        //     <label>Password</label>
        //     <input
        //       type="password"
        //       className="form-control"
        //       value={formData.password}
        //       onChange={(e) =>
        //         setFormData({
        //           ...formData,
        //           password: e.target.value,
        //         })
        //       }
        //     />
        //   </div>

        //   <button className="btn btn-primary w-100">Login</button>
        // </form>
        //       </div>
//             <button className="auth-btn w-100">
//               Sign In
//             </button>

//             <div className="text-center mt-4 bottom-text">
//               New on our platform?{" "}
//               <Link to="/register">
//                 Create an account
//               </Link>
//             </div>

//             <div className="divider">
//               <span>OR</span>
//             </div>

//             <div className="social-login">
//               <button className="facebook">
//                 <i className="bi bi-facebook"></i>
//               </button>

//               <button className="google">
//                 <i className="bi bi-google"></i>
//               </button>

//               <button className="apple">
//                 <i className="bi bi-apple"></i>
//               </button>
//             </div>

//             <div className="copyright">
//               Copyright © 2025 - DreamsPOS
//             </div>

//           </div>

//           <div className="col-lg-6 right-side p-0">
//             <img
//               src={loginBanner}
//               alt="login"
//             />
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
