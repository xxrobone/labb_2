'use client'
import React, { ReactNode } from 'react'
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

interface Header {
    children: ReactNode
}

const Header = ({children}: {children: ReactNode}) => {
  return (
        <ComponentHeader>
            {children}
        </ComponentHeader>
  )
}

export default Header