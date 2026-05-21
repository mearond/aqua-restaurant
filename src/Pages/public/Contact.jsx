import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Contact() {
  // useNavigate lets us redirect the user to another page
  const navigate = useNavigate()

  return (
    <div style={{ backgroundColor: '#FAF8F3', paddingTop: '70px' }}>
      <Navbar />

      {/* Header */}
      <div style={{
        backgroundColor: '#12344D',
        color: '#FAF8F3',
        textAlign: 'center',
        padding: '60px 40px',
      }}>
        <h1 style={{ fontSize: '42px', color: '#27B7B7', marginBottom: '12px' }}>Contact Us</h1>
        <p style={{ opacity: 0.8, fontSize: '16px' }}>We'd love to hear from you</p>
      </div>

      {/* Content */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '60px',
        padding: '80px 40px',
        flexWrap: 'wrap',
        maxWidth: '1100px',
        margin: '0 auto',
      }}>

        {/* Info */}
        <div style={{ minWidth: '260px' }}>
          <h2 style={{ color: '#12344D', marginBottom: '32px', fontSize: '24px' }}>Find Us</h2>
          {[
            { icon: '📍', label: 'Address', value: 'Bole Road, Addis Ababa, Ethiopia' },
            { icon: '📞', label: 'Phone', value: '+251 911 234 567' },
            { icon: '📧', label: 'Email', value: 'hello@aquarestaurant.com' },
            { icon: '🕐', label: 'Hours', value: 'Mon–Sun: 11am – 11pm' },
          ].map(item => (
            <div key={item.label} style={{ marginBottom: '28px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '24px' }}>{item.icon}</span>
              <div>
                <div style={{ fontWeight: '600', color: '#12344D', marginBottom: '4px' }}>{item.label}</div>
                <div style={{ color: '#666', fontSize: '15px' }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Reservation form */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          padding: '40px',
          width: '100%',
          maxWidth: '460px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}>
          <h2 style={{ color: '#12344D', marginBottom: '24px', fontSize: '22px' }}>Make a Reservation</h2>

          {[
            { label: 'Full Name', type: 'text', placeholder: 'John Doe' },
            { label: 'Email', type: 'email', placeholder: 'you@email.com' },
            { label: 'Phone', type: 'tel', placeholder: '+251 9XX XXX XXX' },
            { label: 'Date', type: 'date', placeholder: '' },
            { label: 'Number of Guests', type: 'number', placeholder: '2' },
          ].map(field => (
            <div key={field.label} style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#12344D', fontSize: '14px' }}>
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                style={{
                  width: '100%',
                  padding: '11px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #e0ddd8',
                  fontSize: '15px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          ))}

          {/* On click, redirect user to login/signup page */}
          <button
            onClick={() => navigate('/login')}
            style={{
              width: '100%',
              padding: '14px',
              backgroundColor: '#FF7F6A',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              marginTop: '8px',
            }}>
            Book Table
          </button>
        </div>
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#12344D',
        color: '#FAF8F3',
        textAlign: 'center',
        padding: '32px',
        fontSize: '14px',
        opacity: 0.9,
      }}>
        © 2025 AQUA Restaurant · All rights reserved
      </div>
    </div>
  )
}

export default Contact