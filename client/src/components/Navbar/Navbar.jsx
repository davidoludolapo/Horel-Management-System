import React from "react";
// import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import styled from "styled-components";
import PrimaryButton from "../PrimaryButton";

const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  /* position: sticky;
  top: 0;
  z-index: 1; */
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
const Logo = styled.nav`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  letter-spacing: 1.3px;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;

  list-style: none;
  text-align: center;
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`;



function Navbar() {
  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    // <div className="navbar">
    //   <div className="navContainer">
    //     <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
    //       <span className="logo">Imperial Hotels</span>
    //     </Link>

    //     <div>home</div>
    //     <div>home</div>
    //     <div>home</div>

    //     {user ? (
    //       <span>Hello {user.username}</span>
    //     ) : (
    //       <div className="navItems">
    //         <button className="navButton">Register</button>
    //         <Link to="/login">
    //           <button className="navButton">Login</button>
    //         </Link>
    //       </div>
    //     )}
    //     {user && (
    //       <button onClick={handleLogout} className="navButton">
    //         Logout
    //       </button>
    //     )}
    //   </div>
    // </div>

    <Nav>
      <NavbarContainer>
        <Logo><Link to="/" style={{textDecoration: "none", color:"#333"}}>IMPERIAL</Link></Logo>
        <NavMenu>
          <NavItem>
            <NavLinks>About</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>Discover</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks>Book Hotel</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>

     {user ? <> <span>Hello {user.username} 😀</span> <NavLinks> <div onClick={handleLogout}><PrimaryButton  name={"Log Out"} /></div></NavLinks> </>  :  <> <Link to="/login"><PrimaryButton name={"Sign Up"} /></Link> 
      <NavLinks> <Link style={{textDecoration:"none"}} to="/login">Login</Link> </NavLinks> </>}
    </Nav>
  );
}

export default Navbar;
