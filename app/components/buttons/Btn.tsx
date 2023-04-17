import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: #14ecac;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  transition: all 0.3s ease;
  &:hover {
    background-color: white;
    color: #14ecac;
  }

  &:active {
    transform: scale(1.01);
  }
`

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

const Btn = (props: Props) => {
  return (
      <Button {...props} />
  )
}

export default Btn