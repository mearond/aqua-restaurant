import Navbar from '../../components/Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    guests: '',
  })

  const [attempted, setAttempted] = useState(false)

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }))
  }

  const isFormComplete = Object.values(formData).every(val => val.trim() !== '')

  const handleSubmit = () => {
    if (!isFormComplete) {
      setAttempted(true)
      return
    }
    navigate('/login')
  }

  return (
    <div style={{ backgroundColor: '#FAF8F3', paddingTop: '70px' }}>
      <Navbar />

      {/* Hero + Contact Info — wrapped so arch overlaps both */}
      <div style={{ position: 'relative' }}>

        {/* Hero */}
        <div style={{
          backgroundColor: '#12344D',
          display: 'flex',
          alignItems: 'center',
          padding: '60px 60px 100px',
          minHeight: '320px',
        }}>
          <div style={{ flex: 1, maxWidth: '520px' }}>
            <p style={{ color: '#27B7B7', fontSize: '12px', letterSpacing: '3px', marginBottom: '12px' }}>
              GET IN TOUCH
            </p>
            <h1 style={{ color: '#FAF8F3', fontSize: '40px', fontWeight: '800', marginBottom: '16px', lineHeight: '1.2' }}>
              Contact Us
            </h1>
            <p style={{ color: '#FAF8F3', opacity: 0.7, fontSize: '14px', lineHeight: '1.8', maxWidth: '380px' }}>
              We'd love to hear from you. Reach out for reservations, inquiries, or just to say hello.
            </p>
          </div>

          {/* Arch image — centered right, extends deep into section below */}
          <div style={{
            position: 'absolute',
            right: '120px',
            top: '40px',
            width: '380px',
            height: '520px',
            borderRadius: '999px 999px 16px 16px',
            overflow: 'hidden',
            zIndex: 10,
            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
          }}>
            <img
              src="/images/interior/interior-4.png"
              alt="AQUA interior"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Contact Info strip */}
        <div style={{ backgroundColor: '#FAF8F3', padding: '48px 60px', paddingRight: '560px' }}>
          <p style={{ color: '#12344D', fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>
            Contact Information
          </p>
          <p style={{ color: '#888', fontSize: '13px', marginBottom: '32px' }}>
            Multiple ways to reach the AQUA team
          </p>
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            {[
              { icon: '✆', title: '+251 911 234 567', sub: 'Mon–Sun 11am–11pm' },
              { icon: '✉', title: 'hello@aquarestaurant.com', sub: 'We reply within 24hrs' },
              { icon: '⊙', title: 'Bole Road, Addis Ababa', sub: 'Ethiopia' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  backgroundColor: '#12344D',
                  border: '2px solid rgba(255,255,255,0.15)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  color: '#fff',
                }}>
                  {item.icon}
                </div>
                <p style={{ color: '#12344D', fontSize: '13px', fontWeight: '600' }}>{item.title}</p>
                <p style={{ color: '#888', fontSize: '12px' }}>{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Get in Touch form + Map */}
      <div style={{ display: 'flex', gap: '32px', padding: '0 60px 60px', alignItems: 'flex-start' }}>

        {/* Contact form — dark card */}
        <div style={{
          flex: '0 0 42%',
          backgroundColor: '#12344D',
          borderRadius: '14px',
          padding: '36px',
        }}>
          <p style={{ color: '#27B7B7', fontSize: '14px', fontWeight: '700', marginBottom: '6px' }}>Get In Touch!</p>
          <p style={{ color: '#FAF8F3', opacity: 0.65, fontSize: '12px', marginBottom: '24px' }}>
            Fill out the form and we'll get back to you
          </p>
          {['Email', 'Name', 'Message'].map(field => (
            <div key={field} style={{ marginBottom: '14px' }}>
              <input
                type="text"
                placeholder={field}
                style={{
                  width: '100%',
                  padding: field === 'Message' ? '12px 14px 60px' : '12px 14px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  color: '#FAF8F3',
                  fontSize: '13px',
                  outline: 'none',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          ))}
          <button style={{
            backgroundColor: '#FF7F6A',
            color: '#fff',
            border: 'none',
            padding: '11px 28px',
            borderRadius: '7px',
            fontSize: '13px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '8px',
          }}>
            Send Message
          </button>
        </div>

        {/* Map + Social */}
        <div style={{ flex: 1 }}>
          <p style={{ color: '#12344D', fontSize: '15px', fontWeight: '700', marginBottom: '8px' }}>Our Location</p>
          <p style={{ color: '#888', fontSize: '13px', marginBottom: '16px' }}>Find us on Bole Road, Addis Ababa</p>

          {/* Embedded Google Map */}
          <iframe
            title="AQUA Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5!2d38.7969!3d9.0106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDAnMzguMiJOIDM4wrA0Nyc0OS4wIkU!5e0!3m2!1sen!2set!4v1"
            width="100%"
            height="220"
            style={{ border: 0, borderRadius: '12px', marginBottom: '24px', display: 'block' }}
            allowFullScreen=""
            loading="lazy"
          />

          {/* Social Media */}
          <p style={{ color: '#12344D', fontSize: '14px', fontWeight: '700', marginBottom: '12px' }}>Social Media</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { label: 'f', color: '#1E81B0' },
              { label: 'in', color: '#1E81B0' },
              { label: 'yt', color: '#FF7F6A' },
              { label: 'tw', color: '#27B7B7' },
            ].map(s => (
              <div key={s.label} style={{
                width: '38px',
                height: '38px',
                backgroundColor: s.color,
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
              }}>
                {s.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reservation CTA — background image with overlay */}
      <div style={{ position: 'relative', overflow: 'hidden', textAlign: 'center', padding: '80px 40px' }}>
        <img
          src="/images/interior/interior-1.png"
          alt="background"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: '#12344D',
          opacity: 0.50,
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#27B7B7', fontSize: '12px', letterSpacing: '3px', marginBottom: '12px' }}>DON'T WAIT</p>
          <h2 style={{ color: '#FAF8F3', fontSize: '36px', fontWeight: '800', marginBottom: '12px' }}>
            Make a Reservation Now!
          </h2>
          <p style={{ color: '#FAF8F3', opacity: 0.75, fontSize: '15px', marginBottom: '32px' }}>
            Book your table today and experience the best of Ethiopian-Western fine dining
          </p>
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#FF7F6A',
              color: '#fff',
              border: 'none',
              padding: '15px 40px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '700',
              cursor: 'pointer',
            }}>
            Book a Table
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