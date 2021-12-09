import React from "react";
import '../styles/globals.css';
import '../styles/Page.modules.scss';
import {RecoilRoot} from 'recoil';
import {CookiesProvider} from "react-cookie";

import Header from '../component/Header';
import Footer from "../component/Footer";


function MyApp({ Component, pageProps }) {
  return (
      <CookiesProvider>
      <RecoilRoot>
          <Header/>
          <Component {...pageProps}/>
          <Footer/>
      </RecoilRoot>
      </CookiesProvider>
  )
}

export default MyApp;
