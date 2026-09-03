"use client"
import React from 'react';
import { Card, Col, Container, Row, Badge, Table, Form, Dropdown, Button, Image } from 'react-bootstrap';
import { ThreeDots, Globe, Twitter, Image as ImageIcon, CalendarCheck, TagFill, ClockFill, StarFill, StarHalf, Search, CheckCircleFill, AwardFill, ChevronRight, Share } from 'react-bootstrap-icons';
import { GuestsData } from '@/data/GuestData';
import '../../../../../styles/scss/theme/champins/guestProfile.scss';
import { useParams } from 'next/navigation';
import { Suspense } from 'react';

const GuestDetailsContent = () => {
    const params = useParams();
    const id = params.id;
    const guest = GuestsData.find(g => g.id === parseInt(id)) || GuestsData[0];
    return (
        <Container fluid className="guest-profile-page rounded-4 p-4">
            <Row className="g-3">
                <Col xl={4} lg={4} md={12}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="p-3 d-flex flex-column">
                            <div className="text-center mb-3">
                                <div className="rounded-circle bg-light mx-auto mb-3 profile-avatar"></div>
                                <h4 className="fw-bold mb-1">{guest.name}</h4>
                                <p className="text-muted small mb-0">{guest.gender} • Canadian</p>
                            </div>
                            <div className="flex-grow">
                                <div className="d-flex justify-content-between border-bottom py-2">
                                    <span className="text-muted small">Date of Birth</span>
                                    <span className="small fw-semibold text">{guest.dateOfBirth}</span>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-2">
                                    <span className="text-muted small">Phone Number</span>
                                    <span className="small fw-semibold text">{guest.phone}</span>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-3">
                                    <span className="text-muted small">Email Address</span>
                                    <span className="small fw-semibold text">{guest.email}</span>
                                </div>
                                <div className="d-flex justify-content-between border-bottom py-3">
                                    <span className="text-muted small">Address</span>
                                    <span className="small fw-semibold text-end address-text">{guest.address}</span>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-1">
                                <span className="text-muted small">Social Media</span>
                                <div className="d-flex gap-3">
                                    <a href="www.google.com"><Globe className="text-secondary cursor-pointer" size={16} /></a>
                                    <a href="www.google.com"><Twitter className="text-secondary cursor-pointer" size={16} /></a>
                                    <a href="www.google.com"><ImageIcon className="text-secondary cursor-pointer" size={16} /></a>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Middle Column - Membership & Rewards */}
                <Col xl={4} lg={8} md={12}>
                    <div className="d-flex flex-column h-100 gap-5">
                        {/* Gold Member Card */}
                        <Card className="border-0 shadow-sm rounded-4 gold-member-card p-3">
                            <div className="d-flex justify-content-between align-items-start mb-4">
                                <div>
                                    <h3 className="fw-bold mb-3">Gold Member</h3>
                                    <Badge className="rounded-pill px-3 py-2 fw-semibold points-badge">
                                        4,520 pts
                                    </Badge>
                                </div>
                                <Image src="/goldmembershiplogo.svg" />
                            </div>
                            <div className="mt-auto">
                                <div className="d-flex align-items-center mb-3 gap-2">
                                    <div className="progress-track">
                                        <div className="progress-fill"></div>
                                    </div>
                                    <CheckCircleFill size={20} className="checkmark-icon" />
                                </div>
                                <div className="d-flex justify-content-between align-items-end">
                                    <p className="mb-0 earn-text">
                                        Earn 827.728 before 04 September 2037 to be our Platinum Priority
                                    </p>
                                    <Button variant="light" size="sm" className="rounded-3 fw-semibold px-3 py-2 d-flex align-items-center border-0 learn-btn">
                                        Learn How <ChevronRight size={12} className="ms-1" />
                                    </Button>
                                </div>
                            </div>
                        </Card>
                        {/* Rewards Card */}
                        <Card className="border-0 shadow-sm rounded-4 flex-grow">
                            <Card.Body className="p-3">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h6 className="fw-bold mb-0">Rewards</h6>
                                    <ThreeDots className="text-muted cursor-pointer" size={20} />
                                </div>
                                <Row className="g-3 g-md-2">
                                    <Col lg={4} md={12} className="h-100">
                                        <div className="rounded-3 p-2 d-flex flex-column reward-item">
                                            <div className="bg-primary bg-opacity-10 rounded d-inline-flex p-2 mb-3 align-self-end">
                                                <CalendarCheck className="text-primary" size={20} />
                                            </div>
                                            <span className="fw-medium reward-text pt-1 pb-2">Free Reschedule</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={12}>
                                        <div className="rounded-3 p-2 d-flex flex-column reward-item">
                                            <div className="bg-primary bg-opacity-10 rounded d-inline-flex p-2 mb-2 align-self-end">
                                                <TagFill className="text-primary" size={20} />
                                            </div>
                                            <span className="fw-medium reward-text pt-1">Up to 10% Off on Direct Bookings</span>
                                        </div>
                                    </Col>
                                    <Col lg={4} md={12}>
                                        <div className="rounded-3 p-2 d-flex flex-column reward-item">
                                            <div className="bg-primary bg-opacity-10 rounded d-inline-flex p-2 mb-2  align-self-end">
                                                <ClockFill className="text-primary" size={20} />
                                            </div>
                                            <span className="fw-medium reward-text pt-1">Complimentary Late Check-Out</span>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                {/* Right Column - Stay Info */}
                <Col xl={4} lg={12} md={12}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="p-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h6 className="fw-bold mb-0">Stay Info</h6>
                                <ThreeDots className="text-muted cursor-pointer" size={20} />
                            </div>
                            {/* Image Grid Placeholder */}
                            <div className="d-flex gap-2 mb-4 stay-info-images">
                                <div className="bg-light rounded-3 w-50 h-100 image-placeholder"></div>
                                <div className="d-flex flex-column gap-2 w-50 h-100">
                                    <div className="d-flex gap-2 h-50">
                                        <div className="bg-light rounded-3 w-50 h-100 image-placeholder-simple1"></div>
                                        <div className="bg-light rounded-3 w-50 h-100 image-placeholder-simple2"></div>
                                    </div>
                                    <div className="d-flex gap-2 h-50">
                                        <div className="bg-light rounded-3 w-50 h-100 image-placeholder-simple3"></div>
                                        <div className="bg-light rounded-3 w-50 h-100 image-placeholder-simple4"></div>
                                    </div>
                                </div>
                            </div>
                            <h4 className="fw-bold mb-2">Deluxe Suite</h4>
                            <Row className="gy-2">
                                <Col>
                                    <Row>
                                        <Col xs={4}>
                                            <p className="text-muted mb-1 label-text header-text">Check-In</p>
                                            <p className="fw-medium mb-0 value-text">Mar 15, 2035</p>
                                        </Col>
                                        <Col xs={4}>
                                            <p className="text-muted mb-1 label-text header-text">Check-Out</p>
                                            <p className="fw-medium mb-0 value-text">Mar 18, 2035</p>
                                        </Col>
                                        <Col xs={4}>
                                            <p className="text-muted mb-1 label-text header-text heading">Current Booking Status</p>
                                            <Badge className="text-dark rounded-pill fw-medium border-0 bg-warning-soft badge-text">Checked-In</Badge>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={4}>
                                            <p className="text-muted mb-1 label-text">Room Number</p>
                                            <p className="fw-medium mb-0 value-text">212</p>
                                        </Col>
                                        <Col xs={4}>
                                            <p className="text-muted mb-1 label-text">Number of Guests</p>
                                            <p className="fw-medium mb-0 value-text">2 Adults, 1 Child</p>
                                        </Col>
                                        <Col xs={4}>
                                            <p className="text-muted mb-1 label-text heading">Current Booking Code</p>
                                            <Badge bg="primary" className="bg-opacity-10 text-primary rounded-pill fw-medium border-0 badge-text">#BKG-2038</Badge>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={4}>
                                            <p className="text-muted mb-1 label-text">Duration</p>
                                            <p className="fw-medium mb-0 value-text">3 Nights</p>
                                        </Col>
                                        <Col xs={4}>
                                            <p className="text-muted mb-1 label-text">Request</p>
                                            <p className="fw-medium mb-0 value-text">Airport Pickup</p>
                                        </Col>
                                        <Col xs={4}>
                                            <p className="text-muted mb-1 label-text">Booking Source</p>
                                            <p className="fw-medium mb-0 value-text">Website</p>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="g-3 mt-0">
                {/* Bottom Left - Booking History */}
                <Col xl={9} lg={12}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4 booking-table">
                                <h5 className="fw-bold mb-0">Booking History</h5>
                                <div className="d-flex gap-3 search-input-wrapper">
                                    <div>
                                        <Search className="search-icon text-muted" size={14} />
                                        <Form.Control type="text" placeholder="Search guest, status, etc" className="bg-light border-0 rounded-pill py-2 search-input" />
                                    </div>
                                    <Dropdown>
                                        <Dropdown.Toggle variant="light" className="bg-light border-0 rounded-pill py-2 text-muted fw-medium d-flex align-items-center gap-2 dropdown-btn">
                                            All Status
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">Completed</Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">Canceled</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">Pending</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            </div>
                            <div className="table">
                                <Table responsive="xxl" hover className="align-middle mb-0 table-body">
                                    <thead className="text-muted table-header">
                                        <tr>
                                            <th className="fw-medium border-0 py-3 rounded-start px-2">Image <span>&#8597;</span></th>
                                            <th className="fw-medium border-0 py-3">Booking ID <span >&#8597;</span></th>
                                            <th className="fw-medium border-0 py-3">Booking Date <span>&#8597;</span></th>
                                            <th className="fw-medium border-0 py-3">Room Type <span >&#8597;</span></th>
                                            <th className="fw-medium border-0 py-3">Room <span >&#8597;</span></th>
                                            <th className="fw-medium border-0 py-3">Check-In/Out <span >&#8597;</span></th>
                                            <th className="fw-medium border-0 py-3">Duration <span >&#8597;</span></th>
                                            <th className="fw-medium border-0 py-3 rounded-end">Status <span>&#8597;</span></th>
                                        </tr>
                                    </thead>
                                    <tbody className="border-top-0">
                                        <tr>
                                            <td className="py-3 px-3 border-bottom-0 border-bottom">
                                                <div className="bg-light rounded row-image"></div>
                                            </td>
                                            <td className="fw-medium border-bottom-0 border-bottom">#BKG-1975</td>
                                            <td className="border-bottom-0 border-bottom">
                                                <div className="fw-medium text-dark">Jan 10, 2035</div>
                                                <div className="text-muted small">9:08 AM</div>
                                            </td>
                                            <td className="border-bottom-0 border-bottom d-flex align-items-center gap-2 pt-4"><span className="bg-dark rounded-circle room-bullet"></span> Deluxe Suite</td>
                                            <td className="border-bottom-0 border-bottom">101</td>
                                            <td className="border-bottom-0 border-bottom">
                                                <div className="fw-medium text-dark">Jan 12 - Jan 16,</div>
                                                <div className="fw-medium text-dark">2035</div>
                                            </td>
                                            <td className="border-bottom-0 border-bottom">4 Nights</td>
                                            <td className="border-bottom-0 border-bottom"><Badge bg="primary" className="bg-opacity-10 text-primary rounded-pill px-3 py-2 fw-bold border-0">Completed</Badge></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-3 border-bottom-0 border-bottom">
                                                <div className="bg-light rounded row-image"></div>
                                            </td>
                                            <td className="fw-medium border-bottom-0 border-bottom">#BKG-1892</td>
                                            <td className="border-bottom-0 border-bottom">
                                                <div className="fw-medium text-dark">Nov 18, 2034</div>
                                                <div className="text-muted small">02:45 PM</div>
                                            </td>
                                            <td className="border-bottom-0 border-bottom d-flex align-items-center gap-2 pt-4"><span className="bg-dark rounded-circle room-bullet"></span> Superior Room</td>
                                            <td className="border-bottom-0 border-bottom">315</td>
                                            <td className="border-bottom-0 border-bottom">
                                                <div className="fw-medium text-dark">Nov 20 - Nov</div>
                                                <div className="fw-medium text-dark">22, 2034</div>
                                            </td>
                                            <td className="border-bottom-0 border-bottom">2 Nights</td>
                                            <td className="border-bottom-0 border-bottom"><Badge bg="primary" className="bg-opacity-10 text-primary rounded-pill px-3 py-2 fw-bold border-0">Completed</Badge></td>
                                        </tr>
                                        <tr>
                                            <td className="py-3 px-3 border-bottom-0">
                                                <div className="bg-light rounded row-image"></div>
                                            </td>
                                            <td className="fw-medium border-bottom-0">#BKG-1820</td>
                                            <td className="border-bottom-0">
                                                <div className="fw-medium text-dark">Sep 03, 2034</div>
                                                <div className="text-muted small">05:30 PM</div>
                                            </td>
                                            <td className="border-bottom-0 d-flex align-items-center gap-2 pt-4"><span className="bg-dark rounded-circle"></span> Executive Suite</td>
                                            <td className="border-bottom-0">211</td>
                                            <td className="border-bottom-0">
                                                <div className="fw-medium text-dark">Sep 05 - Sep 08,</div>
                                                <div className="fw-medium text-dark">2034</div>
                                            </td>
                                            <td className="border-bottom-0">3 Nights</td>
                                            <td className="border-bottom-0"><Badge className="text-danger rounded-pill px-3 py-2 fw-bold border-0 bg-danger-soft">Canceled</Badge></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {/* Bottom Right - Reviews */}
                <Col xl={3} lg={12}>
                    <Card className="border-0 shadow-sm rounded-4 h-100">
                        <Card.Body className="p-3">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="fw-bold mb-0">Reviews</h5>
                                <ThreeDots className="text-muted cursor-pointer" size={20} />
                            </div>
                            <div className="mb-3 review-item">
                                <h6 className="fw-bold mb-1 review-title">Executive Suite</h6>
                                <div className="d-flex align-items-center mb-2">
                                    <div className="d-flex text-warning me-2 gap-1">
                                        <StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarFill size={12} />
                                    </div>
                                    <span className="text-muted mx-1">•</span>
                                    <span className="text-muted review-date">Jan 17, 2035</span>
                                </div>
                                <p className="text-muted mb-0 fw-medium review-text">
                                    "Exceptional service and attention to detail. The staff made my stay truly relaxing and memorable."
                                </p>
                            </div>

                            <div className="mb-3 review-item">
                                <h6 className="fw-bold mb-1 review-title">Superior Room</h6>
                                <div className="d-flex align-items-center mb-2">
                                    <div className="d-flex text-warning me-2 gap-1">
                                        <StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarFill size={12} />
                                    </div>
                                    <span className="text-muted mx-1">•</span>
                                    <span className="text-muted review-date">Nov 23, 2034</span>
                                </div>
                                <p className="text-muted mb-0 fw-medium review-text">
                                    "Cozy and clean. Great location and helpful staff. Slight noise from hallway, but overall a good experience."
                                </p>
                            </div>

                            <div className="review-item">
                                <h6 className="fw-bold mb-1 review-title">Deluxe Suite</h6>
                                <div className="d-flex align-items-center mb-2">
                                    <div className="d-flex text-warning me-2 gap-1">
                                        <StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarFill size={12} /><StarHalf size={12} />
                                    </div>
                                    <span className="text-muted mx-1">•</span>
                                    <span className="text-muted review-date">Sep 09, 2034</span>
                                </div>
                                <p className="text-muted mb-0 fw-medium review-text">
                                    "Loved the view and the spacious layout. Breakfast could have had more variety."
                                </p>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

const page = () => {
    return (
        <Suspense fallback={<div className="p-4">Loading guest details...</div>}>
            <GuestDetailsContent />
        </Suspense>
    );
};

export default page;
