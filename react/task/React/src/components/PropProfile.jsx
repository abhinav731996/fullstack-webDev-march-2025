import React from 'react'

export const PropProfile = (props) => {
  const {
      image = "",
      name = "your name",
      age = 0,
      online = false,
      joinigDate = null,
      skills = [],
      experience = [],
      onclick
  } = props


  return (
    <div>

      Profile Image: <img src={image} width={100}/> <br />
      Name: {name} <br />
      Age: {age} <br />
      Online: {online ? 'Yes' : 'No'} <br />
      Joining Date: {joinigDate.toString()} <br />
      Skill: {skills} <br />
      {/* Experience: <pre>{JSON.stringify(experience, null, 2)}</pre> */}
      Experience: {experience.map((item)=>{
        return (<div key={item.id}> Year: {item.year} - Job Profile: {item.jobProfile} </div> )
      })} <br />

            <button onClick={onclick}>Click Here</button>


    </div>
  )
}
