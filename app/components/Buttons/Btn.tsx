'use client'
import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import styled, { StyledComponent } from '@emotion/styled'
import { Theme } from '@emotion/react';

const Button: StyledComponent<{
  theme?: Theme | undefined;
  as?: React.ElementType<any> | undefined;
}, DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}> = styled.button`
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
    cursor: pointer;
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