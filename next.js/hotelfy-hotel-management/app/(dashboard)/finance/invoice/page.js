"use client";

import { useReducer, useEffect } from "react";
import { InvoiceData } from "@/data/InvoiceData";
import styles from "@/styles/scss/theme/finance/invoice.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import {
    ChevronExpand,
  ClipboardCheck,
  ClipboardX,
  Envelope,
  GeoAlt,
  GraphDownArrow,
  GraphUpArrow,
  Search,
  Sliders2,
  Telephone,
} from "react-bootstrap-icons";

const initialState = {
  invoices: [],
  selectedInvoice: null,
  search: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        invoices: action.payload,
        selectedInvoice: action.payload[0],
      };
    case "SELECT":
      return { ...state, selectedInvoice: action.payload };
    case "SEARCH":
      return { ...state, search: action.payload };
    default:
      return state;
  }
}

export default function InvoicePage() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "SET_DATA", payload: InvoiceData });
  }, []);

  const filteredInvoices = state.invoices.filter((inv) =>
    inv.invoiceNumber.toLowerCase().includes(state.search.toLowerCase()),
  );

  const { selectedInvoice } = state;

  return (
    <Container fluid className={styles.container}>
      <Row>
        {/* Left */}
        <Col lg={8}>
          {/* HEADER */}
          <div className={styles.cardPrimary}>
            <div className={styles.leftDetails}>
              <p>Total Issued Invoices</p>
              <div className="d-flex gap-2 ">
                <h2>140</h2>
                <div>
                  <span>
                    <GraphUpArrow /> +15.6%
                  </span>
                  <p>from last week</p>
                </div>
              </div>
            </div>

            <div className={styles.card}>
              <div className="d-flex flex-column gap-2">
                <p>Paid Invoices</p>
                <h3>42</h3>
                <div className="d-flex gap-2">
                  <span className={styles.spanBg}>
                    <GraphDownArrow /> -4.1%
                  </span>
                  <p>from last week</p>
                </div>
              </div>
              <div className={styles.cdlogo}>
                <ClipboardCheck />
              </div>
            </div>

            <div className={styles.card}>
              <div className="d-flex flex-column gap-2">
                <p>Unpaid Invoices</p>
                <h3>14</h3>
                <div className="d-flex gap-2">
                  <span>
                    <GraphUpArrow /> +9.3%
                  </span>
                  <p>from last month</p>
                </div>
              </div>
              <div className={styles.cdlogo}>
                <ClipboardX />
              </div>
            </div>
          </div>

          <div className={styles.main}>
            {/* LEFT */}
            <div className={styles.left}>
              <div className={styles.searchfil}>
                <div className={styles.search}>
                  <Search className={styles.searchIcon} />
                  <input
                    placeholder="Search invoices..."
                    onChange={(e) =>
                      dispatch({ type: "SEARCH", payload: e.target.value })
                    }
                  />
                </div>
                <div className="d-flex align-item-center gap-2">
                  <button className={styles.filterBtn}>
                    <Sliders2 />
                  </button>
                  ...
                </div>
              </div>

              <div className={styles.tableWrapper}>
                <table >
                  <thead>
                    <tr>
                      <th>Invoice ID <ChevronExpand/></th>
                      <th>Total Amount <ChevronExpand/></th>
                      <th>Issued Date <ChevronExpand/></th>
                      <th>Status <ChevronExpand/></th>
                    </tr>
                  </thead>

                  <tbody>
                    {filteredInvoices.map((inv) => (
                      <tr
                        key={inv.id}
                        onClick={() =>
                          dispatch({ type: "SELECT", payload: inv })
                        }
                        className={
                          selectedInvoice?.id === inv.id ? styles.activeRow : ""
                        }
                      >
                        <td>{inv.invoiceNumber}</td>
                        <td>${inv.totalAmount}</td>
                        <td>{inv.issuedDate}</td>
                        <td>
                          <span
                            className={`${styles.badge} ${
                              inv.status === "paid"
                                ? styles.paid
                                : styles.unpaid
                            }`}
                          >
                            {inv.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Col>

        {/* RIGHT */}
        <Col lg={4}>
          {selectedInvoice && (
            <div className={styles.right}>
                
                <div className="d-flex justify-content-between">
                <h4>Invoice Details</h4>
                <h4>...</h4>
                </div>
              <br/>

              <div className={styles.invoiceHeader}>
                <p className={styles.invoiceId}>
                Invoice ID: {selectedInvoice.invoiceNumber}
              </p>
                <span
                  className={`${styles.badge} ${
                    selectedInvoice.status === "paid"
                      ? styles.paid
                      : styles.unpaid
                  }`}
                >
                  {selectedInvoice.status}
                </span>
              </div>

              <br/>

              <div className={styles.infoGrid}>
                <div>
                  <p className={styles.label}>Bill From</p>
                  <p>{selectedInvoice.details.billingDetails.companyName}</p>
                  {/* <br/> */}
                  <p><span className={styles.label}><Envelope/> </span> {selectedInvoice.details.billingDetails.email}</p>
                  <p><span className={styles.label}><Telephone/> </span> {selectedInvoice.details.billingDetails.phone}</p>
                  <p><span className={styles.label}><GeoAlt/> </span> {selectedInvoice.details.billingDetails.address}</p>
                </div>

                <div>
                  <p className={styles.label}>Bill To</p>
                  <p>{selectedInvoice.details.guestDetails.name}</p>
                  {/* <br/> */}
                  <p><span className={styles.label}><Envelope/> </span> {selectedInvoice.details.guestDetails.email}</p>
                  <p><span className={styles.label}><Telephone/> </span> {selectedInvoice.details.guestDetails.phone}</p>
                  <p><span className={styles.label}><GeoAlt/> </span> {selectedInvoice.details.guestDetails.address}</p>
                </div>
              </div>

              <div className={styles.dateRow}>
                <p><span className={styles.label}>Issued: </span>{selectedInvoice.issuedDate}</p>
                <p><span className={styles.label}>Due: </span> {selectedInvoice.details.dueDate}</p>
              </div>

              <table className={styles.itemsTable}>
                <thead>
                  <tr>
                    <th>Room Type</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Amount</th>
                  </tr>
                </thead>

                <tbody>
                  {selectedInvoice.details.items.map((item) => (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td>${item.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className={styles.summary}>
                <p>Sub Total: ${selectedInvoice.details.summary.subTotal}</p>
                <p>Tax: ${selectedInvoice.details.summary.tax}</p>
                <p>Service Fee: ${selectedInvoice.details.summary.serviceCharge}</p>
                <p className={styles.total}>
                  Total: ${selectedInvoice.details.summary.total}
                </p>
              </div>
              <br/>
              <div className="d-flex flex-column">
                <span className="fw-lighter">Note: </span>
                <span>Payment is currently unpaid and due within 7 days via Hotelify’s online portal, front desk, or bank transfer.
                </span>
                <span>A 5% <span className="fw-bold">late fee</span> may apply for payments received after <span className="fw-bold">Mar 18, 2035.</span>
                </span>
              </div>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}
