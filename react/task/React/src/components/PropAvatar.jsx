import React from 'react'

export const Avatar = ({image})=>{
    return(
    <img width={100} src = {image}/>
    )
}


const PropAvatar = ({   
    image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOYxtswPRatXeY5Q_PN0Vtwj1rljMH9fXMg&s", 
    name = "Default",
    email = "default@gmail.com", 
    phone = "+91 **********"}) => {

  return (
    <div>
      <table border={1}>
        <tbody>
          <tr>
            <td rowSpan={3}>
              <Avatar image={image} />
            </td>
            <th>Name</th>
            <td>{name}</td>
          </tr>

          <tr>
            <th>Email</th>
            <td>{email}</td>
          </tr>

          <tr>
            <th>Phone no.</th>
            <td>{phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default PropAvatar
