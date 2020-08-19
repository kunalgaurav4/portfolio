import React from "react"
import logo from "../assets/favicon.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img width="12%" src={logo} alt="kunal" />
          <button type="button" className="toggle-btn"></button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
