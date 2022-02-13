// this Component also has logOut and signUp functions

import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Form, Label, INPUT, Button } from "./Login"
import { firebaseAuth } from "../firebase"
import Error from "../components/Error"
import Filler from "../components/Filler"
import { AuthContext } from "../App"
import { useNavigate } from "react-router"

const Signup = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { user, dispatch } = useContext(AuthContext)
  const navigate = useNavigate()


  const signUp = async (email, password, displayName) => {
    setError(null)
    setLoading(true)

    try {
      const response = await firebaseAuth.createUserWithEmailAndPassword(email, password)
      if (!response) throw new Error("Signup failed")

      await response.user.updateProfile({ displayName })  // we update, because we want extra properties (displayName)
      dispatch({ type: "LOGIN", payload: response.user })

      setLoading(false)
      setError(null)
    } catch (error) {
      setError(error.message)
      setLoading(false)
      setTimeout(() => { setError(null) }, 4200)
    }
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (e.target.password.value.length < 6) {
      setError("Password must be at least 6 characters long")
      setTimeout(() => { setError(null) }, 4200)
      return
    }
    if (e.target.password.value !== e.target.passwordRepeat.value) {
      setError("Passwords don't match!")
      setTimeout(() => { setError(null) }, 4200)
      return
    }
    if (!e.target.email.value.includes("@")) {
      setError("emails have @ sign")
      setTimeout(() => { setError(null) }, 4200)
      return
    }
    signUp(e.target.email.value, e.target.password.value, e.target.displayname.value)
    navigate('/')
  }

  return (
    < >
      {error ? <Error errormsg={error} /> : <Filler />}
      <Form name="loginform" onSubmit={submitHandler} >
        <div>
          <Label htmlFor="email">Enter your email </Label>
          <INPUT type="email" name="email" id="email" required />
        </div>
        <div>
          <Label htmlFor="password">Enter your password </Label>
          <INPUT type="password" name="password" id="password" required />
        </div>
        <div>
          <Label htmlFor="passwordRepeat">Repeat your password </Label>
          <INPUT type="password" name="passwordRepeat" id="passwordRepeat" required />
        </div>
        <div>
          <Label htmlFor="displayname">Enter your display name </Label>
          <INPUT type="text" name="displayname" id="displayname" required />
        </div>
        <Button type="submit" disabled={loading ? true : false} >Register</Button>
      </Form>
    </>
  )
}


export default Signup
