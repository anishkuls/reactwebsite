import React from 'react'
import "./ButtonStyle.scss"

const Button = ({text, color,href}) => {
  const style={
    main:{
      backgroundColor:color,
      color:(color==="black")?"white":"black"
    }
  }
  return (

        <button className="customBtn" style={(color!=="")?style.main:""} href={href}>{text}</button>
  )
}

export default Button