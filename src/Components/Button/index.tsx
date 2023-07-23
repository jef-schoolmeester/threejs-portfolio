import { ReactNode } from 'react'
import './style.css'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  text?: string
  icon?: ReactNode
}

const Button: React.FC<Props> = ({ text, icon, ...props }) => {
  return (
    <div {...props} className="closeButton">
      {text}
      {icon}
    </div>
  )
}

export default Button
