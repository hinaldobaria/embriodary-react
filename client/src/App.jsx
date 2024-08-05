import {BrowserRouter} from "react-router-dom"
import Navbar from "./components/Navbar"
import GsapTransition from "./components/GsapTransition"
// import Footer from "./components/Footer"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <GsapTransition></GsapTransition>
        {/* <Footer/> */}
      </BrowserRouter>
    </>
  )
}