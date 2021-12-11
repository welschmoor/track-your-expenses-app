

import React, { useState } from "react"
import styled from "styled-components"
import { IoEye } from "react-icons/io5"
import Error from "../components/Error"
import Filler from "../components/Filler"

const Login = () => {
  const [error, setError] = useState(null)
  const [showPWstate, setShowPWstate] = useState(false)

  const showPWhandler = () => {
    setShowPWstate(p=>!p)
  }

  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    < >
    {error ? <Error errormsg={error} /> : <Filler />}
    <Form name="loginform" onSubmit={submitHandler} >
      <div>
        <Label htmlFor="email">Enter your email </Label>
        <INPUT type="email" name="email" id="email" required />
      </div>
      <div style={{ "position": "relative" }} >
        <Label htmlFor="password">Enter your password </Label>
        <INPUT type={ showPWstate ? "text" :"password"} name="password" id="password" style={{ "position": "relative" }} required />
        <ShowPW onClick={showPWhandler} style={{  color: showPWstate? "hsl(226, 17%, 57%)":"hsl(226, 17%, 37%)" }} />
      </div>
      <Button type="submit" >Log In</Button>
    </Form>
    </>
  )
}


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  gap: 40px;
`

export const Label = styled.label`
  display: inline-block;
  font-weight: 600;
  margin-bottom: 6px;
  text-shadow: 1px 1px 0px hsl(240, 17%, 24%);
  color: ${p => p.theme.textCol};
`

export const INPUT = styled.input`
  border: none;
  width: 400px;
  display: block;
  padding: 14px 30px;
  background-color: ${p => p.theme.inputBg};
  border-radius: 9px;
  border: none;
  box-shadow: 0 2px 0px 0px hsla(0, 0%, 100%, .15), inset 0 2px 2px hsla(0, 0%, 0%, 0.1);
  box-shadow: 0 1px 1px 0px hsla(0, 0%, 100%, .15), inset 0 2px 2px hsla(0, 0%, 0%, 0.1);
  font-size: 20px;
  color: hsl(240, 17%, 80%);

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.3rem hsl(220, 17%, 55%) ;
  }
`

export const Button = styled.button`
  width: 400px;
  cursor: pointer;
  background-color: hsl(230, 64%, 63%); 
  border: none;
  padding: 10px 20px;
  color: white;
  font-size: 20px ;
  border-radius: 9px;
  box-shadow: 0 2px 1px hsla(0, 0%, 0%, .2), inset 0 1px 0 hsl(224, 84%, 74% );
  text-shadow: 1px 1px 0px hsl(230, 64%, 43%);
  padding-left: 22px;
  transition: all 0.13s, box-shadow 0.13s;

  &:active {
  transform: scale(0.9);
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, .2), inset 0 1px 0 hsl(224, 84%, 74% );
  }
}
`

const ShowPW = styled(IoEye)`
  font-size: 1.5rem;
  position: absolute;
  cursor: pointer;
  top: 49%;
  left: 90%;
  color: hsl(226, 17%, 37%);
`

export default Login



// SMALL SUBMIT BUTTON
// 
// const Button = styled.button`
  /* cursor: pointer; */
  /* background-color: hsl(230, 64%, 63%);  */
  /* border: none; */
  /* padding: 10px 20px; */
  /* color: white; */
  /* font-size: 20px ; */
  /* border-radius: 9px; */
  /* box-shadow: 0 2px 1px hsla(0, 0%, 0%, .2), inset 0 1px 0 hsl(224, 84%, 74% ); */
  /* text-shadow: 1px 1px 0px hsl(230, 64%, 43%); */
  /* padding-left: 22px; */
  /* transition: all 0.13s, box-shadow 0.13s; */
/*  */
  /* &:active { */
  /* transform: scale(0.9); */
  /* box-shadow: 0 1px 3px hsla(0, 0%, 0%, .2), inset 0 1px 0 hsl(224, 84%, 74% ); */
  /* } */
/*  */
/* } */
// `
// 