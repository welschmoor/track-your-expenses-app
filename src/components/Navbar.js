
import styled from "styled-components"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  return (
    <Nav>
      <UL>
        <HomeAboutDiv>
          <li>
            <NavLinkStyled to="/" >Home</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/about" >About</NavLinkStyled>
          </li>
        </HomeAboutDiv>

        <LogInDiv>
          <li>
            <NavLinkStyled to="/login" >Login</NavLinkStyled>
          </li>
          <li>
            <NavLinkStyled to="/signup" >Sign Up</NavLinkStyled>
          </li>
        </LogInDiv>


      </UL>
    </Nav>
  )
}


const Nav = styled.nav`
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${p => p.theme.inputBg};
  box-shadow: 0 1px 0px 0px hsla(0, 0%, 0%, .12), 0 2px 4px hsla(0, 0%, 0%,.24);
`

const UL = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  margin-right: ${p => p.theme.navMar};
  margin-left: ${p => p.theme.navMar};
`

const NavLinkStyled = styled(NavLink)`
    font-weight: 600;
    margin-bottom: 10px;
    text-shadow: 1px 1px 0px hsl(240, 17%, 24%);
    color: ${p => p.theme.textCol};
    padding-bottom: 20px
`

const HomeAboutDiv = styled.div`
  display: flex;
  gap: 20px;
`

const LogInDiv = styled.div`
  display: flex;
  gap: 20px;
`

export default Navbar