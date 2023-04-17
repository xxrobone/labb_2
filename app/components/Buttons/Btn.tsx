import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

type Props = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {}

const Btn = (props: Props) => {
  return (
      <button {...props} />
  )
}

export default Btn