'use client'
import React from 'react'
import styled from '@emotion/styled'

const H1 = styled.h1`
  padding: 32px;
  color: #14ecac;
  font-size: 48px;
  border-radius: 4px;
  font-weight: 800;
`

const Heading = ({ title }: { title?: string; }) => {
  return (
    <H1>{title}</H1>
  )
}

export default Heading