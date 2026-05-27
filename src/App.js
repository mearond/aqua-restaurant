import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/public/Home'
import Menu from './Pages/public/Menu'
import About from './Pages/public/About'
import Contact from './Pages/public/Contact'
import Login from './Pages/public/Login'

import CustomerDashboard from './Pages/customer/Dashboard'
import Reservations from './Pages/customer/Reservations'
import Profile from './Pages/customer/Profile'

import AdminDashboard from './Pages/admin/Dashboard'
import ManageMenu from './Pages/admin/ManageMenu'
import ManageOrders from './Pages/admin/ManageOrders'
import ManageReservations from './Pages/admin/ManageReservations'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

        {/* Customer */}
        <Route path="/dashboard" element={<CustomerDashboard />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/menu" element={<ManageMenu />} />
        <Route path="/admin/orders" element={<ManageOrders />} />
        <Route path="/admin/reservations" element={<ManageReservations />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App