
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About"
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar"

import GlobalStyle, { darkTheme, lightTheme } from "./Style";
import { createContext, useReducer } from "react"

export const AuthContext = createContext()

const initialState = { user: null }
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload }
    case "LOGOUT":
      return { ...state, user: null }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log("state:::", state)
  return (
    <AuthContext.Provider value={{ ...state, dispatch }} >
      <ThemeProvider theme={darkTheme || lightTheme} >
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </AuthContext.Provider>
  );
}

export default App;
