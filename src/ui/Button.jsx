/* eslint-disable react/prop-types */


const Button = ({children, className = ""}) => {
  return (
    <button className={`px-5 py-1 rounded-md ${className} `}>{children}</button>
  )
}

export default Button