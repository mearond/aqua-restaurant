import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Reservations() {
  const navigate = useNavigate()

  // Active filter tab
  const [activeFilter, setActiveFilter] = useState('All')

  // Placeholder data — will come from backend later
  const reservations = [
    { id: 1, day: '7', month: 'JUN', weekday: 'Saturday', time: '7:00 PM', guests: 2, location: 'Main Dining Hall', status: 'Confirmed' },
    { id: 2, day: '14', month: 'JUN', weekday: 'Friday', time: '8:30 PM', guests: 4, location: 'Terrace Seating', status: 'Pending' },
    { id: 3, day: '2', month: 'MAY', weekday: 'Thursday', time: '7:00 PM', guests: 6, location: 'Private Lounge', status: 'Completed' },
    { id: 4, day: '15', month: 'APR', weekday: 'Monday', time: '6:00 PM', guests: 2, location: 'Main Dining Hall', status: 'Completed' },
  ]

  const filters = ['All', 'Upcoming', 'Confirmed', 'Pending', 'Past']

  // Filter logic
  const filtered = reservations.filter(r => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Upcoming') return r.status === 'Confirmed' || r.status === 'Pending'
    if (activeFilter === 'Past') return r.status === 'Completed'
    return r.status === activeFilter
  })

  // Badge colors
  const badgeStyles = {
    Confirmed: { bg: 'rgba(39,183,183,0.1)', color: '#27B7B7' },
    Pending: { bg: 'rgba(255,127,106,0.1)', color: '#FF7F6A' },
    Completed: { bg: 'rgba(136,136,136,0.1)', color: '#888' },
  }

  const Icon = ({ symbol, color = 'rgba(255,255,255,0.4)', size = 15 }) => (
    <span style={{ color, fontSize: size, lineHeight: 1, flexShrink: 0 }}>{symbol}</span>
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
          {/* Reservations — active */}
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(39,183,183,0.08)', borderLeft: '2px solid #27B7B7' }}>
            <Icon symbol="▦" color="#27B7B7" />
            <span style={{ color: '#27B7B7', fontSize: '13px' }}>Reservations</span>
          </div>
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="○" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Profile</span>
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
            <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>My Reservations</p>
            <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>Manage your upcoming and past bookings</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            style={{
              background: '#12344D',
              color: '#FAF8F3',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
            }}>
            + New Reservation
          </button>
        </div>

        <div style={{ padding: '28px 36px' }}>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '20px',
                  border: '0.5px solid #e0ddd8',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: '600',
                  backgroundColor: activeFilter === f ? '#12344D' : '#fff',
                  color: activeFilter === f ? '#FAF8F3' : '#888',
                  transition: 'all 0.2s',
                }}>
                {f}
              </button>
            ))}
          </div>

          {/* Reservation cards */}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px', color: '#888', fontSize: '14px' }}>
              No reservations found.
            </div>
          )}

          {filtered.map(r => {
            const badge = badgeStyles[r.status]
            const isPast = r.status === 'Completed'
            return (
              <div key={r.id} style={{
                background: '#fff',
                borderRadius: '12px',
                padding: '24px',
                border: '0.5px solid #e0ddd8',
                marginBottom: '14px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                opacity: isPast ? 0.6 : 1,
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                  {/* Date block */}
                  <div style={{ background: '#12344D', borderRadius: '10px', padding: '10px 14px', textAlign: 'center', minWidth: '52px' }}>
                    <p style={{ color: '#27B7B7', fontSize: '22px', fontWeight: '800', lineHeight: 1 }}>{r.day}</p>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px' }}>{r.month}</p>
                  </div>
                  <div>
                    <p style={{ color: '#12344D', fontSize: '14px', fontWeight: '600', marginBottom: '4px' }}>{r.location}</p>
                    <p style={{ color: '#888', fontSize: '12px', marginBottom: '6px' }}>{r.weekday} · {r.time} · {r.guests} guests</p>
                    <span style={{ background: badge.bg, color: badge.color, padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: '600' }}>
                      {r.status}
                    </span>
                  </div>
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  {isPast ? (
                    <button style={{ border: '0.5px solid #e0ddd8', background: 'none', color: '#12344D', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', cursor: 'pointer' }}>
                      Rebook
                    </button>
                  ) : (
                    <>
                      <button style={{ border: '0.5px solid #e0ddd8', background: 'none', color: '#12344D', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', cursor: 'pointer' }}>
                        Edit
                      </button>
                      <button style={{ border: '0.5px solid rgba(255,127,106,0.4)', background: 'none', color: '#FF7F6A', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', cursor: 'pointer' }}>
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Reservations