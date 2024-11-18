import { BrowserRouter as Router , Routes, Route} from "react-router-dom"
import Header from "./Components/Header"
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Products from "./Components/Products";
import {ThemeProvider} from 'next-themes'


const App = () => {
  return (
    <>
    <ThemeProvider>
    <div className="max-w-6xl mx-auto p-4 space-y-24">
      <Router>
        <Header/>
        
       <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Products" element={<Products/>} />
       </Routes>
      </Router>
    </div>

    <div>
      <Footer />
    </div>
    </ThemeProvider>

    </>
  )
}

export default App