import Footer from "./components/Footer"
import Manager from "./components/Manager"
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-[87vh]">
      <Manager/>
      <Footer/>
      </div>
    </div>
  )
}

export default App