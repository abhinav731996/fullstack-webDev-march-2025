"use client";

import styles from "@/styles/scss/theme/auth/Registration.module.scss";
import { userAPI } from "@/app/services/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Page = () => {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
  } = useForm();

  const registerUser = async (data) => {
    return await userAPI.post("/users", data);
    
  };

  const handleOnSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const response = await registerUser(data);

      toast.success("Account Created");

      reset();

      router.push("/signin");

      console.log(response.data);
      

    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
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
                Create Your Hotelfy Account
              </h4>
              <p className={`${styles.subtitle} mb-4`}>
                Join Hotelify to streamline your hotel management, track
                performance, and provide exceptional guest experiences.
              </p>

              <Form onSubmit={handleSubmit(handleOnSubmit)}>
                {/* Username */}
                <Form.Group className="mb-3">
                  <Form.Label className={styles.fmLabel}>Full Name</Form.Label>
                  <Form.Control
                    className={styles.input}
                    placeholder="Enter your name"
                    {...register("name", { required: true })}
                  />
                </Form.Group>

                {/* Email */}
                <Form.Group className="mb-3">
                  <Form.Label className={styles.fmLabel}>Email</Form.Label>
                  <Form.Control
                    className={styles.input}
                    type="email"
                    placeholder="Enter email"
                    {...register("email", { required: true })}
                  />
                </Form.Group>

                {/* Password Row */}
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.fmLabel}>
                        Password
                      </Form.Label>
                      <InputGroup>
                        <Form.Control
                          className={styles.input}
                          type={showPass ? "text" : "password"}
                          placeholder="Enter Password"
                          {...register("password", { required: true })}
                        />
                        {/* <Button
                          variant="light"
                          onClick={() => setShowPass(!showPass)}
                        >
                          {showPass ? <FaEyeSlash /> : <FaEye />}
                        </Button> */}
                      </InputGroup>
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label className={styles.fmLabel}>
                        Confirm Password
                      </Form.Label>
                      <Form.Control
                        className={styles.input}
                        type="password"
                        placeholder="Enter Confirm Password"
                        {...register("confirmPassword", {
                          required: true,
                        })}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                {/* Hotel Name */}
                <Form.Group className="mb-3">
                  <Form.Label className={styles.fmLabel}>Hotel Name</Form.Label>
                  <Form.Control
                    className={styles.input}
                    placeholder="Enter hotel name"
                    {...register("hotel", {
                          required: true,
                        })}
                  />
                </Form.Group>

                {/* Terms */}
                <Form.Check
                  className={`${styles.checkbox} mb-3`}
                  label="I agree to Terms & Conditions"
                  required
                />

                <div className={styles.bottomBtn}>
                  {/* Button */}
                  <Button
                    type="submit"
                    className={styles.button}
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Spinner size="sm" className="me-2" />
                        Creating...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </Button>

                  {/* Login */}
                  <div className={styles.link}>
                    <p>Already have an account?</p>
                    <Link href="/signin">Login here</Link>
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
