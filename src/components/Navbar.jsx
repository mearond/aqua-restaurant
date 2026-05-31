import { Link } from 'react-router-dom'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate()

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
        <button
          onClick={() => {
            const isLoggedIn = localStorage.getItem('token')
            navigate(isLoggedIn ? '/reservations' : '/login')
          }}
          className="btn-fill"
          style={{ border: 'none', cursor: 'pointer' }}>
          Reserve
        </button>
      </div>
    </nav>
  )
}

export default Navbar