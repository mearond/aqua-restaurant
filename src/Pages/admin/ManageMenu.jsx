import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ManageMenu() {
  const navigate = useNavigate()

  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Sambusa', desc: 'Crispy pastry filled with spiced lentils and jalapeño', price: 10, category: 'Starter', image: '/images/menu/sambusa.jpg', available: true },
    { id: 2, name: 'Tibs Bruschetta', desc: 'Toasted bread topped with spiced beef tibs and tomato', price: 14, category: 'Starter', image: '/images/menu/tibs-bruschetta.jpg', available: true },
    { id: 3, name: 'Azifa Salad', desc: 'Ethiopian green lentil salad with mustard and lemon dressing', price: 10, category: 'Starter', image: '/images/menu/azifa-salad.jpg', available: true },
    { id: 4, name: 'Doro Wat', desc: 'Slow-cooked chicken in rich berbere sauce served with injera', price: 28, category: 'Main', image: '/images/menu/doro-wat.jpg', available: true },
    { id: 5, name: 'Grilled Tibs Steak', desc: 'Tender pan-seared beef with rosemary, garlic and spiced butter', price: 36, category: 'Main', image: '/images/menu/tibs-steak.jpg', available: true },
    { id: 6, name: 'Shiro', desc: 'Creamy chickpea shiro sauce over penne, topped with niter kibbeh', price: 22, category: 'Main', image: '/images/menu/shiro.jpg', available: false },
    { id: 7, name: 'Honey Cake', desc: 'Traditional Ethiopian honey wine cake with cream', price: 10, category: 'Dessert', image: '/images/menu/honey-cake.jpg', available: true },
    { id: 8, name: 'Chocolate Fondant', desc: 'Warm dark chocolate cake with tej-infused vanilla ice cream', price: 13, category: 'Dessert', image: '/images/menu/chocolate-fondant.jpg', available: true },
    { id: 9, name: 'Fruit Salad', desc: 'Seasonal fresh fruit with spiced yogurt and mint', price: 9, category: 'Dessert', image: '/images/menu/fruit-salad.jpg', available: false },
    { id: 10, name: 'Tej', desc: 'Traditional Ethiopian honey wine, served chilled', price: 12, category: 'Drink', image: '/images/menu/tej.jpg', available: true },
    { id: 11, name: 'Spiced Ethiopian Coffee', desc: 'Traditional buna with cardamom and a hint of clove', price: 7, category: 'Drink', image: '/images/menu/ethiopian-coffee.jpg', available: true },
    { id: 12, name: 'Avocado Juice', desc: 'Creamy blended avocado with a touch of sugar, Addis-style', price: 8, category: 'Drink', image: '/images/menu/avocado-juice.jpg', available: true },
  ])

  // Toggle availability
  const toggleAvailable = (id) => {
    setMenuItems(prev => prev.map(item => item.id === id ? { ...item, available: !item.available } : item))
  }

  // Delete item
  const deleteItem = (id) => {
    setMenuItems(prev => prev.filter(item => item.id !== id))
  }

  // Category badge colors
  const categoryColors = {
    Starter: { bg: 'rgba(30,129,176,0.1)', color: '#1E81B0' },
    Main: { bg: 'rgba(39,183,183,0.1)', color: '#27B7B7' },
    Dessert: { bg: 'rgba(255,127,106,0.1)', color: '#FF7F6A' },
    Drink: { bg: 'rgba(155,89,182,0.1)', color: '#9B59B6' },
  }

  // Filter items
  const filtered = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const Icon = ({ symbol, color = 'rgba(255,255,255,0.4)', size = 15 }) => (
    <span style={{ color, fontSize: size, lineHeight: 1, flexShrink: 0 }}>{symbol}</span>
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
          <div style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(39,183,183,0.08)', borderLeft: '2px solid #27B7B7' }}>
            <Icon symbol="▦" color="#27B7B7" /><span style={{ color: '#27B7B7', fontSize: '13px' }}>Manage Menu</span>
          </div>
          <div onClick={() => navigate('/admin/orders')} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
            <Icon symbol="◈" /><span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '13px' }}>Manage Orders</span>
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
            <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '700' }}>Manage Menu</p>
            <p style={{ color: '#888', fontSize: '12px', marginTop: '2px' }}>Add, edit or remove menu items</p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button style={{ border: '0.5px solid #e0ddd8', background: '#fff', color: '#12344D', padding: '10px 16px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>Export CSV</button>
            <button style={{ background: '#FF7F6A', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '8px', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}>+ Add Item</button>
          </div>
        </div>

        <div style={{ padding: '28px 36px' }}>

          {/* Stats strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '16px', marginBottom: '24px' }}>
            {[
              { label: 'TOTAL ITEMS', value: menuItems.length, icon: '▦', iconColor: '#27B7B7', bg: 'rgba(39,183,183,0.1)', dark: false },
              { label: 'AVAILABLE', value: menuItems.filter(i => i.available).length, icon: '◉', iconColor: '#27B7B7', bg: 'rgba(39,183,183,0.1)', dark: false },
              { label: 'UNAVAILABLE', value: menuItems.filter(i => !i.available).length, icon: '◌', iconColor: '#FF7F6A', bg: 'rgba(255,127,106,0.1)', dark: false },
              { label: 'CATEGORIES', value: 4, icon: '◇', iconColor: '#FF7F6A', bg: 'rgba(255,127,106,0.15)', dark: true },
            ].map(stat => (
              <div key={stat.label} style={{ background: stat.dark ? '#12344D' : '#fff', borderRadius: '12px', padding: '18px 20px', border: stat.dark ? 'none' : '0.5px solid #e0ddd8', display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', background: stat.bg, borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0, color: stat.iconColor }}>{stat.icon}</div>
                <div>
                  <p style={{ color: stat.dark ? 'rgba(255,255,255,0.5)' : '#888', fontSize: '10px', letterSpacing: '1px', marginBottom: '4px' }}>{stat.label}</p>
                  <p style={{ color: stat.dark ? '#FAF8F3' : '#12344D', fontSize: '20px', fontWeight: '700' }}>{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Search + filters */}
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '200px', background: '#fff', border: '0.5px solid #e0ddd8', borderRadius: '8px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ color: '#888' }}>⊙</span>
              <input
                type="text"
                placeholder="Search menu items..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ border: 'none', outline: 'none', fontSize: '13px', color: '#12344D', width: '100%', background: 'transparent' }}
              />
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {['All', 'Starter', 'Main', 'Dessert', 'Drink'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '9px 18px', borderRadius: '20px', border: '0.5px solid #e0ddd8',
                    cursor: 'pointer', fontSize: '12px', fontWeight: '600',
                    background: activeCategory === cat ? '#12344D' : '#fff',
                    color: activeCategory === cat ? '#FAF8F3' : '#888',
                    transition: 'all 0.2s',
                  }}>
                  {cat === 'All' ? 'All' : `${cat}s`}
                </button>
              ))}
            </div>
          </div>

          {/* Menu table */}
          <div style={{ background: '#fff', borderRadius: '16px', border: '0.5px solid #e0ddd8', overflow: 'hidden' }}>

            {/* Header */}
            <div style={{ display: 'grid', gridTemplateColumns: '52px 1.4fr 2fr 80px 100px 70px 110px', padding: '12px 20px', background: '#FAF8F3', borderBottom: '0.5px solid #e0ddd8', alignItems: 'center' }}>
              <div />
              <p style={{ color: '#888', fontSize: '10px', fontWeight: '600', letterSpacing: '1px' }}>NAME</p>
              <p style={{ color: '#888', fontSize: '10px', fontWeight: '600', letterSpacing: '1px' }}>DESCRIPTION</p>
              <p style={{ color: '#888', fontSize: '10px', fontWeight: '600', letterSpacing: '1px' }}>PRICE</p>
              <p style={{ color: '#888', fontSize: '10px', fontWeight: '600', letterSpacing: '1px' }}>CATEGORY</p>
              <p style={{ color: '#888', fontSize: '10px', fontWeight: '600', letterSpacing: '1px' }}>STATUS</p>
              <p style={{ color: '#888', fontSize: '10px', fontWeight: '600', letterSpacing: '1px' }}>ACTIONS</p>
            </div>

            {/* Rows */}
            {filtered.map((item, i) => {
              const cat = categoryColors[item.category]
              return (
                <div key={item.id} style={{
                  display: 'grid',
                  gridTemplateColumns: '52px 1.4fr 2fr 80px 100px 70px 110px',
                  padding: '14px 20px',
                  borderBottom: i < filtered.length - 1 ? '0.5px solid #f5f3f0' : 'none',
                  alignItems: 'center',
                  opacity: item.available ? 1 : 0.45,
                }}>
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '36px', height: '36px', borderRadius: '8px', objectFit: 'cover', flexShrink: 0 }}
                  />
                  <p style={{ color: '#12344D', fontSize: '13px', fontWeight: '600' }}>{item.name}</p>
                  <p style={{ color: '#888', fontSize: '12px', paddingRight: '16px' }}>{item.desc}</p>
                  <p style={{ color: '#12344D', fontSize: '13px', fontWeight: '700' }}>${item.price}</p>
                  <span style={{ background: cat.bg, color: cat.color, padding: '4px 10px', borderRadius: '10px', fontSize: '10px', fontWeight: '600', display: 'inline-block', width: 'fit-content' }}>{item.category}</span>

                  {/* Availability toggle */}
                  <div
                    onClick={() => toggleAvailable(item.id)}
                    style={{
                      width: '34px', height: '19px',
                      background: item.available ? '#27B7B7' : '#e0ddd8',
                      borderRadius: '99px', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', padding: '2px',
                      justifyContent: item.available ? 'flex-end' : 'flex-start',
                      transition: 'all 0.2s', flexShrink: 0,
                    }}>
                    <div style={{ width: '15px', height: '15px', background: '#fff', borderRadius: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }} />
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: '6px' }}>
                    <button style={{ border: '0.5px solid #e0ddd8', background: 'none', color: '#12344D', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer', fontWeight: '500' }}>Edit</button>
                    <button onClick={() => deleteItem(item.id)} style={{ border: '0.5px solid rgba(255,127,106,0.4)', background: 'none', color: '#FF7F6A', padding: '6px 12px', borderRadius: '6px', fontSize: '11px', cursor: 'pointer', fontWeight: '500' }}>Del</button>
                  </div>
                </div>
              )
            })}

            {filtered.length === 0 && (
              <div style={{ padding: '60px', textAlign: 'center', color: '#888', fontSize: '14px' }}>
                No items found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageMenu