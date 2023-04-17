'use client'
import React, { ReactElement, ReactNode } from 'react'
import styled from '@emotion/styled'

const ComponentHeader = styled.header`
    padding: 0 2rem; 
    height: 6rem;
    background-color: #282828;
    border-bottom: 1px solid #888;
    box-shadow: 0 2px 5px rgba(0,0,0,0.225);
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const defaultHeaderProps = {
    title: <strong>Logo / text</strong>
}

type HeaderProps = {children: ReactNode} & typeof defaultHeaderProps

const Header = ({title, children}: HeaderProps): ReactElement => {
  return (
      <ComponentHeader>
          <h1>{title}</h1>
            {children}
        </ComponentHeader>
  )
}

Header.defaultProps = defaultHeaderProps

export default Header