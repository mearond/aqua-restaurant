import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#12344D',
      padding: '0 40px',
      height: '70px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <Link to="/" style={{ color: '#27B7B7', fontSize: '24px', fontWeight: 'bold', textDecoration: 'none' }}>
        AQUA
      </Link>
      <div style={{ display: 'flex', gap: '32px' }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/menu" style={linkStyle}>Menu</Link>
        <Link to="/about" style={linkStyle}>About</Link>
        <Link to="/contact" style={linkStyle}>Contact</Link>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Link to="/login" style={outlineBtn}>Login</Link>
        <Link to="/register" style={fillBtn}>Reserve</Link>
      </div>
    </nav>
  )
}

const linkStyle = {
  color: '#FAF8F3',
  textDecoration: 'none',
  fontSize: '15px',
}

const outlineBtn = {
  color: '#27B7B7',
  border: '1px solid #27B7B7',
  padding: '8px 20px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontSize: '14px',
}

const fillBtn = {
  backgroundColor: '#FF7F6A',
  color: '#FAF8F3',
  padding: '8px 20px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontSize: '14px',
  fontWeight: 'bold',
}

export default Navbar