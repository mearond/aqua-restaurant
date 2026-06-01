import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// ── Outside component to prevent re-render focus loss ──
const Icon = ({ symbol, color = 'rgba(255,255,255,0.4)', size = 15 }) => (
  <span style={{ color, fontSize: size, lineHeight: 1, flexShrink: 0 }}>{symbol}</span>
)

const InputField = ({ label, type = 'text', placeholder, value, onChange }) => (
  <div style={{ marginBottom: '16px' }}>
    <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px', marginBottom: '6px' }}>{label}</p>
    <input
      type={type} placeholder={placeholder} value={value} onChange={onChange}
      style={{ width: '100%', padding: '11px 14px', border: '0.5px solid #e0ddd8', borderRadius: '8px', fontSize: '13px', color: '#12344D', outline: 'none', boxSizing: 'border-box', background: '#FAF8F3' }}
    />
  </div>
)

function Reservations() {
  const navigate = useNavigate()

  const [activeFilter, setActiveFilter] = useState('All')
  const [showEditModal, setShowEditModal] = useState(false)
  const [editReservation, setEditReservation] = useState(null)

  const [reservations, setReservations] = useState([
    { id: 1, day: '7', month: 'JUN', weekday: 'Saturday', time: '7:00 PM', guests: 2, location: 'Main Dining Hall', status: 'Confirmed' },
    { id: 2, day: '14', month: 'JUN', weekday: 'Friday', time: '8:30 PM', guests: 4, location: 'Terrace Seating', status: 'Pending' },
    { id: 3, day: '2', month: 'MAY', weekday: 'Thursday', time: '7:00 PM', guests: 6, location: 'Private Lounge', status: 'Completed' },
    { id: 4, day: '15', month: 'APR', weekday: 'Monday', time: '6:00 PM', guests: 2, location: 'Main Dining Hall', status: 'Completed' },
  ])

  const filters = ['All', 'Upcoming', 'Confirmed', 'Pending', 'Past']

  const filtered = reservations.filter(r => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Upcoming') return r.status === 'Confirmed' || r.status === 'Pending'
    if (activeFilter === 'Past') return r.status === 'Completed'
    return r.status === activeFilter
  })

  const badgeStyles = {
    Confirmed: { bg: 'rgba(39,183,183,0.1)', color: '#27B7B7' },
    Pending: { bg: 'rgba(255,127,106,0.1)', color: '#FF7F6A' },
    Completed: { bg: 'rgba(136,136,136,0.1)', color: '#888' },
  }

  const handleEditSave = () => {
    if (!editReservation.location || !editReservation.date || !editReservation.table) return
    setReservations(prev => prev.map(r =>
      r.id === editReservation.id ? { ...editReservation, guests: parseInt(editReservation.guests) } : r
    ))
    setShowEditModal(false)
    setEditReservation(null)
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── Sidebar ── */}
      <div style={{
        width: '240px', background: '#0d2a3d',
        display: 'flex', flexDirection: 'column', flexShrink: 0,
        borderRight: '0.5px solid rgba(255,255,255,0.06)',
        position: 'fixed', top: 0, left: 0, height: '100vh',
      }}>
        <div style={{ padding: '28px 28px 20px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
          <img src="/images/logo.png" alt="AQUA" style={{ height: '52px', objectFit: 'contain' }} />
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', letterSpacing: '2px', marginTop: '6px' }}>MEMBER PORTAL</p>
        </div>
        <div style={{ padding: '20px 28px', borderBottom: '0.5px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg,#1E81B0,#27B7B7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '700', fontSize: '15px', flexShrink: 0 }}>M</div>
          <div>
            <p style={{ color: '#FAF8F3', fontSize: '13px', fontWeight: '600' }}>Mary Doe</p>
            <p style={{ color: '#27B7B7', fontSize: '10px', letterSpacing: '1px' }}>GOLD MEMBER</p>
          </div>
        </div>
        <div style={{ padding: '16px 0', flex: 1 }}>
          <div onClick={() => navigate('/dashboard')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="⊞" /><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Dashboard</span>
          </div>
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(39,183,183,0.08)', borderLeft: '2px solid #27B7B7' }}>
            <Icon symbol="▦" color="#27B7B7" /><span style={{ color: '#27B7B7', fontSize: '13px' }}>Reservations</span>
          </div>
          <div onClick={() => navigate('/profile')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="○" /><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Profile</span>
          </div>
          <div style={{ margin: '8px 0', borderTop: '0.5px solid rgba(255,255,255,0.06)' }} />
          <div onClick={() => navigate('/')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="◎" /><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Back to Site</span>
          </div>
        </div>
        <div style={{ padding: '20px 28px', borderTop: '0.5px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <Icon symbol="←" color="#FF7F6A" /><span style={{ color: '#FF7F6A', fontSize: '13px' }}>Logout</span>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ flex: 1, background: '#FAF8F3', marginLeft: '240px' }}>

        {/* Top bar */}
        <div style={{ background: '#fff', padding: '20px 36px', borderBottom: '0.5px solid #e0ddd8', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 100 }}>
          <div>
            <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>My Reservations</p>
            <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>Manage your upcoming and past bookings</p>
          </div>
          <button
            onClick={() => navigate('/contact')}
            style={{ background: '#12344D', color: '#FAF8F3', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>
            + New Reservation
          </button>
        </div>

        <div style={{ padding: '28px 36px' }}>

          {/* Filter tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', flexWrap: 'wrap' }}>
            {filters.map(f => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                padding: '8px 20px', borderRadius: '20px', border: '0.5px solid #e0ddd8',
                cursor: 'pointer', fontSize: '12px', fontWeight: '600',
                backgroundColor: activeFilter === f ? '#12344D' : '#fff',
                color: activeFilter === f ? '#FAF8F3' : '#888',
                transition: 'all 0.2s',
              }}>{f}</button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px', color: '#888', fontSize: '14px' }}>No reservations found.</div>
          )}

          {filtered.map(r => {
            const badge = badgeStyles[r.status]
            const isPast = r.status === 'Completed'
            return (
              <div key={r.id} style={{
                background: '#fff', borderRadius: '12px', padding: '24px',
                border: '0.5px solid #e0ddd8', marginBottom: '14px',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                opacity: isPast ? 0.6 : 1,
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
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
                <div style={{ display: 'flex', gap: '8px' }}>
                  {isPast ? (
                    <button style={{ border: '0.5px solid #e0ddd8', background: 'none', color: '#12344D', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', cursor: 'pointer' }}>Rebook</button>
                  ) : (
                    <>
                      <button
                        onClick={() => { setEditReservation({ ...r }); setShowEditModal(true) }}
                        style={{ border: '0.5px solid #e0ddd8', background: 'none', color: '#12344D', padding: '8px 16px', borderRadius: '8px', fontSize: '12px', cursor: 'pointer' }}>
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

      {/* ── Edit Reservation Modal ── */}
      {showEditModal && editReservation && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', width: '460px', boxShadow: '0 8px 40px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>Edit Reservation</p>
                <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>Update your booking details</p>
              </div>
              <button onClick={() => setShowEditModal(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#888' }}>✕</button>
            </div>

        {/* Location dropdown */}
        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px', marginBottom: '6px' }}>LOCATION</p>
          <select
            value={editReservation.location}
            onChange={e => setEditReservation(p => ({ ...p, location: e.target.value }))}
            style={{ width: '100%', padding: '11px 14px', border: '0.5px solid #e0ddd8', borderRadius: '8px', fontSize: '13px', color: '#12344D', outline: 'none', background: '#FAF8F3', boxSizing: 'border-box' }}>
            <option value="Main Dining Hall">Main Dining Hall</option>
            <option value="Terrace Seating">Terrace Seating</option>
            <option value="Private Lounge">Private Lounge</option>
          </select>
        </div>

        {/* Date picker */}
        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px', marginBottom: '6px' }}>DATE</p>
          <input
            type="date"
            value={editReservation.date || ''}
            onChange={e => setEditReservation(p => ({ ...p, date: e.target.value }))}
            style={{ width: '100%', padding: '11px 14px', border: '0.5px solid #e0ddd8', borderRadius: '8px', fontSize: '13px', color: '#12344D', outline: 'none', background: '#FAF8F3', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {/* Time */}
          <div style={{ marginBottom: '16px' }}>
            <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px', marginBottom: '6px' }}>TIME</p>
            <input
              type="time"
              value={editReservation.time || ''}
              onChange={e => setEditReservation(p => ({ ...p, time: e.target.value }))}
              style={{ width: '100%', padding: '11px 14px', border: '0.5px solid #e0ddd8', borderRadius: '8px', fontSize: '13px', color: '#12344D', outline: 'none', background: '#FAF8F3', boxSizing: 'border-box' }}
            />
          </div>

          {/* Guests */}
          <div style={{ marginBottom: '16px' }}>
            <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px', marginBottom: '6px' }}>GUESTS</p>
            <input
              type="number"
              placeholder="e.g. 2"
              value={editReservation.guests}
              onChange={e => setEditReservation(p => ({ ...p, guests: e.target.value }))}
              style={{ width: '100%', padding: '11px 14px', border: '0.5px solid #e0ddd8', borderRadius: '8px', fontSize: '13px', color: '#12344D', outline: 'none', background: '#FAF8F3', boxSizing: 'border-box' }}
            />
          </div>
        </div>

        {/* Table dropdown — will be filtered by availability once backend is ready */}
        <div style={{ marginBottom: '16px' }}>
          <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px', marginBottom: '6px' }}>TABLE</p>
          <select
            value={editReservation.table || ''}
            onChange={e => setEditReservation(p => ({ ...p, table: e.target.value }))}
            style={{ width: '100%', padding: '11px 14px', border: '0.5px solid #e0ddd8', borderRadius: '8px', fontSize: '13px', color: '#12344D', outline: 'none', background: '#FAF8F3', boxSizing: 'border-box' }}>
            <option value="">Select a table</option>
            <option value="Table 1">Table 1</option>
            <option value="Table 2">Table 2</option>
            <option value="Table 3">Table 3</option>
            <option value="Table 4">Table 4</option>
            <option value="Table 5">Table 5</option>
            <option value="Table 6">Table 6</option>
            <option value="Table 7">Table 7</option>
            <option value="Table 8">Table 8</option>
          </select>
        </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
              <button onClick={() => setShowEditModal(false)} style={{ flex: 1, padding: '12px', border: '0.5px solid #e0ddd8', background: 'none', borderRadius: '8px', fontSize: '13px', cursor: 'pointer', color: '#888' }}>Cancel</button>
              <button onClick={handleEditSave} style={{ flex: 1, padding: '12px', background: '#12344D', color: '#FAF8F3', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Save Changes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Reservations