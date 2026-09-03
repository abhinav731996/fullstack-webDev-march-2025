"use client"
import React, { useState } from 'react'
import { Container, Table, Card, Form, InputGroup, Badge } from 'react-bootstrap'
import { Search, Envelope, Telephone } from 'react-bootstrap-icons'
import { GuestsData } from '@/data/GuestData'
import { useRouter } from 'next/navigation'
import '../../../../styles/scss/theme/champins/guestProfile.scss';

const page = () => {
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState('')
    const handleRowClick = (id) => {
        router.push(`/campaigns/guest-details-page/${id}`)
    }

    const filteredGuests = GuestsData.filter(guest =>
        guest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        guest.email.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <Container fluid className="guest-profile-page rounded-4 p-4">
            <Card className="border-0 shadow-sm rounded-4">
                <Card.Body className="p-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <InputGroup className="w-auto search-input-wrapper">
                            <InputGroup.Text className="bg-light border-0 py-3 ms-2">
                                <Search size={16} className="text-muted" />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Search guests by name or email..."
                                className="bg-light border-0 search-input fs-6"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </InputGroup>
                    </div>
                    <Table hover responsive="xxl" className="align-middle mb-0 custom-table">
                        <thead className="bg-light text-muted">
                            <tr>
                                <th className="fw-semibold border-0 py-3 ps-5">Guest Name</th>
                                <th className="fw-semibold border-0 py-3 px-3">Contact Info</th>
                                <th className="fw-semibold border-0 py-3 px-4">Address</th>
                                <th className="fw-semibold border-0 py-3 px-4">Action</th>
                            </tr>
                        </thead>
                        <tbody className="border-top-0">
                            {filteredGuests.length > 0 ? (
                                filteredGuests.map((guest) => (
                                    <tr
                                        key={guest.id}
                                        onClick={() => handleRowClick(guest.id)}
                                        style={{ cursor: 'pointer', transition: 'background-color 0.2s' }}
                                        className="guest-row"
                                    >
                                        <td className="py-3 ps-4 border-bottom">
                                            <div className="d-flex align-items-center gap-3">
                                                <div className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center fw-bold shadow-sm" style={{ width: '45px', height: '45px', fontSize: '1.2rem' }}>
                                                    {guest.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <span className="fw-bold d-block text-dark">{guest.name}</span>
                                                    <span className="text-muted small">Guest ID: #GST-{1000 + guest.id}</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-bottom py-3">
                                            <div className="d-flex flex-column gap-1">
                                                <div className="d-flex align-items-center gap-2 text-muted small">
                                                    <Envelope size={14} /> {guest.email}
                                                </div>
                                                <div className="d-flex align-items-center gap-2 text-muted small">
                                                    <Telephone size={14} /> {guest.phone}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-bottom py-3 text-muted small">
                                            <div className="text-truncate" >
                                                {guest.address}
                                            </div>
                                        </td>
                                        <td className="border-bottom py-3  pe-4">
                                            <Badge bg="light" text="dark" className="px-3 py-2 rounded-pill fw-medium border">
                                                View Details
                                            </Badge>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="text-center py-5 text-muted">
                                        No guests found matching your search.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default page
