import React from "react"
// import "../css/main.css"
import favicon from "../assets/favicon.png"
import Helmet from "react-helmet"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar}></Navbar>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}></Sidebar>
      {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
