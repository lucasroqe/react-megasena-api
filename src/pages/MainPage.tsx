import React from 'react'
import styled from 'styled-components'
import Mega from '../components/Mega'

export default function MainPage() {
  return (
    <Wrapper>
        <Box>
            <Mega/>
        </Box>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100vh;
`

const Box = styled.div`
    padding: 2rem;
    border: 1px solid gray;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
`
