import React from 'react'

// import component dari folder luar
import Header from '../Header/Header';
import Routers from '../../router/Routers';
import Footer from '../Footer/Footer';
function Layout() {
  return <>
    <Header/>
    <Routers/>
    <Footer/>
  </>
}

export default Layout