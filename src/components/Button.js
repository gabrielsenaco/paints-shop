import './../styles/Button.css'

const Button = ({ type, children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={'button'.concat(' ', className || '')}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
