import React from 'react'

export const Avatar = ({image}) => {
    return(
        <img alt="avatar" width={100} />
    )
}

const PropAvtrar = ({
    image = "https://www.vecteezy.com/free-png/avatar",
    name = "Default Name",
    email = "Defaut Email",
    phone = "9100000000"
}) => {
  return (
    <>
      <table border={1}>
        <tbody>
            <tr>
                <td rowSpan={3}>
                    <Avatar image={image}/>
                </td>
                <th>Name</th>
                <td>{name}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{email}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>{phone}</td>
            </tr>
        </tbody>
      </table>
    </>
  )
}

export default PropAvtrar
