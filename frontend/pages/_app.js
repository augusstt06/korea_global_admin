import React from "react";
import '../styles/globals.scss';
import '../styles/Page.modules.scss';
import {RecoilRoot} from 'recoil';
import {CookiesProvider} from "react-cookie";
import Side from "../component/Side";

import Header from '../component/Header';
import Footer from "../component/Footer";


function MyApp({ Component, pageProps }) {
  return (
      <CookiesProvider>
      <RecoilRoot>
          <Header/>
          <content>
              <Side/>
              <Component {...pageProps}/>
            {/*<Component {...pageProps}/>*/}
          </content>
          <Footer/>
      </RecoilRoot>
      </CookiesProvider>
  )
}

export default MyApp;
