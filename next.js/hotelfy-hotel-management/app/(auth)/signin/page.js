"use client";

import styles from "@/styles/scss/theme/auth/Signin.module.scss";
import { userAPI } from "@/app/services/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const router = useRouter();

const getUsers = async () => {
  const response = await userAPI.get("/users");
  return response.data;
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const email = e.target.email.value;
    const password = e.target.password.value;

    const users = await getUsers();

    if (!Array.isArray(users)) {
      throw new Error("Invalid API response");
    }

    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // ✅ Set cookie
      document.cookie = "login=true; path=/; max-age=86400; SameSite=Lax";

      // optional
      localStorage.setItem("user", JSON.stringify(user));

      toast.success("Login Successful");

      // ✅ force reload so middleware runs
      window.location.href = "/";
    } else {
      toast.error("Invalid Email or Password");
    }
  } catch (error) {
    console.error("ERROR:", error.response?.data || error.message);
    toast.error("Something went wrong!");
  }
};

  return (
    <Container fluid className={styles.container}>
      <Row>
        {/* LEFT */}
        <Col md={6} className={styles.leftPanel}>
          <div className={styles.imageWrapper}>
            <img
              src="https://cdn.prod.website-files.com/65dd0177604937b8c498ea54/67b779f29f0ab121000e65c1__robert_granoff_palm_house_pool_ver_5_v2_sky%20web.webp"
              alt="auth"
            />
          </div>
        </Col>

        {/* RIGHT */}
        <Col md={6} xs={12} className={styles.rightPanel}>
          <Card className={styles.card}>
            <Card.Body>
              <h4 className={`${styles.title} mb-1`}>
                Welcome Back to Hotelify
              </h4>
              <p className={`${styles.subtitle} mb-4`}>
                Sign in to manage reservations, track performance, and keep your
                operations running smoothly.
              </p>

              <Form onSubmit={handleSubmit}>
                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label className={styles.fmLabel}>
                    Email Address
                  </Form.Label>
                  <Form.Control
                    name="email"
                    className={styles.input}
                    type="email"
                    placeholder="Enter Email Address"
                    required
                  />
                </Form.Group>

                {/* Password Row */}

                <Form.Group className="mb-3">
                  <Form.Label className={styles.fmLabel}>Password</Form.Label>
                  <InputGroup>
                    <Form.Control
                      name="password"
                      className={styles.input}
                      type="password"
                      placeholder="Enter Password"
                      required
                    />
                  </InputGroup>
                </Form.Group>

                {/* Remember */}
                <Form.Check
                  className={`${styles.checkbox} mb-3`}
                  label="Remember Me"
                  // required
                />

                <div className={styles.bottomBtn}>
                  {/* Button */}
                  <Button
                    type="submit"
                    className={styles.button}
                    // disabled={loading}
                  >
                    Login to Dashboard
                  </Button>

                  {/* Login */}
                  <div className={styles.link}>
                    <p>Don't have an account yet?</p>
                    <Link href="/registration">Register Now</Link>
                  </div>
                </div>
              </Form>

              <ToastContainer />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Page;
