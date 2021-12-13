/*
Good Icon Color on background:  color: #3b3e4a;

*/


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
    font-family: Arial, Helvetica, sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  .active {
    border-bottom: 2px solid ${p => p.theme.text4Col};

    padding-bottom: 20px;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 10px 100px ${p => p.theme.inputBg} inset, 0 1px 1px 0px hsla(0, 0%, 100%, .15), inset 0 2px 2px hsla(0, 0%, 0%, 0.1) !important;
    -webkit-text-fill-color: hsl(240, 17%, 80%) !important;
    border-radius: 9px;
    border: 0px solid ${p => p.theme.inputBg};
  }
`;



export const darkTheme = {
  navCol: "grey",
  bgCol: "#484D5E",
  textCol: "#fafafa",
  text2Col: "#ebebeb",
  text3Col: "hsl(240, 17%, 80%)",
  text4Col: "hsl(240, 17%, 67%)",
  text5Col: "hsl(240, 10%, 67%)",
  inputBg: "#3E4251",
  navMar: "20px",

}


export const lightTheme = {
  navCol: "grey",
  bgCol: "lightgrey",
  textCol: "black",
}

export default GlobalStyle