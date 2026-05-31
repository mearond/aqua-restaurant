import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ManageReservations() {
  const navigate = useNavigate()

  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [showNewModal, setShowNewModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [editReservation, setEditReservation] = useState(null)

  const [newReservation, setNewReservation] = useState({
    customer: '', email: '', date: '', time: '', guests: '', table: '',
  })

  const [reservations, setReservations] = useState([
    { id: 1, customer: 'Sarah M.', email: 'sarah@email.com', date: 'Jun 7', time: '7:00 PM', guests: 2, table: 'Table 3', status: 'Pending', source: 'Customer' },
    { id: 2, customer: 'James K.', email: 'james@email.com', date: 'Jun 7', time: '8:00 PM', guests: 4, table: 'Table 7', status: 'Confirmed', source: 'Customer' },
    { id: 3, customer: 'Meron T.', email: 'meron@email.com', date: 'Jun 7', time: '9:00 PM', guests: 6, table: 'Table 1', status: 'Confirmed', source: 'Admin' },
    { id: 4, customer: 'Abel G.', email: 'abel@email.com', date: 'Jun 7', time: '6:00 PM', guests: 3, table: 'Table 5', status: 'Cancelled', source: 'Customer' },
    { id: 5, customer: 'Liya B.', email: 'liya@email.com', date: 'Jun 8', time: '7:30 PM', guests: 2, table: 'Table 2', status: 'Pending', source: 'Admin' },
  ])

  const confirmReservation = (id) => {
    setReservations(prev => prev.map(r => r.id === id ? { ...r, status: 'Confirmed' } : r))
  }

  const cancelReservation = (id) => {
    setReservations(prev => prev.map(r => r.id === id ? { ...r, status: 'Cancelled' } : r))
  }

  const handleNewReservation = () => {
    if (!newReservation.customer || !newReservation.date || !newReservation.time || !newReservation.table) return
    const id = Math.max(...reservations.map(r => r.id)) + 1
    setReservations(prev => [...prev, {
      ...newReservation,
      id,
      guests: parseInt(newReservation.guests) || 1,
      status: 'Confirmed',
      source: 'Admin',
    }])
    setNewReservation({ customer: '', email: '', date: '', time: '', guests: '', table: '' })
    setShowNewModal(false)
  }

  const handleEditReservation = () => {
    if (!editReservation.customer || !editReservation.date || !editReservation.time || !editReservation.table) return
    setReservations(prev => prev.map(r =>
      r.id === editReservation.id ? { ...editReservation, guests: parseInt(editReservation.guests) || 1 } : r
    ))
    setShowEditModal(false)
    setEditReservation(null)
  }

  const filtered = reservations.filter(r => {
    const matchesFilter = activeFilter === 'All' || r.status === activeFilter
    const matchesSearch =
      r.customer.toLowerCase().includes(search.toLowerCase()) ||
      r.table.toLowerCase().includes(search.toLowerCase()) ||
      r.email.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const statusColors = {
    'Pending': { bg: 'rgba(255,127,106,0.1)', color: '#FF7F6A' },
    'Confirmed': { bg: 'rgba(39,183,183,0.1)', color: '#27B7B7' },
    'Cancelled': { bg: 'rgba(136,136,136,0.1)', color: '#888' },
  }

  const sourceColors = {
    'Customer': { bg: 'rgba(30,129,176,0.1)', color: '#1E81B0' },
    'Admin': { bg: 'rgba(155,89,182,0.1)', color: '#9B59B6' },
  }

  const Icon = ({ symbol, color = 'rgba(255,255,255,0.4)', size = 15 }) => (
    <span style={{ color, fontSize: size, lineHeight: 1, flexShrink: 0 }}>{symbol}</span>
  )

  const InputField = ({ label, type = 'text', placeholder, value, onChange }) => (
    <div style={{ marginBottom: '16px' }}>
      <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px', marginBottom: '6px' }}>{label}</p>
      <input
        type={type} placeholder={placeholder} value={value} onChange={onChange}
        style={{ width: '100%', padding: '11px 14px', border: '0.5px solid #e0ddd8', borderRadius: '8px', fontSize: '13px', color: '#12344D', outline: 'none', boxSizing: 'border-box', background: '#FAF8F3' }}
        onFocus={e => e.target.style.borderColor = '#27B7B7'}
        onBlur={e => e.target.style.borderColor = '#e0ddd8'}
      />
    </div>
  )

  const ModalBody = ({ title, subtitle, data, setData, onSubmit, onClose, btnLabel }) => (
    <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', width: '480px', boxShadow: '0 8px 40px rgba(0,0,0,0.2)', maxHeight: '90vh', overflowY: 'auto' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>{title}</p>
          <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>{subtitle}</p>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#888' }}>✕</button>
      </div>
      <InputField label="CUSTOMER NAME" placeholder="e.g. John Doe" value={data.customer} onChange={e => setData(p => ({ ...p, customer: e.target.value }))} />
      <InputField label="EMAIL" type="email" placeholder="e.g. john@email.com" value={data.email} onChange={e => setData(p => ({ ...p, email: e.target.value }))} />
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <InputField label="DATE" type="date" placeholder="" value={data.date} onChange={e => setData(p => ({ ...p, date: e.target.value }))} />
        <InputField label="TIME" type="time" placeholder="" value={data.time} onChange={e => setData(p => ({ ...p, time: e.target.value }))} />
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <InputField label="NUMBER OF GUESTS" type="number" placeholder="e.g. 2" value={data.guests} onChange={e => setData(p => ({ ...p, guests: e.target.value }))} />
        <InputField label="TABLE" placeholder="e.g. Table 3" value={data.table} onChange={e => setData(p => ({ ...p, table: e.target.value }))} />
      </div>
      <div style={{ display: 'flex', gap: '10px', marginTop: '8px' }}>
        <button onClick={onClose} style={{ flex: 1, padding: '12px', border: '0.5px solid #e0ddd8', background: 'none', borderRadius: '8px', fontSize: '13px', cursor: 'pointer', color: '#888' }}>Cancel</button>
        <button onClick={onSubmit} style={{ flex: 1, padding: '12px', background: '#12344D', color: '#FAF8F3', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>{btnLabel}</button>
      </div>
    </div>
  )

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── Sidebar ── */}
      <div style={{
        width: '240px', background: '#0a1f2e',
        display: 'flex', flexDirection: 'column', flexShrink: 0,
        borderRight: '0.5px solid rgba(255,255,255,0.06)',
        position: 'fixed', top: 0, left: 0, height: '100vh',
      }}>
        <div style={{ padding: '28px 28px 20px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
          <img src="/images/logo.png" alt="AQUA" style={{ height: '52px', objectFit: 'contain' }} />
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', letterSpacing: '2px', marginTop: '6px' }}>ADMIN PANEL</p>
        </div>
        <div style={{ padding: '20px 28px', borderBottom: '0.5px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'linear-gradient(135deg,#FF7F6A,#1E81B0)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: '700', fontSize: '15px', flexShrink: 0 }}>A</div>
          <div>
            <p style={{ color: '#FAF8F3', fontSize: '13px', fontWeight: '600' }}>Admin</p>
            <p style={{ color: '#FF7F6A', fontSize: '10px', letterSpacing: '1px' }}>SUPER ADMIN</p>
          </div>
        </div>
        <div style={{ padding: '16px 0', flex: 1 }}>
          <div onClick={() => navigate('/admin')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="⊞" /><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Dashboard</span>
          </div>
          <div onClick={() => navigate('/admin/menu')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="▦" /><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Manage Menu</span>
          </div>
          <div onClick={() => navigate('/admin/orders')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="◈" /><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Manage Orders</span>
          </div>
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(39,183,183,0.08)', borderLeft: '2px solid #27B7B7' }}>
            <Icon symbol="○" color="#27B7B7" /><span style={{ color: '#27B7B7', fontSize: '13px' }}>Reservations</span>
          </div>
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="◎" /><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Manage Events</span>
          </div>
          <div style={{ margin: '8px 0', borderTop: '0.5px solid rgba(255,255,255,0.06)' }} />
          <div onClick={() => navigate('/')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="◻" /><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Back to Site</span>
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
            <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>Manage Reservations</p>
            <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>View, confirm and manage all reservations</p>
          </div>
          <button
            onClick={() => setShowNewModal(true)}
            style={{ background: '#FF7F6A', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>
            + New Reservation
          </button>
        </div>

        <div style={{ padding: '28px 36px' }}>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '24px' }}>
            {[
              { label: 'TOTAL TODAY', value: reservations.length, icon: '▦', iconColor: '#27B7B7', dark: false, sub: '↑ 3 from yesterday', subColor: '#27B7B7' },
              { label: 'CONFIRMED', value: reservations.filter(r => r.status === 'Confirmed').length, icon: '◉', iconColor: '#27B7B7', dark: true, sub: 'Ready to seat', subColor: '#27B7B7' },
              { label: 'PENDING', value: reservations.filter(r => r.status === 'Pending').length, icon: '◌', iconColor: '#FF7F6A', dark: false, sub: 'Awaiting confirmation', subColor: '#FF7F6A' },
              { label: 'CANCELLED', value: reservations.filter(r => r.status === 'Cancelled').length, icon: '✕', iconColor: '#888', dark: false, sub: 'Today', subColor: '#888' },
            ].map(stat => (
              <div key={stat.label} style={{ background: stat.dark ? '#12344D' : '#fff', borderRadius: '12px', padding: '20px', border: stat.dark ? 'none' : '0.5px solid #e0ddd8' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <p style={{ color: stat.dark ? 'rgba(255,255,255,0.5)' : '#888', fontSize: '10px', letterSpacing: '1px' }}>{stat.label}</p>
                  <span style={{ color: stat.iconColor, fontSize: '14px' }}>{stat.icon}</span>
                </div>
                <p style={{ color: stat.dark ? '#FAF8F3' : '#12344D', fontSize: '26px', fontWeight: '700', marginBottom: '4px' }}>{stat.value}</p>
                <p style={{ color: stat.subColor, fontSize: '11px' }}>{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Search + filters */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px', background: '#fff', border: '0.5px solid #e0ddd8', borderRadius: '8px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#888' }}>⊙</span>
              <input
                type="text" placeholder="Search by name or table..."
                value={search} onChange={e => setSearch(e.target.value)}
                style={{ border: 'none', outline: 'none', fontSize: '13px', color: '#12344D', width: '100%', background: 'transparent' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['All', 'Pending', 'Confirmed', 'Cancelled'].map(f => (
                <button key={f} onClick={() => setActiveFilter(f)} style={{
                  padding: '9px 18px', borderRadius: '20px', border: '0.5px solid #e0ddd8',
                  cursor: 'pointer', fontSize: '12px', fontWeight: '600',
                  background: activeFilter === f ? '#12344D' : '#fff',
                  color: activeFilter === f ? '#FAF8F3' : '#888',
                  transition: 'all 0.2s',
                }}>{f}</button>
              ))}
            </div>
          </div>

          {/* Reservations table */}
          <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid #e0ddd8', overflow: 'hidden' }}>

            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 0.7fr 0.7fr 0.4fr 0.8fr 0.7fr 0.8fr 1.1fr', gap: '12px', padding: '12px 20px', background: '#FAF8F3', borderBottom: '0.5px solid #e0ddd8', alignItems: 'center' }}>
              {['CUSTOMER', 'DATE', 'TIME', 'GUESTS', 'TABLE', 'SOURCE', 'STATUS', 'ACTIONS'].map(h => (
                <p key={h} style={{ color: '#888', fontSize: '10px', fontWeight: '600', letterSpacing: '1px' }}>{h}</p>
              ))}
            </div>

            {/* Rows */}
            {filtered.map((r, i) => {
              const sc = statusColors[r.status]
              const src = sourceColors[r.source]
              const isCancelled = r.status === 'Cancelled'
              return (
                <div key={r.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '1.5fr 0.7fr 0.7fr 0.4fr 0.8fr 0.7fr 0.8fr 1.1fr',
                  gap: '12px', padding: '14px 20px',
                  borderBottom: i < filtered.length - 1 ? '0.5px solid #f5f3f0' : 'none',
                  alignItems: 'center',
                  opacity: isCancelled ? 0.5 : 1,
                }}>
                  <div>
                    <p style={{ color: '#12344D', fontSize: '12px', fontWeight: '600', marginBottom: '2px' }}>{r.customer}</p>
                    <p style={{ color: '#888', fontSize: '11px' }}>{r.email}</p>
                  </div>
                  <p style={{ color: '#888', fontSize: '12px' }}>{r.date}</p>
                  <p style={{ color: '#888', fontSize: '12px' }}>{r.time}</p>
                  <p style={{ color: '#888', fontSize: '12px' }}>{r.guests}</p>
                  <p style={{ color: '#12344D', fontSize: '12px', fontWeight: '600' }}>{r.table}</p>

                  {/* Source badge */}
                  <span style={{ background: src.bg, color: src.color, padding: '3px 8px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', display: 'inline-block', width: 'fit-content' }}>
                    {r.source}
                  </span>

                  {/* Status badge */}
                  <span style={{ background: sc.bg, color: sc.color, padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: '600', display: 'inline-block', width: 'fit-content' }}>
                    {r.status}
                  </span>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {isCancelled ? (
                      <button style={{ border: '0.5px solid #e0ddd8', background: 'none', color: '#888', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>View</button>
                    ) : r.status === 'Pending' ? (
                      <>
                        <button onClick={() => confirmReservation(r.id)} style={{ background: '#27B7B7', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer', fontWeight: '500' }}>Confirm</button>
                        <button onClick={() => cancelReservation(r.id)} style={{ border: '0.5px solid rgba(255,127,106,0.4)', background: 'none', color: '#FF7F6A', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <button onClick={() => { setEditReservation({ ...r }); setShowEditModal(true) }} style={{ border: '0.5px solid #e0ddd8', background: 'none', color: '#12344D', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer', fontWeight: '500' }}>Edit</button>
                        <button onClick={() => cancelReservation(r.id)} style={{ border: '0.5px solid rgba(255,127,106,0.4)', background: 'none', color: '#FF7F6A', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>Cancel</button>
                      </>
                    )}
                  </div>
                </div>
              )
            })}

            {filtered.length === 0 && (
              <div style={{ padding: '60px', textAlign: 'center', color: '#888', fontSize: '14px' }}>No reservations found.</div>
            )}
          </div>
        </div>
      </div>

      {/* ── New Reservation Modal ── */}
      {showNewModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <ModalBody
            title="New Reservation"
            subtitle="Create a reservation on behalf of a customer"
            data={newReservation}
            setData={setNewReservation}
            onSubmit={handleNewReservation}
            onClose={() => setShowNewModal(false)}
            btnLabel="Create Reservation"
          />
        </div>
      )}

      {/* ── Edit Reservation Modal ── */}
      {showEditModal && editReservation && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <ModalBody
            title={`Edit Reservation #${editReservation.id}`}
            subtitle={`Updating booking for ${editReservation.customer}`}
            data={editReservation}
            setData={setEditReservation}
            onSubmit={handleEditReservation}
            onClose={() => { setShowEditModal(false); setEditReservation(null) }}
            btnLabel="Save Changes"
          />
        </div>
      )}
    </div>
  )
}

export default ManageReservations