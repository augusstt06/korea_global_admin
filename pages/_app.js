import '../styles/globals.css'
import '../styles/Page.modules.scss'

import Header from '../component/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
    </div>
    
  )
}

export default MyApp
