import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Contact() {
  const navigate = useNavigate()

  // Track all form field values
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
  })

  // Track whether user tried to submit with empty fields
  const [attempted, setAttempted] = useState(false)

  // Update formData when any field changes
  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  // Check if every field has a value
  const isFormComplete = Object.values(formData).every(val => val.trim() !== '')

  const handleSubmit = () => {
    // If form is incomplete, show errors and don't redirect
    if (!isFormComplete) {
      setAttempted(true)
      return
    }
    // If complete, redirect to login/signup
    navigate('/login')
  }

  // Each field now has a key to track its value
  const fields = [
    { label: 'Full Name', type: 'text', placeholder: 'John Doe', key: 'fullName' },
    { label: 'Email', type: 'email', placeholder: 'you@email.com', key: 'email' },
    { label: 'Phone', type: 'tel', placeholder: '+251 9XX XXX XXX', key: 'phone' },
    { label: 'Date', type: 'date', placeholder: '', key: 'date' },
    { label: 'Number of Guests', type: 'number', placeholder: '2', key: 'guests' },
  ]

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

          {fields.map(field => (
            <div key={field.label} style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#12344D', fontSize: '14px' }}>
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.key]}
                onChange={e => handleChange(field.key, e.target.value)}
                style={{
                  width: '100%',
                  padding: '11px 16px',
                  borderRadius: '8px',
                  // Red border if attempted and field is empty, normal otherwise
                  border: attempted && !formData[field.key].trim()
                    ? '1.5px solid #FF7F6A'
                    : '1.5px solid #e0ddd8',
                  fontSize: '15px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
              {/* Show error message under empty fields after attempt */}
              {attempted && !formData[field.key].trim() && (
                <p style={{ color: '#FF7F6A', fontSize: '12px', marginTop: '4px' }}>
                  This field is required
                </p>
              )}
            </div>
          ))}

          <button
            onClick={handleSubmit}
            style={{
              width: '100%',
              padding: '14px',
              // Button is darker when form is incomplete to hint it's not ready
              backgroundColor: isFormComplete ? '#FF7F6A' : '#ffb5a9',
              color: '#fff',
              border: 'none',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: isFormComplete ? 'pointer' : 'not-allowed',
              marginTop: '8px',
              transition: 'background-color 0.2s',
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