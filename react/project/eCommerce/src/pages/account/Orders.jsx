import React from 'react'
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";


const Orders = () => {
  return (
    <div>
      <Container className="mt-5">
      <h2 className="text-center mb-4">Order Summaries</h2>

      <Row>
        {/* LEFT SIDE - FORM */}
        <Col md={7}>
          <h4 className="mb-3">Billing Information</h4>

          <Form>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control placeholder="Christine" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control placeholder="Johnson" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control placeholder="christine@email.com" />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control placeholder="+1 (987) 654 3210" />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Address 1</Form.Label>
                  <Form.Control placeholder="Street / House No." />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control placeholder="Apartment / Area" />
                </Form.Group>
              </Col>
            </Row>

            <Button
              variant="primary"
              className="w-100 mt-3"
              style={{ borderRadius: "10px", padding: "10px" }}
            >
              Confirm
            </Button>
          </Form>
        </Col>

        {/* RIGHT SIDE - SUMMARY */}
        <Col md={5}>
          {/* PRICE CARD */}
          <Card className="p-3 mb-3 shadow-sm">
            <div className="d-flex justify-content-between mb-2">
              <span>Product Price</span>
              <strong>$220.00</strong>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Shipping Charge</span>
              <strong>$40.00</strong>
            </div>

            <div className="d-flex justify-content-between mb-2 text-success">
              <span>Coupon Code</span>
              <strong>#APPLIED</strong>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <h5>Total</h5>
              <h5 className="text-primary">$260.00</h5>
            </div>
          </Card>

          {/* PRODUCT 1 */}
          <Card className="p-3 mb-3 shadow-sm d-flex flex-row align-items-center">
            <img
              src="https://via.placeholder.com/80"
              alt="product"
              className="me-3 rounded"
            />

            <div className="flex-grow-1">
              <h6 className="mb-1">White neck shirt</h6>
              <small className="text-muted">Dust Studios</small>
              <div>
                <small>Size: M | Qty: 1</small>
              </div>
            </div>

            <strong>$120.00</strong>
          </Card>

          {/* PRODUCT 2 */}
          <Card className="p-3 shadow-sm d-flex flex-row align-items-center">
            <img
              src="https://via.placeholder.com/80"
              alt="product"
              className="me-3 rounded"
            />

            <div className="flex-grow-1">
              <h6 className="mb-1">Sunglasses for Men</h6>
              <small className="text-muted">Black</small>
              <div>
                <small>Size: M | Qty: 1</small>
              </div>
            </div>

            <strong>$100.00</strong>
          </Card>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Orders
