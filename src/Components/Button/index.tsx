import './style.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text: string
}

const Button: React.FC<Props> = ({ text, ...props }) => {
  return (
    <div {...props} className="closeButton">
      {text}
    </div>
  )
}

export default Button
