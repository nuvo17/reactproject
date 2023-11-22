import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App'
// import './css/index.css'
import Header from './Components/Header'
import Home from './Components/Home'
import Footer from './Components/Footer'
import "./css/First.css"


ReactDOM.createRoot(document.getElementById('root')).render(

  <div>
    {/* <App /> */}
    <Header />
    <Home />
    <Footer />
  </div>
  
)
