import { ReactNode } from "react"

interface Props {
  color?: 'primary' | 'secondary' | 'danger' | 'success',
  children: ReactNode
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
  return (
    <button type="button" onClick={onClick} className={'btn btn-' + color}>{children}</button>
  )
}

export default Button