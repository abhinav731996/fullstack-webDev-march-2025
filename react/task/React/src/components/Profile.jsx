import React from 'react'

export const Avatar = () => {
    return(
        <img width={100} src="https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png" alt="profile image" />
    )
}
export const Avatar1 = () => {
    return(
        <img width={100} src= "https://img.freepik.com/premium-vector/business-woman-character-vector-illustration_1133257-2432.jpg?semt=ais_hybrid&w=740&q=80" alt="profile image" />
    )
}

export const Profile = () => {

    const handleClickEvent = () => {
        alert("This is a button...")
    }

  return (
    <div>
        <Avatar1/> <Avatar/><br />
        Name: Abhinav <br />
        Email: Abhi@gmail.com <br />
        Phone: 987651230 <br />
        <button onClick={handleClickEvent}>Click me</button>
    </div>
  )
}

export default Profile
