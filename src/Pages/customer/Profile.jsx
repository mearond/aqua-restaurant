import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile() {
  const navigate = useNavigate()

  // Tracks which password fields are visible
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)

  // Tracks selected dining preferences
  const [preferences, setPreferences] = useState(['Window Seat', 'Quiet Area'])

  const allPreferences = ['Window Seat', 'Quiet Area', 'Outdoor', 'Bar Seating', 'Private Room', 'Terrace']

  // Toggle a preference on or off
  const togglePreference = (pref) => {
    setPreferences(prev =>
      prev.includes(pref) ? prev.filter(p => p !== pref) : [...prev, pref]
    )
  }

  const Icon = ({ symbol, color = 'rgba(255,255,255,0.4)', size = 15 }) => (
    <span style={{ color, fontSize: size, lineHeight: 1, flexShrink: 0 }}>{symbol}</span>
  )

  // Reusable input field
  const Field = ({ label, value, type = 'text' }) => (
    <div style={{ marginBottom: '16px' }}>
      <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px', marginBottom: '6px' }}>{label}</p>
      <input
        type={type}
        defaultValue={value}
        style={{
          width: '100%',
          background: '#FAF8F3',
          border: '0.5px solid #e0ddd8',
          borderRadius: '8px',
          padding: '11px 14px',
          fontSize: '13px',
          color: '#12344D',
          outline: 'none',
          boxSizing: 'border-box',
          transition: 'border-color 0.2s',
        }}
        onFocus={e => e.target.style.borderColor = '#27B7B7'}
        onBlur={e => e.target.style.borderColor = '#e0ddd8'}
      />
    </div>
  )

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── Sidebar ── */}
      <div style={{
        width: '240px',
        background: '#0d2a3d',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        borderRight: '0.5px solid rgba(255,255,255,0.06)',
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
      }}>

        {/* Logo */}
        <div style={{ padding: '28px 28px 20px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
          <img src="/images/logo.png" alt="AQUA" style={{ height: '52px', objectFit: 'contain' }} />
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', letterSpacing: '2px', marginTop: '6px' }}>MEMBER PORTAL</p>
        </div>

        {/* User */}
        <div style={{ padding: '20px 28px', borderBottom: '0.5px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '42px', height: '42px', borderRadius: '50%',
            background: 'linear-gradient(135deg,#1E81B0,#27B7B7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: '700', fontSize: '15px', flexShrink: 0,
          }}>M</div>
          <div>
            <p style={{ color: '#FAF8F3', fontSize: '13px', fontWeight: '600' }}>Mary Doe</p>
            <p style={{ color: '#27B7B7', fontSize: '10px', letterSpacing: '1px' }}>GOLD MEMBER</p>
          </div>
        </div>

        {/* Nav */}
        <div style={{ padding: '16px 0', flex: 1 }}>
          <div onClick={() => navigate('/dashboard')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="⊞" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Dashboard</span>
          </div>
          <div onClick={() => navigate('/reservations')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="▦" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Reservations</span>
          </div>
          {/* Profile — active */}
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(39,183,183,0.08)', borderLeft: '2px solid #27B7B7' }}>
            <Icon symbol="○" color="#27B7B7" />
            <span style={{ color: '#27B7B7', fontSize: '13px' }}>Profile</span>
          </div>
          <div style={{ margin: '8px 0', borderTop: '0.5px solid rgba(255,255,255,0.06)' }} />
          <div onClick={() => navigate('/')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="◎" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Back to Site</span>
          </div>
        </div>

        {/* Logout */}
        <div style={{ padding: '20px 28px', borderTop: '0.5px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <Icon symbol="←" color="#FF7F6A" />
          <span style={{ color: '#FF7F6A', fontSize: '13px' }}>Logout</span>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ flex: 1, background: '#FAF8F3', marginLeft: '240px' }}>

        {/* Top bar */}
        <div style={{
          background: '#fff',
          padding: '20px 36px',
          borderBottom: '0.5px solid #e0ddd8',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}>
          <div>
            <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>My Profile</p>
            <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>Manage your personal information</p>
          </div>
          <button style={{
            background: '#FF7F6A',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '8px',
            fontSize: '12px',
            fontWeight: '600',
            cursor: 'pointer',
          }}>
            Save Changes
          </button>
        </div>

        <div style={{ padding: '28px 36px' }}>

          {/* Profile header card — luxury dark with gradient border */}
          <div style={{
            background: 'linear-gradient(135deg, #0d2a3d, #12344D)',
            borderRadius: '16px',
            padding: '2px',
            marginBottom: '24px',
            boxShadow: '0 8px 32px rgba(39,183,183,0.12)',
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #0d2a3d, #12344D)',
              borderRadius: '14px',
              padding: '32px',
              display: 'flex',
              alignItems: 'center',
              gap: '28px',
            }}>
              {/* Avatar with glowing ring */}
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <div style={{
                  width: '88px', height: '88px', borderRadius: '50%',
                  background: 'linear-gradient(135deg,#1E81B0,#27B7B7)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontWeight: '700', fontSize: '32px',
                  boxShadow: '0 0 0 3px #0d2a3d, 0 0 0 5px #27B7B7, 0 0 20px rgba(39,183,183,0.4)',
                }}>M</div>
                <div style={{
                  position: 'absolute', bottom: 0, right: 0,
                  width: '26px', height: '26px',
                  background: '#FF7F6A',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontSize: '12px', cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}>✎</div>
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <p style={{ color: '#FAF8F3', fontSize: '22px', fontWeight: '700', marginBottom: '4px' }}>Mary Doe</p>
                <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px', marginBottom: '14px' }}>mary@email.com · Member since 2023</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ background: 'rgba(39,183,183,0.15)', color: '#27B7B7', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', border: '0.5px solid rgba(39,183,183,0.3)' }}>✦ Gold Member</span>
                  <span style={{ background: 'rgba(255,127,106,0.15)', color: '#FF7F6A', padding: '5px 16px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', border: '0.5px solid rgba(255,127,106,0.3)' }}>◇ 320 Points</span>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: 'flex', gap: '0', textAlign: 'center' }}>
                <div style={{ padding: '0 32px', borderRight: '0.5px solid rgba(255,255,255,0.1)' }}>
                  <p style={{ color: '#FAF8F3', fontSize: '28px', fontWeight: '700' }}>4</p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '1px' }}>RESERVATIONS</p>
                </div>
                <div style={{ padding: '0 32px' }}>
                  <p style={{ color: '#FAF8F3', fontSize: '28px', fontWeight: '700' }}>320</p>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', letterSpacing: '1px' }}>POINTS</p>
                </div>
              </div>
            </div>

            {/* Loyalty progress bar */}
            <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '0 0 14px 14px', padding: '16px 32px', display: 'flex', alignItems: 'center', gap: '16px', borderTop: '0.5px solid rgba(255,255,255,0.06)' }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', letterSpacing: '1px', whiteSpace: 'nowrap' }}>GOLD → PLATINUM</p>
              <div style={{ flex: 1, background: 'rgba(255,255,255,0.08)', borderRadius: '99px', height: '6px' }}>
                <div style={{ width: '64%', background: 'linear-gradient(90deg, #1E81B0, #27B7B7)', borderRadius: '99px', height: '100%' }} />
              </div>
              <p style={{ color: '#27B7B7', fontSize: '11px', fontWeight: '600', whiteSpace: 'nowrap' }}>320 / 500 pts</p>
            </div>
          </div>

          {/* Two column */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

            {/* Personal Info */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '0.5px solid #e0ddd8' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div style={{ width: '3px', height: '18px', background: '#27B7B7', borderRadius: '2px' }} />
                <p style={{ color: '#12344D', fontSize: '14px', fontWeight: '600' }}>Personal Information</p>
              </div>
              <Field label="FULL NAME" value="Mary Doe" />
              <Field label="EMAIL" value="mary@email.com" type="email" />
              <Field label="PHONE" value="+251 911 234 567" type="tel" />
              <Field label="DATE OF BIRTH" value="1995-01-15" type="date" />
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Security */}
              <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '0.5px solid #e0ddd8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ width: '3px', height: '18px', background: '#27B7B7', borderRadius: '2px' }} />
                  <p style={{ color: '#12344D', fontSize: '14px', fontWeight: '600' }}>Security</p>
                </div>

                {/* Current password with eye toggle */}
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px', marginBottom: '6px' }}>CURRENT PASSWORD</p>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showCurrentPassword ? 'text' : 'password'}
                      defaultValue="password123"
                      style={{
                        width: '100%',
                        background: '#FAF8F3',
                        border: '0.5px solid #e0ddd8',
                        borderRadius: '8px',
                        padding: '11px 40px 11px 14px',
                        fontSize: '13px',
                        color: '#12344D',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = '#27B7B7'}
                      onBlur={e => e.target.style.borderColor = '#e0ddd8'}
                    />
                    {/* Eye toggle button */}
                    <span
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      style={{
                        position: 'absolute', right: '12px', top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer', color: '#888', fontSize: '14px',
                        userSelect: 'none',
                      }}>
                      {showCurrentPassword ? '◯' : '●'}
                    </span>
                  </div>
                </div>

                {/* New password with eye toggle */}
                <div>
                  <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px', marginBottom: '6px' }}>NEW PASSWORD</p>
                  <div style={{ position: 'relative' }}>
                    <input
                      type={showNewPassword ? 'text' : 'password'}
                      placeholder="Enter new password"
                      style={{
                        width: '100%',
                        background: '#FAF8F3',
                        border: '0.5px solid #e0ddd8',
                        borderRadius: '8px',
                        padding: '11px 40px 11px 14px',
                        fontSize: '13px',
                        color: '#12344D',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                      onFocus={e => e.target.style.borderColor = '#27B7B7'}
                      onBlur={e => e.target.style.borderColor = '#e0ddd8'}
                    />
                    <span
                      onClick={() => setShowNewPassword(!showNewPassword)}
                      style={{
                        position: 'absolute', right: '12px', top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer', color: '#888', fontSize: '14px',
                        userSelect: 'none',
                      }}>
                      {showNewPassword ? '◯' : '●'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dining Preferences */}
              <div style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '0.5px solid #e0ddd8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                  <div style={{ width: '3px', height: '18px', background: '#27B7B7', borderRadius: '2px' }} />
                  <p style={{ color: '#12344D', fontSize: '14px', fontWeight: '600' }}>Dining Preferences</p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {allPreferences.map(pref => {
                    const active = preferences.includes(pref)
                    return (
                      <span
                        key={pref}
                        onClick={() => togglePreference(pref)}
                        style={{
                          background: active ? '#12344D' : '#FAF8F3',
                          color: active ? '#27B7B7' : '#888',
                          padding: '7px 16px',
                          borderRadius: '20px',
                          fontSize: '11px',
                          fontWeight: '600',
                          border: active ? '0.5px solid rgba(39,183,183,0.3)' : '0.5px solid #e0ddd8',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                        }}>
                        {active ? '✦ ' : ''}{pref}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile