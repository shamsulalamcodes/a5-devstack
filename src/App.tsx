import './App.css'
import Banner from './components/banner/Banner'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import TechnologiesHeader from './components/Technologies/TechnologiesHeader'

function App() {

  return (
    // <div className='px-10'>
    <div className='max-w-7xl mx-auto'>
      <div className="p-5">
        <Navbar />
        <Banner />
        <TechnologiesHeader />
        <Footer />
      </div>
    </div >
  )
}

export default App
