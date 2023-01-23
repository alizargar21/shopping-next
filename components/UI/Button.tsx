import React from 'react'
type props = {
      title : string,
      onClick? : ()=> void,
      className : string ,
}
const Button = ({title , className , onClick} : props) => {
  return (
    <button className={className} onClick={onClick}>{title}</button>
  )
}

export default Button