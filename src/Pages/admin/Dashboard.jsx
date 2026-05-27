import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AdminDashboard() {
  const navigate = useNavigate()

  // Paid status for each order — togglable
  const [paidStatus, setPaidStatus] = useState({ 14: false, 15: true, 16: false })

  // Tables state — can add new ones
  const [tables, setTables] = useState([
    { id: 'T1', status: 'occupied' },
    { id: 'T2', status: 'free' },
    { id: 'T3', status: 'reserved' },
    { id: 'T4', status: 'free' },
    { id: 'T5', status: 'occupied' },
    { id: 'T6', status: 'reserved' },
    { id: 'T7', status: 'free' },
    { id: 'T8', status: 'occupied' },
  ])

  // Add table modal state
  const [showAddTable, setShowAddTable] = useState(false)
  const [newTableId, setNewTableId] = useState('')

  const tableStyles = {
    free: { bg: 'rgba(39,183,183,0.08)', border: 'rgba(39,183,183,0.3)', color: '#27B7B7', label: 'Free' },
    occupied: { bg: 'rgba(255,127,106,0.08)', border: 'rgba(255,127,106,0.3)', color: '#FF7F6A', label: 'Occupied' },
    reserved: { bg: 'rgba(155,89,182,0.08)', border: 'rgba(155,89,182,0.3)', color: '#9B59B6', label: 'Reserved' },
  }

  const reservations = [
    { id: 1, customer: 'Sarah M.', table: 'Table 3', time: '7:00 PM', guests: 2, status: 'Confirmed' },
    { id: 2, customer: 'James K.', table: 'Table 7', time: '8:00 PM', guests: 4, status: 'Pending' },
    { id: 3, customer: 'Meron T.', table: 'Table 1', time: '9:00 PM', guests: 6, status: 'Confirmed' },
  ]

  const orders = [
    { id: 14, table: 'T1', items: 'Doro Wat, Sambusa x2', total: 48, status: 'Pending' },
    { id: 15, table: 'T5', items: 'Tibs Steak, Tej, Avocado Juice', total: 62, status: 'In Progress' },
    { id: 16, table: 'T8', items: 'Shiro, Ethiopian Coffee x3', total: 43, status: 'In Progress' },
  ]

  const handleAddTable = () => {
    if (!newTableId.trim()) return
    setTables(prev => [...prev, { id: newTableId.trim(), status: 'free' }])
    setNewTableId('')
    setShowAddTable(false)
  }

  const Icon = ({ symbol, color = 'rgba(255,255,255,0.4)', size = 15 }) => (
    <span style={{ color, fontSize: size, lineHeight: 1, flexShrink: 0 }}>{symbol}</span>
  )

  // Reusable table header cell
  const TH = ({ children, flex = 1 }) => (
    <p style={{ flex, color: '#888', fontSize: '10px', fontWeight: '600', letterSpacing: '1px' }}>{children}</p>
  )

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── Sidebar ── */}
      <div style={{
        width: '240px',
        background: '#0a1f2e',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
        borderRight: '0.5px solid rgba(255,255,255,0.06)',
        position: 'fixed',
        top: 0, left: 0,
        height: '100vh',
      }}>
        <div style={{ padding: '28px 28px 20px', borderBottom: '0.5px solid rgba(255,255,255,0.06)' }}>
          <img src="/images/logo.png" alt="AQUA" style={{ height: '52px', objectFit: 'contain' }} />
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '10px', letterSpacing: '2px', marginTop: '6px' }}>ADMIN PANEL</p>
        </div>

        <div style={{ padding: '20px 28px', borderBottom: '0.5px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{
            width: '42px', height: '42px', borderRadius: '50%',
            background: 'linear-gradient(135deg,#FF7F6A,#1E81B0)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#fff', fontWeight: '700', fontSize: '15px', flexShrink: 0,
          }}>A</div>
          <div>
            <p style={{ color: '#FAF8F3', fontSize: '13px', fontWeight: '600' }}>Admin</p>
            <p style={{ color: '#FF7F6A', fontSize: '10px', letterSpacing: '1px' }}>SUPER ADMIN</p>
          </div>
        </div>

        <div style={{ padding: '16px 0', flex: 1 }}>
          {/* Dashboard active */}
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(39,183,183,0.08)', borderLeft: '2px solid #27B7B7' }}>
            <Icon symbol="⊞" color="#27B7B7" />
            <span style={{ color: '#27B7B7', fontSize: '13px' }}>Dashboard</span>
          </div>
          <div onClick={() => navigate('/admin/menu')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="▦" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Manage Menu</span>
          </div>
          <div onClick={() => navigate('/admin/orders')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="◈" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Manage Orders</span>
          </div>
          <div onClick={() => navigate('/admin/reservations')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="○" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Reservations</span>
          </div>
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="◎" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Manage Events</span>
          </div>
          <div style={{ margin: '8px 0', borderTop: '0.5px solid rgba(255,255,255,0.06)' }} />
          <div onClick={() => navigate('/')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="◻" />
            <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Back to Site</span>
          </div>
        </div>

        <div style={{ padding: '20px 28px', borderTop: '0.5px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <Icon symbol="←" color="#FF7F6A" />
          <span style={{ color: '#FF7F6A', fontSize: '13px' }}>Logout</span>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div style={{ flex: 1, background: '#FAF8F3', marginLeft: '240px' }}>

        {/* Top bar */}
        <div style={{
          background: '#fff', padding: '20px 36px',
          borderBottom: '0.5px solid #e0ddd8',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          position: 'sticky', top: 0, zIndex: 100,
        }}>
          <div>
            <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>Admin Dashboard</p>
            <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>Live overview of restaurant activity</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{ border: '0.5px solid #e0ddd8', background: 'none', color: '#12344D', padding: '10px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>
              Export Report
            </button>
            <button
              onClick={() => navigate('/admin/menu')}
              style={{ background: '#12344D', color: '#FAF8F3', border: 'none', padding: '10px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>
              + Add Menu Item
            </button>
          </div>
        </div>

        <div style={{ padding: '28px 36px' }}>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '24px' }}>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '0.5px solid #e0ddd8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <p style={{ color: '#888', fontSize: '10px', letterSpacing: '1px' }}>TODAY'S RESERVATIONS</p>
                <Icon symbol="▦" color="#27B7B7" size={14} />
              </div>
              <p style={{ color: '#12344D', fontSize: '26px', fontWeight: '700', marginBottom: '4px' }}>12</p>
              <p style={{ color: '#27B7B7', fontSize: '11px' }}>↑ 3 from yesterday</p>
            </div>
            <div style={{ background: '#12344D', borderRadius: '12px', padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '10px', letterSpacing: '1px' }}>TODAY'S REVENUE</p>
                <Icon symbol="◇" color="#FF7F6A" size={14} />
              </div>
              <p style={{ color: '#FAF8F3', fontSize: '26px', fontWeight: '700', marginBottom: '4px' }}>$1,240</p>
              <p style={{ color: '#FF7F6A', fontSize: '11px' }}>↑ 18% vs last week</p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '0.5px solid #e0ddd8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <p style={{ color: '#888', fontSize: '10px', letterSpacing: '1px' }}>ACTIVE ORDERS</p>
                <Icon symbol="◈" color="#27B7B7" size={14} />
              </div>
              <p style={{ color: '#12344D', fontSize: '26px', fontWeight: '700', marginBottom: '4px' }}>8</p>
              <p style={{ color: '#27B7B7', fontSize: '11px' }}>3 pending · 5 in progress</p>
            </div>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '0.5px solid #e0ddd8' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <p style={{ color: '#888', fontSize: '10px', letterSpacing: '1px' }}>TOTAL CUSTOMERS</p>
                <Icon symbol="○" color="#27B7B7" size={14} />
              </div>
              <p style={{ color: '#12344D', fontSize: '26px', fontWeight: '700', marginBottom: '4px' }}>284</p>
              <p style={{ color: '#27B7B7', fontSize: '11px' }}>↑ 12 new this week</p>
            </div>
          </div>

          {/* Today's Reservations — full width table */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '22px', border: '0.5px solid #e0ddd8', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '3px', height: '18px', background: '#27B7B7', borderRadius: '2px' }} />
                <p style={{ color: '#12344D', fontSize: '14px', fontWeight: '600' }}>Today's Reservations</p>
              </div>
              <span style={{ color: '#1E81B0', fontSize: '11px', cursor: 'pointer' }}>View all</span>
            </div>

            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.5fr 1fr', gap: '16px', padding: '10px 16px', background: '#FAF8F3', borderRadius: '8px', marginBottom: '4px' }}>
              <TH>CUSTOMER</TH>
              <TH>TABLE</TH>
              <TH>TIME</TH>
              <TH>GUESTS</TH>
              <TH>STATUS</TH>
            </div>

            {/* Rows */}
            {reservations.map((r, i) => (
              <div key={r.id} style={{
                display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 0.5fr 1fr',
                gap: '16px', padding: '12px 16px',
                borderBottom: i < reservations.length - 1 ? '0.5px solid #f0eeea' : 'none',
                alignItems: 'center',
              }}>
                <p style={{ color: '#12344D', fontSize: '12px', fontWeight: '600' }}>{r.customer}</p>
                <p style={{ color: '#888', fontSize: '12px' }}>{r.table}</p>
                <p style={{ color: '#888', fontSize: '12px' }}>{r.time}</p>
                <p style={{ color: '#888', fontSize: '12px' }}>{r.guests}</p>
                <span style={{
                  background: r.status === 'Confirmed' ? 'rgba(39,183,183,0.1)' : 'rgba(255,127,106,0.1)',
                  color: r.status === 'Confirmed' ? '#27B7B7' : '#FF7F6A',
                  padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: '600',
                  display: 'inline-block', width: 'fit-content',
                }}>{r.status}</span>
              </div>
            ))}
          </div>

          {/* Table Status — full width */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '22px', border: '0.5px solid #e0ddd8', marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '3px', height: '18px', background: '#27B7B7', borderRadius: '2px' }} />
                <p style={{ color: '#12344D', fontSize: '14px', fontWeight: '600' }}>Table Status — Now</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {/* Legend */}
                {[{ color: '#27B7B7', label: 'Free' }, { color: '#FF7F6A', label: 'Occupied' }, { color: '#9B59B6', label: 'Reserved' }].map(l => (
                  <div key={l.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '2px', background: l.color }} />
                    <span style={{ fontSize: '11px', color: '#888' }}>{l.label}</span>
                  </div>
                ))}
                {/* Add table button */}
                <button
                  onClick={() => setShowAddTable(true)}
                  style={{ background: '#12344D', color: '#FAF8F3', border: 'none', padding: '7px 14px', borderRadius: '7px', fontSize: '11px', fontWeight: '600', cursor: 'pointer' }}>
                  + Add Table
                </button>
              </div>
            </div>

            {/* Table grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '10px' }}>
              {tables.map(t => {
                const s = tableStyles[t.status]
                return (
                  <div key={t.id} style={{
                    background: s.bg, border: `0.5px solid ${s.border}`,
                    borderRadius: '8px', padding: '12px 6px', textAlign: 'center',
                  }}>
                    <p style={{ color: '#12344D', fontSize: '12px', fontWeight: '600', marginBottom: '4px' }}>{t.id}</p>
                    <p style={{ color: s.color, fontSize: '10px' }}>{s.label}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Active Orders — excel style */}
          <div style={{ background: '#fff', borderRadius: '12px', padding: '22px', border: '0.5px solid #e0ddd8' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '3px', height: '18px', background: '#27B7B7', borderRadius: '2px' }} />
                <p style={{ color: '#12344D', fontSize: '14px', fontWeight: '600' }}>Active Orders</p>
              </div>
              <span style={{ color: '#1E81B0', fontSize: '11px', cursor: 'pointer' }} onClick={() => navigate('/admin/orders')}>View all</span>
            </div>

            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '0.5fr 0.5fr 2.5fr 0.7fr 1fr 0.8fr', gap: '16px', padding: '10px 16px', background: '#FAF8F3', borderRadius: '8px', marginBottom: '4px' }}>
              <TH>ORDER#</TH>
              <TH>TABLE</TH>
              <TH>ITEMS</TH>
              <TH>TOTAL</TH>
              <TH>STATUS</TH>
              <TH>PAID</TH>
            </div>

            {/* Rows */}
            {orders.map((o, i) => (
              <div key={o.id} style={{
                display: 'grid', gridTemplateColumns: '0.5fr 0.5fr 2.5fr 0.7fr 1fr 0.8fr',
                gap: '16px', padding: '12px 16px',
                borderBottom: i < orders.length - 1 ? '0.5px solid #f0eeea' : 'none',
                alignItems: 'center',
              }}>
                <p style={{ color: '#12344D', fontSize: '12px', fontWeight: '600' }}>#{o.id}</p>
                <p style={{ color: '#7b7a52', fontSize: '12px' }}>{o.table}</p>
                <p style={{ color: '#888', fontSize: '12px' }}>{o.items}</p>
                <p style={{ color: '#12344D', fontSize: '12px', fontWeight: '700' }}>${o.total}</p>
                <span style={{
                  background: o.status === 'Pending' ? 'rgba(255,127,106,0.1)' : 'rgba(39,183,183,0.1)',
                  color: o.status === 'Pending' ? '#FF7F6A' : '#27B7B7',
                  padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: '600',
                  display: 'inline-block', width: 'fit-content',
                }}>{o.status}</span>

                {/* Paid toggle */}
                <div
                  onClick={() => setPaidStatus(prev => ({ ...prev, [o.id]: !prev[o.id] }))}
                  style={{
                    width: '38px', height: '22px',
                    background: paidStatus[o.id] ? '#27B7B7' : '#e0ddd8',
                    borderRadius: '99px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center',
                    padding: '3px',
                    justifyContent: paidStatus[o.id] ? 'flex-end' : 'flex-start',
                    transition: 'all 0.2s',
                  }}>
                  <div style={{ width: '16px', height: '16px', background: '#fff', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Add Table Modal ── */}
      {showAddTable && (
        <div style={{
          position: 'fixed', inset: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000,
        }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '32px', width: '320px', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
            <p style={{ color: '#12344D', fontSize: '16px', fontWeight: '700', marginBottom: '6px' }}>Add New Table</p>
            <p style={{ color: '#888', fontSize: '12px', marginBottom: '24px' }}>Enter a table ID to add it to the floor plan</p>
            <p style={{ color: '#888', fontSize: '11px', letterSpacing: '1px', marginBottom: '6px' }}>TABLE ID</p>
            <input
              type="text"
              placeholder="e.g. T9"
              value={newTableId}
              onChange={e => setNewTableId(e.target.value)}
              style={{
                width: '100%', padding: '11px 14px',
                border: '0.5px solid #e0ddd8', borderRadius: '8px',
                fontSize: '13px', outline: 'none', boxSizing: 'border-box',
                marginBottom: '20px',
              }}
            />
            <div style={{ display: 'flex', gap: '10px' }}>
              <button
                onClick={() => setShowAddTable(false)}
                style={{ flex: 1, padding: '11px', border: '0.5px solid #e0ddd8', background: 'none', borderRadius: '8px', fontSize: '13px', cursor: 'pointer', color: '#888' }}>
                Cancel
              </button>
              <button
                onClick={handleAddTable}
                style={{ flex: 1, padding: '11px', background: '#12344D', color: '#FAF8F3', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>
                Add Table
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard