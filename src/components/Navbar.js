
import styled from "styled-components"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <Nav>
      <UL>
        <li>
          <NavLinkStyled to="/" >Home</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/about" >About</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/signup" >Sign Up</NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled to="/login" >Login</NavLinkStyled>
        </li>
      </UL>
    </Nav>
  )
}


const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${p=>p.theme.inputBg};
  box-shadow: 0 1px 0px 0px hsla(0, 0%, 0%, .12), 0 2px 4px hsla(0, 0%, 0%,.24);
`

const UL = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`

const NavLinkStyled = styled(NavLink)`
    font-weight: 600;
    margin-bottom: 10px;
    text-shadow: 1px 1px 0px hsl(240, 17%, 24%);
    color: ${p => p.theme.textCol};
`

export default Navbar