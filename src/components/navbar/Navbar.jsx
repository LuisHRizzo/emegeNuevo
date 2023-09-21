import React from "react";
import "./navbar.css";
import logo from './logo_emege.png' 
import { Link as Anchor, NavLink } from "react-router-dom";



const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light ">
        <div className="d-flex flex-row navbarLogo">
          <Anchor to="/">
            <img src={logo} style={{
                width: '100px'
            }} />
          </Anchor>
        </div>
        <div className="navButtons">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/"
          >
            HOME
          </NavLink>
        </div>
        <div className="navButtons">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
            to="/contacto"
          >
            CONTACTO
          </NavLink>
        </div>
        <div className="navButtons">
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : "pending"
            }
            to="/market"
          >
            MARKET
          </NavLink>
        </div>
        <div>
          <button type="button" className="btn btn-primary navButtons">
            LogIn
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
