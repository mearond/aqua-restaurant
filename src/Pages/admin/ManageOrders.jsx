import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// ── Defined OUTSIDE the component so React doesn't recreate them on every render ──

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

// ── Main component ──
function ManageOrders() {
  const navigate = useNavigate()

  const [activeFilter, setActiveFilter] = useState('All')
  const [search, setSearch] = useState('')
  const [showNewOrderModal, setShowNewOrderModal] = useState(false)
  const [newOrder, setNewOrder] = useState({ table: '', items: '', total: '' })
  const [showEditOrderModal, setShowEditOrderModal] = useState(false)
  const [editOrder, setEditOrder] = useState(null)
  const [confirmPaid, setConfirmPaid] = useState(null)

  const [orders, setOrders] = useState([
    { id: 14, table: 'T1', items: 'Doro Wat, Sambusa x2', total: 48, status: 'Pending', paid: false },
    { id: 15, table: 'T5', items: 'Tibs Steak, Tej, Avocado Juice', total: 62, status: 'In Progress', paid: true },
    { id: 13, table: 'T3', items: 'Shiro, Ethiopian Coffee x2, Tej', total: 38, status: 'Completed', paid: true },
    { id: 16, table: 'T8', items: 'Sambusa, Azifa Salad, Avocado Juice', total: 26, status: 'Pending', paid: false },
    { id: 17, table: 'T2', items: 'Doro Wat, Honey Cake, Tej x2', total: 52, status: 'In Progress', paid: false },
    { id: 12, table: 'T6', items: 'Grilled Tibs Steak, Avocado Juice', total: 44, status: 'Completed', paid: true },
  ])

  const togglePaid = (id) => {
    setOrders(prev => prev.map(o => o.id === id ? { ...o, paid: !o.paid } : o))
  }

  const progressOrder = (id) => {
    setOrders(prev => prev.map(o => {
      if (o.id !== id) return o
      if (o.status === 'Pending') return { ...o, status: 'In Progress' }
      if (o.status === 'In Progress') return { ...o, status: 'Completed' }
      return o
    }))
  }

  const cancelOrder = (id) => {
    setOrders(prev => prev.filter(o => o.id !== id))
  }

  const handleNewOrder = () => {
    if (!newOrder.table || !newOrder.items || !newOrder.total) return
    const id = Math.max(...orders.map(o => o.id)) + 1
    setOrders(prev => [...prev, {
      id,
      table: newOrder.table,
      items: newOrder.items,
      total: parseFloat(newOrder.total),
      status: 'Pending',
      paid: false,
    }])
    setNewOrder({ table: '', items: '', total: '' })
    setShowNewOrderModal(false)
  }

  const handleEditOrder = () => {
    if (!editOrder.items || !editOrder.total) return
    setOrders(prev => prev.map(o =>
      o.id === editOrder.id ? { ...editOrder, total: parseFloat(editOrder.total) } : o
    ))
    setShowEditOrderModal(false)
    setEditOrder(null)
  }

  const filtered = orders.filter(o => {
    const matchesFilter = activeFilter === 'All' || o.status === activeFilter
    const matchesSearch =
      o.table.toLowerCase().includes(search.toLowerCase()) ||
      String(o.id).includes(search) ||
      o.items.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const statusColors = {
    'Pending': { bg: 'rgba(255,127,106,0.1)', color: '#FF7F6A' },
    'In Progress': { bg: 'rgba(39,183,183,0.1)', color: '#27B7B7' },
    'Completed': { bg: 'rgba(136,136,136,0.1)', color: '#888' },
  }

  const confirmOrder = orders.find(o => o.id === confirmPaid)

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
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(39,183,183,0.08)', borderLeft: '2px solid #27B7B7' }}>
            <Icon symbol="◈" color="#27B7B7" /><span style={{ color: '#27B7B7', fontSize: '13px' }}>Manage Orders</span>
          </div>
          <div onClick={() => navigate('/admin/reservations')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="○" /><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Reservations</span>
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
            <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>Manage Orders</p>
            <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>Track and manage all active and past orders</p>
          </div>
          <button onClick={() => setShowNewOrderModal(true)} style={{ background: '#FF7F6A', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>
            + New Order
          </button>
        </div>

        <div style={{ padding: '28px 36px' }}>

          {/* Stat cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '24px' }}>
            {[
              { label: 'TOTAL ORDERS TODAY', value: orders.length, icon: '◈', iconColor: '#27B7B7', dark: false, sub: '↑ 6 from yesterday', subColor: '#27B7B7' },
              { label: 'REVENUE TODAY', value: '$' + orders.reduce((acc, o) => acc + o.total, 0), icon: '◇', iconColor: '#FF7F6A', dark: true, sub: '↑ 18% vs last week', subColor: '#FF7F6A' },
              { label: 'PENDING', value: orders.filter(o => o.status === 'Pending').length, icon: '◌', iconColor: '#FF7F6A', dark: false, sub: 'Awaiting kitchen', subColor: '#FF7F6A' },
              { label: 'COMPLETED', value: orders.filter(o => o.status === 'Completed').length, icon: '◉', iconColor: '#27B7B7', dark: false, sub: 'Served today', subColor: '#27B7B7' },
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
                type="text" placeholder="Search by table or order number..."
                value={search} onChange={e => setSearch(e.target.value)}
                style={{ border: 'none', outline: 'none', fontSize: '13px', color: '#12344D', width: '100%', background: 'transparent' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['All', 'Pending', 'In Progress', 'Completed'].map(f => (
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

          {/* Orders table */}
          <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid #e0ddd8', overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '0.5fr 0.5fr 2fr 0.7fr 1fr 0.7fr 1.3fr', gap: '16px', padding: '12px 20px', background: '#FAF8F3', borderBottom: '0.5px solid #e0ddd8', alignItems: 'center' }}>
              {['ORDER#', 'TABLE', 'ITEMS', 'TOTAL', 'STATUS', 'PAID', 'ACTIONS'].map(h => (
                <p key={h} style={{ color: '#888', fontSize: '10px', fontWeight: '600', letterSpacing: '1px' }}>{h}</p>
              ))}
            </div>

            {filtered.map((o, i) => {
              const sc = statusColors[o.status]
              const isCompleted = o.status === 'Completed'
              return (
                <div key={o.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '0.5fr 0.5fr 2fr 0.7fr 1fr 0.7fr 1.3fr',
                  gap: '16px', padding: '14px 20px',
                  borderBottom: i < filtered.length - 1 ? '0.5px solid #f5f3f0' : 'none',
                  alignItems: 'center',
                  opacity: isCompleted ? 0.55 : 1,
                }}>
                  <p style={{ color: '#12344D', fontSize: '12px', fontWeight: '600' }}>#{o.id}</p>
                  <p style={{ color: '#888', fontSize: '12px' }}>{o.table}</p>
                  <p style={{ color: '#888', fontSize: '12px' }}>{o.items}</p>
                  <p style={{ color: '#12344D', fontSize: '12px', fontWeight: '700' }}>${o.total}</p>
                  <span style={{ background: sc.bg, color: sc.color, padding: '3px 10px', borderRadius: '20px', fontSize: '10px', fontWeight: '600', display: 'inline-block', width: 'fit-content' }}>
                    {o.status}
                  </span>
                  <span
                    onClick={() => setConfirmPaid(o.id)}
                    style={{
                      background: o.paid ? 'rgba(39,183,183,0.1)' : 'rgba(136,136,136,0.1)',
                      color: o.paid ? '#27B7B7' : '#888',
                      padding: '4px 10px', borderRadius: '20px', fontSize: '10px',
                      fontWeight: '600', cursor: 'pointer', display: 'inline-block',
                    }}>
                    {o.paid ? 'Paid ✓' : 'Unpaid'}
                  </span>
                  <div style={{ display: 'flex', gap: '6px' }}>
                    {isCompleted ? (
                      <button style={{ border: '0.5px solid #e0ddd8', background: 'none', color: '#888', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>View</button>
                    ) : (
                      <>
                        <button onClick={() => { setEditOrder({ ...o }); setShowEditOrderModal(true) }} style={{ border: '0.5px solid #e0ddd8', background: 'none', color: '#12344D', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer', fontWeight: '500' }}>Edit</button>
                        <button onClick={() => progressOrder(o.id)} style={{ background: o.status === 'Pending' ? '#1E81B0' : '#27B7B7', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer', fontWeight: '500' }}>
                          {o.status === 'Pending' ? 'Progress' : 'Complete'}
                        </button>
                        <button onClick={() => cancelOrder(o.id)} style={{ border: '0.5px solid rgba(255,127,106,0.4)', background: 'none', color: '#FF7F6A', padding: '5px 10px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer' }}>Cancel</button>
                      </>
                    )}
                  </div>
                </div>
              )
            })}

            {filtered.length === 0 && (
              <div style={{ padding: '60px', textAlign: 'center', color: '#888', fontSize: '14px' }}>No orders found.</div>
            )}
          </div>
        </div>
      </div>

      {/* ── New Order Modal ── */}
      {showNewOrderModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', width: '440px', boxShadow: '0 8px 40px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>New Order</p>
                <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>Create a new order for a table</p>
              </div>
              <button onClick={() => setShowNewOrderModal(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#888' }}>✕</button>
            </div>
            <InputField label="TABLE" placeholder="e.g. T3" value={newOrder.table} onChange={e => setNewOrder(p => ({ ...p, table: e.target.value }))} />
            <InputField label="ITEMS" placeholder="e.g. Doro Wat, Sambusa x2" value={newOrder.items} onChange={e => setNewOrder(p => ({ ...p, items: e.target.value }))} />
            <InputField label="TOTAL ($)" type="number" placeholder="e.g. 48" value={newOrder.total} onChange={e => setNewOrder(p => ({ ...p, total: e.target.value }))} />
            <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
              <button onClick={() => setShowNewOrderModal(false)} style={{ flex: 1, padding: '12px', border: '0.5px solid #e0ddd8', background: 'none', borderRadius: '8px', fontSize: '13px', cursor: 'pointer', color: '#888' }}>Cancel</button>
              <button onClick={handleNewOrder} style={{ flex: 1, padding: '12px', background: '#12344D', color: '#FAF8F3', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Create Order</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Edit Order Modal ── */}
      {showEditOrderModal && editOrder && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#fff', borderRadius: '16px', padding: '36px', width: '440px', boxShadow: '0 8px 40px rgba(0,0,0,0.2)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div>
                <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>Edit Order #{editOrder.id}</p>
                <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>Update items or total for {editOrder.table}</p>
              </div>
              <button onClick={() => setShowEditOrderModal(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#888' }}>✕</button>
            </div>
            <InputField label="ITEMS" placeholder="e.g. Doro Wat, Sambusa x2" value={editOrder.items} onChange={e => setEditOrder(p => ({ ...p, items: e.target.value }))} />
            <InputField label="TOTAL ($)" type="number" placeholder="e.g. 48" value={editOrder.total} onChange={e => setEditOrder(p => ({ ...p, total: e.target.value }))} />
            <div style={{ display: 'flex', gap: '10px', marginTop: '12px' }}>
              <button onClick={() => setShowEditOrderModal(false)} style={{ flex: 1, padding: '12px', border: '0.5px solid #e0ddd8', background: 'none', borderRadius: '8px', fontSize: '13px', cursor: 'pointer', color: '#888' }}>Cancel</button>
              <button onClick={handleEditOrder} style={{ flex: 1, padding: '12px', background: '#12344D', color: '#FAF8F3', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>Save Changes</button>
            </div>
          </div>
        </div>
      )}

      {/* ── Confirm Paid Modal ── */}
      {confirmPaid !== null && confirmOrder && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
          <div style={{ background: '#ffffff', borderRadius: '16px', padding: '40px 36px', width: '380px', boxShadow: '0 8px 40px rgba(0,0,0,0.2)', textAlign: 'center' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: confirmOrder.paid ? 'rgba(255,127,106,0.1)' : 'rgba(39,183,183,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: '26px' }}>
              {confirmOrder.paid ? '↩' : '✓'}
            </div>
            <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700', marginBottom: '8px' }}>
              {confirmOrder.paid ? 'Mark as Unpaid?' : 'Mark as Paid?'}
            </p>
            <p style={{ color: '#4c4040', fontSize: '13px', lineHeight: '1.7', marginBottom: '6px' }}>
              Order <strong style={{ color: '#12344D' }}>#{confirmOrder.id}</strong> · Table <strong style={{ color: '#12344D' }}>{confirmOrder.table}</strong>
            </p>
            <p style={{ color: '#4c4040', fontSize: '13px', marginBottom: '32px' }}>
              Total: <strong style={{ color: '#12344D' }}>${confirmOrder.total}</strong>
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => setConfirmPaid(null)} style={{ flex: 1, padding: '12px', border: '0.5px solid #e2be7b', background: 'none', borderRadius: '8px', fontSize: '13px', cursor: 'pointer', color: '#4c4040', fontWeight: '700' }}>Cancel</button>
              <button onClick={() => { togglePaid(confirmPaid); setConfirmPaid(null) }} style={{ flex: 1, padding: '12px', border: 'none', borderRadius: '8px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', background: confirmOrder.paid ? '#FF7F6A' : '#27B7B7', color: '#fff' }}>
                {confirmOrder.paid ? 'Mark Unpaid' : 'Confirm Paid'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ManageOrders