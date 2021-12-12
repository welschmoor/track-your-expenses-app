
import React, { useState, useContext, useEffect } from "react"
import styled from "styled-components"
import { Label, INPUT, Button } from "../pages/Login"
import { LogOutBtn } from "./Navbar"
import { IoAdd } from "react-icons/io5"
import { CgEuro } from "react-icons/cg"
import { useFirestore } from "../hooks/useFirestore"
import { AuthContext } from "../App"

const AddExpenseForm = () => {
  const [ itemSt, setItemSt ] = useState('')
  const [ euroSt, setEuroSt] = useState('')
  const { addDoc, response } = useFirestore('transactions')
  const { user } = useContext(AuthContext)

  const submitHandler = (e) => {
    e.preventDefault()
    const newEntry = {
      uid: user.uid,
      item: itemSt,
      cost: euroSt,
    }
    addDoc(newEntry)
    setItemSt('')
    setEuroSt('')
  }

  useEffect(()=>{
    if (response.success) {
      setItemSt('')
      setEuroSt('')
    }
  }, [response.success])


  return (
    <Form name="add_expense_form" onSubmit={submitHandler} >
      <div>
        <Label htmlFor="item_bought">What did you buy?</Label>
        <INPUT type="text" name="item_bought" id="item_bought" required placeholder="tomatoes" onChange={e => setItemSt(e.target.value) } value={itemSt} />
      </div>
      <div style={{ position: "relative" }} >
        <Label htmlFor="dollar_amount">How much did it cost?</Label>
        <INPUT type="number" name="dollar_amount" id="dollar_amount" required placeholder="5" onChange={e => setEuroSt(e.target.value) } value={euroSt} />
        <EuroIcon />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Label >&nbsp;</Label>
        <AddBtn><PlusIcon />Add</AddBtn>
      </div>
    </Form>
  )
}


const Form = styled.form`
  display: flex;
  gap: 20px;
`

const AddBtn = styled(Button)`
  font-size: 1rem;
  height: 50px;
  width: 140px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    font-size: 0rem;
  }
`

const PlusIcon = styled(IoAdd)`
  font-size: 1.2rem;
  transition: all 0.13s;

  ${AddBtn}:hover & {
    font-size: 2.2rem;
    transform: translateX(3px);
  }
`

export const EuroIcon = styled(CgEuro)`
  font-size: 2rem;
  color: #686D7E;
  position: absolute;
  top: 35px;;
  left: 310px;
`

export default AddExpenseForm