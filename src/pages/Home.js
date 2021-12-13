
import React from "react"
import styled from "styled-components"

const Home = () => {
  return (
    <HomeWrapper>

      <H1>Track Your Expenses</H1>


      <ImgWrapper>
        <IMG src="/ScreenShot.png" alt="hero" />
      </ImgWrapper>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.section`
  display: grid;
  grid-template-columns: 360px 1fr;
  padding: 100px 40px;
  background: linear-gradient(#3E4251, #484D5E);
`

const ImgWrapper = styled.div`

  z-index: 1;
  transform:rotateY(-20deg) rotateX(20deg) ;
  transform-origin: center;
  perspective: 1200;
  transition: 0.2s;
  opacity: 1;
  &:hover {
      opacity: 1;
      transform: rotateY(0deg) rotateX(0deg);
      :hover {
         filter: brightness(120%) saturate(120%);
         z-index: 10;
      }  
  }
`

const IMG = styled.img`
 
  width: 100%;
  box-shadow: 1px 2px 3px 3px rgba(0, 0, 0, 0.154);
  transform:rotateY(-20deg) rotateX(20deg) ;
  transform-origin: center;
  perspective: 1200;
  transition: 0.2s;
  opacity: 0.8;
  &:hover {
      opacity: 1;
      transform: rotateY(0deg) rotateX(0deg);
      &:hover {
         filter: brightness(120%) saturate(120%);
         z-index: 10;
      }

   }
  
`

const H1 = styled.h1`
  font-size: 4rem;
  font-weight: 1000;
  letter-spacing: -0.0px;
  line-height: 1;
  color: ${p => p.theme.textCol};
  text-transform: uppercase;
  text-shadow: 2px 2px 2px black;

  font-weight: 2000;
`

export default Home
