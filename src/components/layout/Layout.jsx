import { Fragment } from "react";

import { Outlet } from "react-router-dom";

import Footer from "../footer/Footer";
import Header from "../header/Header"

const Layout = () => {
  return (
    <Fragment>
        <Header/>
        <main>
        <Outlet/>
        </main>
        <Footer/>
    </Fragment>
  )
}

export default Layout