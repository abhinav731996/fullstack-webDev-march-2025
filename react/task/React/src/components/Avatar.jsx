import React from 'react'

// Child component 
export const Avatar1 = () => {
  return (
    <img width={100} src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" alt="profile"/>
  )
}

// Parent component
const Avatar = () => {
  return (
    <div>
      <table border={1}>
        <tbody>
          <tr>
            <td rowSpan={3}>
              <Avatar1 />
            </td>
            <th>Name</th>
            <td>Abhinav</td>
          </tr>

          <tr>
            <th>Email</th>
            <td>Abhi@gmail.com</td>
          </tr>

          <tr>
            <th>Phone no.</th>
            <td>9874563210</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Avatar
