import { ReactNode } from "react"
import styled from 'styled-components';

interface AppButtonProps {
  color: string;
}

const AppButton = styled.button<AppButtonProps>`
  background: ${(props) => props.color};
  padding: 8px 16px;
  color: white;
  outline: none;
  border: none;
  border-radius: 3px;
`;

console.log(AppButton)

interface Props {
  color?: 'blue' | 'gray' | 'red' | 'green',
  children: ReactNode
  onClick: () => void;
}

const Button = ({ children, onClick, color = 'blue' }: Props) => {
  return (
    <AppButton type="button" color={color} onClick={onClick}>{children}</AppButton>
  )
}

export default Button