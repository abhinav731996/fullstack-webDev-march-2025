import React from 'react'
import PropAvatar from './components/PropAvatar'

const Task2 = () => {

  return (
    <div>
      <PropAvatar
        image = "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png"
        name = "Abhinav"
        email = "abhi@gmail.com"
        phone = "7894561230"

      />
      <PropAvatar
        image = "https://png.pngtree.com/png-clipart/20240316/original/pngtree-man-profile-account-picture-character-png-image_14599291.png"
        name = "Sam"
        email = "sam@gmail.com"
        phone = "9874563210"
      />
      <PropAvatar
      image="https://randomuser.me/api/portraits/men/32.jpg"/>
    </div>
  )
}

export default Task2
