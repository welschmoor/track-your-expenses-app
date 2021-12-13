

import React from "react"
import styled from "styled-components"

const About = () => {
  return (
    <AboutWrapper>
      <ContentWrapper>
        <Title>About Expense Tracker</Title>
        <P>Expense Tracker is a simple program, that let's you keep track of your spendings. Easy to use and with intuitive interface it let's you spot those pesky money burners in time. </P>
      </ContentWrapper>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.section`

`

const ContentWrapper = styled.div`
  padding: 20px;
  margin-top: 20px;
`

const Title = styled.h2`
  font-size: 1.5rem;
  color: ${p => p.theme.textCol};
  margin-bottom: 20px;
  text-shadow: 1px 1px 1px black;
`

const P = styled.p`
  font-size: 1rem;
  color: ${p => p.theme.text2Col};
  text-shadow: 0px 1px 1px black;
  line-height: 1.4;
`
export default About
