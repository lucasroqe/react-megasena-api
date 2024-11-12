import React from 'react'
import styled from 'styled-components'
import LotteryRoute from '../routes'

export default function MainPage() {
  return (
    <Wrapper>
      <LotteryRoute/>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`