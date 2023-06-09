import './style.css'

interface Props {
  text: string
}

const Button: React.FC<Props> = ({ text }) => {
  return <button className="closeButton">{text}</button>
}

export default Button
