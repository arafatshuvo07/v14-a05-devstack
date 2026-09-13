import { ToastContainer } from 'react-toastify'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Technologies from './components/Technologies'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Technologies />
      <Footer />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  )
}

export default App
