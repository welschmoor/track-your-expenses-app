

import React, { useContext } from "react"
import styled from "styled-components"
import AddExpenseForm from "../components/AddExpenseForm"
import { AuthContext } from "../App"
import { useNavigate, Navigate } from "react-router-dom"
import useCollection from "../hooks/useCollection"
import List from "../components/List"
import Chart from "../components/Chart"


const CC = () => {
  const { user } = useContext(AuthContext)
  const { fetchedDocs, fetchError } = useCollection("transactions", ['uid', '==', user.uid])
  console.log("fetchedDocs", fetchedDocs)
  const navigate = useNavigate()

  if (user === null) {
    navigate('/')
    return (
      <div>
        404...
      </div>
    )
  }

  return (
    <CCWrapper>
      <ContentWrapper>
        <Title>Add expense</Title>
        <AddExpenseForm />
        <CCGrid>
          {fetchedDocs && <List fetchedDocs={fetchedDocs} />}
          {fetchedDocs && <Chart fetchedDocs={fetchedDocs} />}

        </CCGrid>
      </ContentWrapper>
    </CCWrapper>
  )
}

const CCWrapper = styled.section`

`

const CCGrid = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  gap: 20px;
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
