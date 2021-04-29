

import * as React from "react"
import Header from "./Header"
import PropTypes from "prop-types"
import "../pages/login.module.css"
import { GlobalStyle } from "../styles/GlobalStyles"
import styled from "styled-components"


const Layout = ({ children }) => {
  

  return (
    <>
    <GlobalStyle/>
    <styled />
      <Header />
        <main>{children}</main>
        
    </>
  )
}
Layout.propTypes ={
  children: PropTypes.node.isRequired,
}


export default Layout
