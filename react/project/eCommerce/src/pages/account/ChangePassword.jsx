import React from 'react'

const ChangePassword = () => {
  return (
    <div><h4 className="mb-4">Change Password</h4>

      <Form>

        <Form.Group className="mb-3">
          <Form.Label>Current Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>New Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Button variant="primary">Update Password</Button>

      </Form>
    </div>
  )
}

export default ChangePassword
