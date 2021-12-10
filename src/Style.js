import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${p => p.theme.bgCol};
  }
  html {
    font-size: 125%;
    font-family: Arial, sans-serif;
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
  }
  .active {
    border-bottom: 2px solid ${p => p.theme.textCol};

    padding-bottom: 20px;
  }
`;



export const darkTheme = {
  navCol: "grey",
  bgCol: "#484D5E",
  textCol: "white",
  inputBg: "#3E4251",

}


export const lightTheme = {
  navCol: "grey",
  bgCol: "lightgrey",
  textCol: "black",
}

export default GlobalStyle