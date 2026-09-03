import { col } from 'motion/react-client';
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      alert("Please fill all fields");
      return;
    }

    // Save user
    localStorage.setItem("user", JSON.stringify(user));

    alert("Registered Successfully ✅");

    navigate("/auth/login");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">

        <div className="card p-4 shadow">

        <div className='mb-5'>
          <h2 className="h4 text-center">Login/Sign In</h2>
                  <h3 className="fs-6 fw-normal text-secondary text-center m-0">
                    Enter your details to Login
                  </h3>
        </div>

          <Form onSubmit={handleSubmit}>

            <Row >
            <Form.Group as={Col} className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter firstname"
                name="firstname"
                value={user.firstname}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} className="mb-3">
              <Form.Control
                type="text"
                placeholder="Enter lastname"
                name="lastname"
                value={user.lastname}
                onChange={handleChange}
              />
            </Form.Group>
            </Row>

            
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Enter Email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                value={user.password}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Control
                type="number"
                placeholder="Enter Phone number"
                name="phone"
                value={user.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Button type="submit" className="w-100">
              Register
            </Button>

          </Form>

          <p className="text-center mt-3">
            Already have account?{" "}
            <NavLink to="/auth/login">Login</NavLink>
          </p>

        </div>

      </div>
    </div>
  );
};

export default Register;