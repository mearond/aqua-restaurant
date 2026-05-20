// useState lets us track data that can change (like which tab is active)
import { useState } from 'react'

// Link is used for navigation between pages without refreshing
import { Link } from 'react-router-dom'

// Our shared navbar component
import Navbar from '../../components/Navbar'

function Login() {
  // isLogin tracks whether we're showing the Login or Sign Up form
  // useState(true) means it starts on Login by default
  // setIsLogin is the function we call to change it
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Navbar />

      {/* Center the card on the page */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',   // center horizontally
        alignItems: 'center',       // center vertically
        padding: '80px 20px',
      }}>

        {/* The white card container */}
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '16px',
          padding: '48px',
          width: '100%',
          maxWidth: '440px',        // never gets wider than 440px
          boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        }}>

          {/* Toggle bar — switches between Login and Sign Up */}
          <div style={{
            display: 'flex',
            backgroundColor: '#f0eeea',
            borderRadius: '8px',
            padding: '4px',
            marginBottom: '32px',
          }}>
            {/* Login button — dark when active, transparent when not */}
            <button
              onClick={() => setIsLogin(true)}  // clicking sets isLogin to true
              style={{
                flex: 1,
                padding: '10px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                backgroundColor: isLogin ? '#12344D' : 'transparent', // conditional style
                color: isLogin ? '#fff' : '#666',
                transition: 'all 0.2s',
              }}>
              Login
            </button>

            {/* Sign Up button — dark when active, transparent when not */}
            <button
              onClick={() => setIsLogin(false)} // clicking sets isLogin to false
              style={{
                flex: 1,
                padding: '10px',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                backgroundColor: !isLogin ? '#12344D' : 'transparent',
                color: !isLogin ? '#fff' : '#666',
                transition: 'all 0.2s',
              }}>
              Sign Up
            </button>
          </div>

          {/* Title and subtitle change depending on which tab is active */}
          <h2 style={{ color: '#12344D', marginBottom: '8px' }}>
            {isLogin ? 'Welcome back' : 'Create an account'}
          </h2>
          <p style={{ color: '#888', marginBottom: '32px', fontSize: '14px' }}>
            {isLogin ? 'Sign in to manage your reservations' : 'Join AQUA to book tables and more'}
          </p>

          {/* Name field only shows on Sign Up, hidden on Login */}
          {!isLogin && (
            <div style={{ marginBottom: '16px' }}>
              <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#12344D' }}>Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  border: '1.5px solid #e0ddd8',
                  fontSize: '15px',
                  outline: 'none',
                  boxSizing: 'border-box', // padding doesn't push the width over 100%
                }}
              />
            </div>
          )}

          {/* Email field — always visible */}
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#12344D' }}>Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1.5px solid #e0ddd8',
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Password field — always visible */}
          <div style={{ marginBottom: '24px' }}>
            <label style={{ display: 'block', marginBottom: '6px', fontWeight: '500', color: '#12344D' }}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '8px',
                border: '1.5px solid #e0ddd8',
                fontSize: '15px',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Submit button — label changes based on active tab */}
          <button style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#1E81B0',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
          }}>
            {isLogin ? 'Login' : 'Create Account'}
          </button>

        </div>
      </div>
    </div>
  )
}

export default Login