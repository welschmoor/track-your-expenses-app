
import styled from "styled-components"
import { NavLink, useNavigate } from "react-router-dom"
import { useLogout } from "../hooks/hooks"
import { useContext } from "react"
import { AuthContext } from "../App"
import { Button } from "../pages/Login"
import { IoLogOutOutline } from "react-icons/io5"
import ThemeSwitch from "./ThemeSwitch"



const Navbar = ({ sending: { darkMode, setDarkMode } }) => {
  const { logOut, error, loading } = useLogout()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  console.log(user)

  const logoutHandler = () => {
    logOut()
    navigate('/')
  }

  return (
    <Nav>
      <UL>
        <HomeAboutDiv>
          <li>
            <NavLinkStyled to="/" >Home</NavLinkStyled>
          </li>
          {user && <li> <NavLinkStyled to="/cc" >Control Center</NavLinkStyled> </li>}
          <li>
            <NavLinkStyled to="/about" >About</NavLinkStyled>
          </li>
        </HomeAboutDiv>

        <LogInDiv>
          <ThemeSwitch setDarkMode={setDarkMode} />
          {!user && <><li>
            <NavLinkStyled to="/login" >Login</NavLinkStyled>
          </li>
            <li>
              <NavLinkStyled to="/signup" >Sign Up</NavLinkStyled>
            </li></>}
          {user && <HelloMsg>Logged in as {user.displayName}!</HelloMsg>}
          {user && <LogOutBtn onClick={logoutHandler} >Logout<LogOutIcon /></LogOutBtn>}
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
  text-shadow: ${p => p.theme.textShadowNav};
  color: ${p => p.theme.textCol};
  padding-bottom: 20px;
  padding-top: 16px;

  &:hover {
    border-bottom: 2px solid ${p => p.theme.textCol};
  }
`

const HomeAboutDiv = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;
`

const LogInDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`

export const LogOutBtn = styled(Button)`
  background-color: ${p => p.theme.logOutBtnBgCol};
  color: ${p => p.theme.logOutIconCol};
  border: none;
  font-size: 0.8rem;
  width: 140px;
  letter-spacing: 0.5px;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    font-size: 0rem;
  }
`

const CCBtn = styled(LogOutBtn)`
  width: 230px;
`

const HelloMsg = styled.div`
  font-size: 0.8rem;
  font-style: italic;
  color: ${p => p.theme.text3Col};
  text-shadow: ${p => p.theme.textShadow1px};

`

const LogOutIcon = styled(IoLogOutOutline)`
  color: ${p => p.theme.logOutIconCol};
  font-size: 0rem;
  ${LogOutBtn}:hover & {
    font-size: 1.4rem;
  }
`

export default Navbar