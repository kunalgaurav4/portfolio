import React from "react"
// import "../css/main.css"
import favicon from "../assets/favicon.png"
import Helmet from "react-helmet"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
