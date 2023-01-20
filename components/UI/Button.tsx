import React from 'react'
type props = {
      title : string,
      onClick? : ()=> void,
      className : string
}
const Button = ({title , className} : props) => {
  return (
    <button className={className}>{title}</button>
  )
}

export default Button