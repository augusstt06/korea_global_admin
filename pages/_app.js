import '../styles/globals.css'
import Header from '../component/Header'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Header/>
      <Component {...pageProps} />
      <style jsx>{`
            * {
                box-sizing: border-box;
                margin: 0;
                padding : 0;
                height: 100%;
            }
            `}
      </style>
    </div>
    
  )
}

export default MyApp
