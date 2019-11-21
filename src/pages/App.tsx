import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.header`
  background-color: rgb(57, 62, 70);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Logo = styled.img`
  height: 40vmin;
`

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Logo src="https://bricktile.dev/logo.png" alt="logo" />
        <p>CONSTRUCTING</p>
      </Header>
    </Wrapper>
  )
}

export default App
