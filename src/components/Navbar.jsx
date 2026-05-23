import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
     <Link to="/" className="navbar-logo">
        <img
            src="/images/logo.png"
            alt="AQUA"
            style={{ height: '40px', objectFit: 'contain' }}
        />
    </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="navbar-buttons">
        <Link to="/login" className="btn-outline">Login</Link>
        <Link to="/register" className="btn-fill">Reserve</Link>
      </div>
    </nav>
  )
}

export default Navbar