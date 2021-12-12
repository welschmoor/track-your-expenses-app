// Custom Hooks

import React, { useState, useContext } from "react"
import { AuthContext } from "../App"
import { firebaseAuth } from "../firebase"


// LOGOUT
export const useLogout = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { user, dispatch } = useContext(AuthContext)


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

  return { logOut, error, loading }
}


// LOGIN
export const useLogin = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { user, dispatch } = useContext(AuthContext)

  const logIn = async (email, password) => {
    setError(null)
    setLoading(true)

    try {
      const response = await firebaseAuth.signInWithEmailAndPassword(email, password)
      dispatch({ type: "LOGIN", payload: response.user })
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(error.message)
      setLoading(false)
    }
  }

  return { logIn, error, loading, user }
}