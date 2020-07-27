import React from 'react'

function Planet(props){
  const planet = {
    borderRadius: "50%",
    width: `${props.size}px`,
    height: `${props.size}px`,
    backgroundColor: `${props.color}`
  }
  return(
    <div style={planet} className="planet"></div>
  )
}
export default Planet;
