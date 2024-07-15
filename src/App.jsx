import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Bookings from './components/bookings'
import Allbookings from './components/admindashboard/allbookings'
import Allforms from './components/admindashboard/allforms';
import Allusers from './components/admindashboard/allusers';
import AdminOffers from './components/admindashboard/Offers';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <BrowserRouter>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/bookings' element={<Allbookings />} />
          <Route path='/formreq' element={<Allforms />} />
          <Route path='/customers' element={<Allusers />} />
          <Route path='/offers' element={<AdminOffers />} />



        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
