import { createGlobalStyle } from "styled-components"


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
    border-bottom: 2px solid rgb(50, 150, 160);
    padding-bottom: 5px;
  }
`;



export const darkTheme = {
  navCol: "grey",
  bgCol: "lightgrey",
  textCol: "darkgrey",
}
export const lightTheme = {
  navCol: "grey",
  bgCol: "lightgrey"
}

export default GlobalStyle