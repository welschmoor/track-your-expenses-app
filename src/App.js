
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About"
import Signup from "./pages/Signup";
import CC from "./pages/CC";
import Navbar from "./components/Navbar"


import GlobalStyle, { darkTheme, lightTheme } from "./Style";
import { createContext, useReducer, useEffect, useState } from "react"
import { firebaseAuth } from "./firebase";

export const AuthContext = createContext()

const initialState = { user: null, authBool: false }
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }
    case "LOGOUT":
      return { ...state, user: null }
    case "AUTH":
      return { ...state, user: action.payload, authBool: true }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(user => {
      dispatch({ type: "AUTH", payload: user })
      unsubscribe()
    })
  }, [])

  return (

    <AuthContext.Provider value={{ ...state, dispatch }} >
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
        <GlobalStyle />
        {state.authBool && (
          <BrowserRouter>
            <Navbar sending={{ darkMode, setDarkMode }} />
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/cc" element={<CC />} />
              <Route path="/login" element={state.user ? <Navigate to="/" /> : <Login />} />
              <Route path="/signup" element={state.user ? <Navigate to="/" /> : <Signup />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        )}
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
