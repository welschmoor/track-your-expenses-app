

import React, { useContext } from "react"
import styled from "styled-components"
import AddExpenseForm from "../components/AddExpenseForm"
import { AuthContext } from "../App"
import { useNavigate, Navigate } from "react-router-dom"
import useCollection from "../hooks/useCollection"
import List from "../components/List"


const CC = () => {
  const { user } = useContext(AuthContext)
  const { fetchedDocs, fetchError } = useCollection("transactions")
  console.log("userrr", user)
  const navigate = useNavigate ()


  if (user === null) {
    navigate('/')
    return(
      <div>
        404...
      </div>
    )
  } 



  return (
    <Wrapper>
      <ContentWrapper>
        <Title>Add expense</Title>
        <AddExpenseForm />
        { fetchedDocs && <List fetchedDocs={fetchedDocs} />}
      </ContentWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`

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
export default CC
