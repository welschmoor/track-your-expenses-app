// this Component also has logOut and signUp functions

import React, { useState, useContext } from "react"
import styled from "styled-components"
import { Form, Label, INPUT, Button } from "./Login"
import { firebaseAuth } from "../firebase"
import Error from "../components/Error"
import Filler from "../components/Filler"
import { AuthContext } from "../App"

const Signup = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { user, dispatch } = useContext(AuthContext)
  console.log(user)

  const signUp = async (email, password, displayName) => {
    setError(null)
    setLoading(true)

    try {
      const response = await firebaseAuth.createUserWithEmailAndPassword(email, password)
      if (!response) throw new Error("Signup failed")
      console.log(response.user)

      await response.user.updateProfile({ displayName })  // we update, because we want extra properties (displayName)
      dispatch({ type: "LOGIN", payload: response.user })

      setLoading(false)
      setError(null)
    } catch (error) {
      console.log(error)
      setError(error.message)
      setLoading(false)
    }
  }

  const logOut = async () => {
    setError(null)
    setLoading(true)

    try {
      await firebaseAuth.signOut()
      dispatch({ type: "LOGOUT" })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(error.message)
      setLoading(false)
    }
  }


  const submitHandler = (e) => {
    e.preventDefault()
    signUp(e.target.email.value, e.target.password.value)
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
          <Label htmlFor="passwordR">Repeat your password </Label>
          <INPUT type="password" name="passwordR" id="passwordR" required />
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
