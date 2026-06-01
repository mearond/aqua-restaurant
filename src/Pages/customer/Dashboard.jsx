import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  const reservations = [
    { id: 1, day: '7', month: 'JUN', time: '7:00 PM', guests: 2, location: 'Main Dining Hall', status: 'Confirmed' },
    { id: 2, day: '14', month: 'JUN', time: '8:30 PM', guests: 4, location: 'Terrace Seating', status: 'Pending' },
  ]

  const events = [
    { id: 1, day: '10', month: 'JUN', name: 'Live Jazz Night', time: '7:00 PM', location: 'Main Dining Hall', status: 'Limited seats', color: '#1E81B0', bg: 'rgba(30,129,176,0.1)' },
    { id: 2, day: '20', month: 'JUN', name: 'Ethiopian Cultural Evening', time: '6:30 PM', location: 'Full Restaurant', status: 'Fully booked', color: '#FF7F6A', bg: 'rgba(255,127,106,0.1)' },
    { id: 3, day: '28', month: 'JUN', name: 'Wine Tasting Night', time: '8:00 PM', location: 'Private Lounge', status: 'Open', color: '#27B7B7', bg: 'rgba(39,183,183,0.1)' },
  ]

  const tables = [
    { id: 'T1', status: 'available' },
    { id: 'T2', status: 'reserved' },
    { id: 'T3', status: 'available' },
    { id: 'T4', status: 'event' },
    { id: 'T5', status: 'reserved' },
    { id: 'T6', status: 'available' },
    { id: 'T7', status: 'available' },
    { id: 'T8', status: 'event' },
  ]

  const tableStyles = {
    available: { bg: 'rgba(39,183,183,0.08)', border: 'rgba(39,183,183,0.3)', color: '#27B7B7', label: 'Free' },
    reserved: { bg: 'rgba(255,127,106,0.08)', border: 'rgba(255,127,106,0.3)', color: '#FF7F6A', label: 'Taken' },
    event: { bg: 'rgba(30,129,176,0.08)', border: 'rgba(30,129,176,0.3)', color: '#1E81B0', label: 'Event' },
  }

  // Simple white icon component using unicode — no color clashes
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
          <img src="/images/logo.png" alt="AQUA" style={{ height: '65px', objectFit: 'contain' }} />
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

          {/* Dashboard — active */}
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(39,183,183,0.08)', borderLeft: '2px solid #27B7B7' }}>
            <Icon symbol="⊞" color="#27B7B7" />
            <span style={{ color: '#27B7B7', fontSize: '13px' }}>Dashboard</span>
          </div>

          {/* Reservations */}
          <div onClick={() => navigate('/reservations')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="▦" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Reservations</span>
          </div>

          {/* Profile */}
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="○" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Profile</span>
          </div>

          <div style={{ margin: '8px 0', borderTop: '0.5px solid rgba(255,255,255,0.06)' }} />

          {/* Back to Site */}
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
            <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>Welcome back, Mary</p>
            <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>Here's everything happening at AQUA</p>
          </div>
          <button
            onClick={() => navigate('/reservations')}
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
            View Reservations
          </button>
        </div>

        <div style={{ padding: '28px 36px' }}>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>

            {/* Card 1 */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '22px', border: '0.5px solid #e0ddd8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px' }}>RESERVATIONS</p>
                <span style={{ color: '#27B7B7', fontSize: '20px', lineHeight: 1 }}>▦</span>
              </div>
              <p style={{ color: '#12344D', fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>4</p>
              <p style={{ color: '#27B7B7', fontSize: '11px' }}>2 upcoming</p>
            </div>

            {/* Card 2 — dark */}
            <div style={{ background: '#12344D', borderRadius: '12px', padding: '22px', border: '0.5px solid rgba(255,255,255,0.08)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '11px', letterSpacing: '1px' }}>LOYALTY POINTS</p>
                <span style={{ color: '#FF7F6A', fontSize: '20px', lineHeight: 1 }}>◇</span>
              </div>
              <p style={{ color: '#FAF8F3', fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>320</p>
              <p style={{ color: '#FF7F6A', fontSize: '11px' }}>Redeem for discounts</p>
            </div>

            {/* Card 3 */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '22px', border: '0.5px solid #e0ddd8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px' }}>MEMBER SINCE</p>
                <span style={{ color: '#27B7B7', fontSize: '20px', lineHeight: 1 }}>◈</span>
              </div>
              <p style={{ color: '#12344D', fontSize: '28px', fontWeight: '700', marginBottom: '4px' }}>2023</p>
              <p style={{ color: '#27B7B7', fontSize: '11px' }}>Gold status</p>
            </div>
          </div>

          {/* Reservations + Events */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>

            {/* Upcoming Reservations */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '22px', border: '0.5px solid #e0ddd8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <p style={{ color: '#12344D', fontSize: '14px', fontWeight: '600' }}>Upcoming Reservations</p>
                <span style={{ color: '#1E81B0', fontSize: '11px', cursor: 'pointer' }} onClick={() => navigate('/reservations')}>View all</span>
              </div>
              {reservations.map((r, i) => (
                <div key={r.id} style={{
                  padding: '14px 0',
                  borderBottom: i < reservations.length - 1 ? '0.5px solid #f0eeea' : 'none',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ background: '#12344D', borderRadius: '8px', padding: '6px 10px', textAlign: 'center', minWidth: '40px' }}>
                      <p style={{ color: '#27B7B7', fontSize: '15px', fontWeight: '700', lineHeight: 1 }}>{r.day}</p>
                      <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px' }}>{r.month}</p>
                    </div>
                    <div>
                      <p style={{ color: '#12344D', fontSize: '12px', fontWeight: '600' }}>{r.time} · {r.guests} guests</p>
                      <p style={{ color: '#888', fontSize: '11px' }}>{r.location}</p>
                    </div>
                  </div>
                  <span style={{
                    background: r.status === 'Confirmed' ? 'rgba(39,183,183,0.1)' : 'rgba(255,127,106,0.1)',
                    color: r.status === 'Confirmed' ? '#27B7B7' : '#FF7F6A',
                    padding: '3px 10px',
                    borderRadius: '20px',
                    fontSize: '10px',
                    fontWeight: '600',
                  }}>{r.status}</span>
                </div>
              ))}
            </div>

            {/* Upcoming Events */}
            <div style={{ background: '#fff', borderRadius: '12px', padding: '22px', border: '0.5px solid #e0ddd8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <p style={{ color: '#12344D', fontSize: '14px', fontWeight: '600' }}>Upcoming Events</p>
                <span style={{ color: '#1E81B0', fontSize: '11px', cursor: 'pointer' }}>View all</span>
              </div>
              {events.map((e, i) => (
                <div key={e.id} style={{
                  padding: '14px 0',
                  borderBottom: i < events.length - 1 ? '0.5px solid #f0eeea' : 'none',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                }}>
                  <div style={{ background: '#12344D', borderRadius: '8px', padding: '6px 10px', textAlign: 'center', minWidth: '40px', flexShrink: 0 }}>
                    <p style={{ color: '#27B7B7', fontSize: '15px', fontWeight: '700', lineHeight: 1 }}>{e.day}</p>
                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '9px' }}>{e.month}</p>
                  </div>
                  <div>
                    <p style={{ color: '#12344D', fontSize: '12px', fontWeight: '600' }}>{e.name}</p>
                    <p style={{ color: '#888', fontSize: '11px', marginBottom: '4px' }}>{e.time} · {e.location}</p>
                    <span style={{ background: e.bg, color: e.color, padding: '2px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600' }}>{e.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Table Availability */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '22px', border: '0.5px solid #e0ddd8' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <p style={{ color: '#12344D', fontSize: '14px', fontWeight: '600' }}>Table Availability — Today</p>
              <div style={{ display: 'flex', gap: '16px' }}>
                {[{ color: '#27B7B7', label: 'Available' }, { color: '#FF7F6A', label: 'Reserved' }, { color: '#1E81B0', label: 'Event' }].map(l => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: l.color }} />
                    <span style={{ fontSize: '11px', color: '#888' }}>{l.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '8px' }}>
              {tables.map(t => {
                const s = tableStyles[t.status]
                return (
                  <div key={t.id} style={{
                    background: s.bg,
                    border: `0.5px solid ${s.border}`,
                    borderRadius: '8px',
                    padding: '10px 6px',
                    textAlign: 'center',
                  }}>
                    <p style={{ color: '#12344D', fontSize: '11px', fontWeight: '600' }}>{t.id}</p>
                    <p style={{ color: s.color, fontSize: '10px' }}>{s.label}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard