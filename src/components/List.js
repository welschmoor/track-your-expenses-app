

import React from "react"
import styled from "styled-components"
import { CgEuro } from "react-icons/cg"
import { useFirestore } from "../hooks/useFirestore"

const List = ({ fetchedDocs }) => {

  const { delDoc } = useFirestore('transactions')

  const totalPrice = fetchedDocs.reduce((acc, each) => {
    return acc + Number(each.cost)
  }, 0)
  console.log("TT", totalPrice)

  return (
    <Wrapper>
      <Title>Things you bought this month</Title>
      <Line>________________________________</Line>
      <LI></LI>
      <LI></LI>
      <LI></LI>

      {fetchedDocs.map(e => {
        return(
          <LI key={e.id} onDoubleClick={()=>delDoc(e.id)}>
            <ItemName>{e.item}</ItemName>
            <Price>{e.cost}</Price>
          </LI>
        )
      })}
    <Line>________________________________</Line>
    <LI><Total>Total:</Total> <Total><EuroIcon/>{totalPrice}</Total></LI>
    </Wrapper>
  )
}

const Wrapper = styled.ul`
  border-radius: 9px;
  background-color: ${p=>p.theme.inputBg};
  margin-top: 20px;
  max-width: 400px;
  color: ${p=>p.theme.textCol};
  box-shadow: 0 2px 1px hsla(0, 0%, 0%, .2), inset 0 1px 0 hsla(0, 0%, 100%, .22);
  padding: 20px;
  text-shadow: 1px 1px 1px black;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const LI = styled.li`
  display: flex;
  justify-content: space-between;
  &:hover {
    background-color: ${p=>p.theme.bgCol};
  }
`

const ItemName = styled.h3`
`

const Price = styled.h3`
  color: #99DD99;
`

const Total = styled.h3`
  margin-top: 2px;
  text-shadow: 1px 1px 1px black;
  color: ${p=>p.theme.text5Col};
  display: flex;
  align-items: center;
`

const Title = styled.h3`
  margin-top: 10px;
  text-shadow: 1px 1px 1px black;
  color: ${p=>p.theme.text5Col};
`

const EuroIcon = styled(CgEuro)`
  font-size: 1.4rem;
`

const Line = styled.div`
  color: ${p=>p.theme.text5Col};
`
export default List