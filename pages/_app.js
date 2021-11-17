import React from "react";
import '../styles/globals.css';
import '../styles/Page.modules.scss';
import {RecoilRoot} from 'recoil';

import Header from '../component/Header';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Header/>
      <Component {...pageProps} />
    </RecoilRoot>

  )
}

export default MyApp;
