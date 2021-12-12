

import React from "react"
import styled from "styled-components"

const List = ({ fetchedDocs }) => {
  return (
    <Wrapper>

      {fetchedDocs.map(e => {
        return(
          <LI key={e.id}>
            <ItemName>{e.item}</ItemName>
            <Price>{e.cost}</Price>
          </LI>
        )
      })}
    ________________________________
    <LI><Total>Total:</Total></LI>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  border-radius: 9px;
  background-color: ${p=>p.theme.inputBg};
  margin-top: 20px;
  max-width: 400px;
  color: ${p=>p.theme.textCol};
  box-shadow: 0 2px 1px hsla(0, 0%, 0%, .2), inset 0 1px 0 hsl(224, 24%, 54% );
  padding: 20px;
  text-shadow: 1px 1px 1px black;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const LI = styled.li`
  display: flex;
  justify-content: space-between;
`
const ItemName = styled.h3`
`
const Price = styled.h3`

`
const Total = styled.h3`
  text-shadow: 1px 1px 1px black;
  color: ${p=>p.theme.text5Col};
`



export default List