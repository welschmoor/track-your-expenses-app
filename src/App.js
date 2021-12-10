
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About"
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar"

import GlobalStyle, { darkTheme, lightTheme } from "./Style";


function App() {
  return (
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
  );
}

export default App;
