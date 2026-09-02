import Navbar from '../../components/Navbar'
import { useState, useEffect, useRef } from 'react'

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true) },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])
  return [ref, inView]
}

const menuData = {
  Starters: [
    { id: 1, name: 'Sambusa', description: 'Crispy pastry filled with spiced lentils and jalapeño', price: 10, image: '/images/menu/sambusa.jpg', rating: 4.8 },
    { id: 2, name: 'Tibs Bruschetta', description: 'Toasted bread topped with spiced beef tibs and tomato', price: 14, image: '/images/menu/tibs-bruschetta.jpg', rating: 4.6 },
    { id: 3, name: 'Azifa Salad', description: 'Ethiopian green lentil salad with mustard and lemon dressing', price: 10, image: '/images/menu/azifa-salad.jpg', rating: 4.5 },
  ],
  Mains: [
    { id: 4, name: 'Doro Wat', description: 'Slow-cooked chicken in rich berbere sauce served with injera', price: 28, image: '/images/menu/doro-wat.jpg', rating: 4.9 },
    { id: 5, name: 'Grilled Tibs Steak', description: 'Tender pan-seared beef with rosemary, garlic and spiced butter', price: 36, image: '/images/menu/tibs-steak.jpg', rating: 4.9 },
    { id: 6, name: 'Shiro', description: 'Creamy chickpea shiro sauce over penne, topped with niter kibbeh', price: 22, image: '/images/menu/shiro.jpg', rating: 4.7 },
  ],
  Desserts: [
    { id: 7, name: 'Honey Cake', description: 'Traditional Ethiopian honey wine cake with cream', price: 10, image: '/images/menu/honey-cake.jpg', rating: 4.7 },
    { id: 8, name: 'Chocolate Fondant', description: 'Warm dark chocolate cake with tej-infused vanilla ice cream', price: 13, image: '/images/menu/chocolate-fondant.jpg', rating: 4.8 },
    { id: 9, name: 'Fruit Salad', description: 'Seasonal fresh fruit with spiced yogurt and mint', price: 9, image: '/images/menu/fruit-salad.jpg', rating: 4.5 },
  ],
  Drinks: [
    { id: 10, name: 'Tej', description: 'Traditional Ethiopian honey wine, served chilled', price: 12, image: '/images/menu/tej.jpg', rating: 4.8 },
    { id: 11, name: 'Spiced Ethiopian Coffee', description: 'Traditional buna with cardamom and a hint of clove', price: 7, image: '/images/menu/ethiopian-coffee.jpg', rating: 4.9 },
    { id: 12, name: 'Avocado Juice', description: 'Creamy blended avocado with a touch of sugar, Addis-style', price: 8, image: '/images/menu/avocado-juice.jpg', rating: 4.7 },
  ],
}

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']

const zigzagItems = [
  { image: '/images/menu/rect-starters.jpg', label: 'Starters', desc: 'Bold beginnings' },
  { image: '/images/menu/rect-mains.jpg', label: 'Mains', desc: 'The heart of AQUA' },
  { image: '/images/menu/rect-desserts.jpg', label: 'Desserts', desc: 'Sweet conclusions' },
  { image: '/images/menu/rect-drinks.jpg', label: 'Drinks', desc: 'Crafted beverages' },
  { image: '/images/menu/rect-specials.jpg', label: 'Specials', desc: 'Chef\'s selection' },
]

const groupedForAll = [
  { category: 'Starters', image: '/images/menu/tibs-bruschetta.jpg', subtitle: 'Begin Your Journey', items: menuData.Starters },
  { category: 'Mains', image: '/images/menu/tibs-steak.jpg', subtitle: 'The Heart of AQUA', items: menuData.Mains },
  { category: 'Desserts', image: '/images/menu/chocolate-fondant.jpg', subtitle: 'Sweet Endings', items: menuData.Desserts },
  { category: 'Drinks', image: '/images/menu/tej.jpg', subtitle: 'Crafted Beverages', items: menuData.Drinks },
]

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredCard, setHoveredCard] = useState(null)
  const [hoveredFilter, setHoveredFilter] = useState(null)

  const [heroRef, heroInView] = useInView(0.1)
  const [zigRef, zigInView] = useInView(0.1)
  const [menuRef, menuInView] = useInView(0.05)
  const [filterRef, filterInView] = useInView(0.1)

  return (
    <div style={{ backgroundColor: '#FAF8F3', paddingTop: '70px', fontFamily: "'Segoe UI', sans-serif" }}>
      <Navbar />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

      {/* ── Hero ── */}
      <div style={{ position: 'relative', height: '70vh', minHeight: '480px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          src="/images/menu/menu-hero.png"
          alt="Our Menu"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(12,30,45,0.7) 0%, rgba(12,30,45,0.5) 60%, rgba(12,30,45,0.85) 100%)' }} />
        <div
          ref={heroRef}
          style={{
            position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 40px',
            animation: heroInView ? 'fadeUp 0.9s ease both' : 'none',
          }}>
          <p style={{ color: '#27B7B7', fontSize: '12px', letterSpacing: '4px', marginBottom: '16px' }}>AQUA RESTAURANT</p>
          <h1 style={{ color: '#FAF8F3', fontSize: '64px', fontWeight: '800', marginBottom: '20px', lineHeight: 1.1 }}>Our Menu</h1>
          <div style={{ width: '60px', height: '2px', background: '#FF7F6A', margin: '0 auto 20px' }} />
          <p style={{ color: '#FAF8F3', opacity: 0.8, fontSize: '16px', maxWidth: '560px', lineHeight: '1.9' }}>
            A celebration of two culinary worlds — the rich, aromatic heritage of Ethiopian
            tradition fused with the refined elegance of western fine dining.
            Every dish tells a story. Every bite, a journey.
          </p>
        </div>
      </div>

      {/* ── Zigzag section ── */}
      <div style={{ backgroundColor: '#12344D', padding: '80px 0', overflow: 'hidden' }}>
        <div style={{
          textAlign: 'center', marginBottom: '60px', padding: '0 40px',
          animation: 'fadeUp 0.8s ease both',
        }}>
          <p style={{ color: '#FF7F6A', fontSize: '11px', letterSpacing: '3px', marginBottom: '12px' }}>EXPLORE</p>
          <h2 style={{ color: '#FAF8F3', fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>Discover Our Categories</h2>
          <p style={{ color: '#FAF8F3', opacity: 0.6, fontSize: '15px', maxWidth: '500px', margin: '0 auto', lineHeight: '1.8' }}>
            From light, crispy starters to indulgent mains and delicate desserts —
            each category is a world of its own.
          </p>
        </div>

        <div
          ref={zigRef}
          style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '12px', padding: '0 60px' }}>
          {zigzagItems.map((item, i) => {
            const isUp = i % 2 === 0
            return (
              <div
                key={item.label}
                style={{
                  flex: 1, maxWidth: '200px',
                  height: isUp ? '420px' : '320px',
                  position: 'relative',
                  borderRadius: '120px 120px 16px 16px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  cursor: 'pointer',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  animation: zigInView ? `${isUp ? 'fadeUp' : 'scaleIn'} 0.7s ease ${i * 0.12}s both` : 'none',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onClick={() => setActiveCategory(item.label === 'Specials' ? 'All' : item.label)}
                onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.4)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.3)' }}>
                <img src={item.image} alt={item.label} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,30,45,0.9) 0%, transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: 0, right: 0, textAlign: 'center' }}>
                  <p style={{ color: '#FAF8F3', fontWeight: '700', fontSize: '14px', marginBottom: '4px' }}>{item.label}</p>
                  <p style={{ color: '#27B7B7', fontSize: '11px', letterSpacing: '1px' }}>{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* ── Filter + header ── */}
      <div
        ref={filterRef}
        style={{
          backgroundColor: '#FAF8F3', padding: '60px 80px 20px', textAlign: 'center',
          animation: filterInView ? 'fadeUp 0.7s ease both' : 'none',
        }}>
        <p style={{ color: '#FF7F6A', fontSize: '11px', letterSpacing: '4px', marginBottom: '12px' }}>THE FULL EXPERIENCE</p>
        <h2 style={{ color: '#12344D', fontSize: '36px', fontWeight: '700', marginBottom: '12px' }}>
          {activeCategory === 'All' ? 'Everything We Offer' : activeCategory}
        </h2>
        <div style={{ width: '60px', height: '2px', background: '#27B7B7', margin: '0 auto 40px' }} />

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '60px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              onMouseEnter={() => setHoveredFilter(cat)}
              onMouseLeave={() => setHoveredFilter(null)}
              style={{
                padding: '10px 26px', borderRadius: '30px',
                border: activeCategory === cat ? 'none' : '1.5px solid #1E81B0',
                cursor: 'pointer', fontWeight: '600', fontSize: '13px',
                backgroundColor: activeCategory === cat ? '#1E81B0' : hoveredFilter === cat ? 'rgba(30,129,176,0.08)' : 'transparent',
                color: activeCategory === cat ? '#fff' : '#1E81B0',
                transition: 'all 0.2s',
              }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── Menu content ── */}
      <div ref={menuRef} style={{ padding: '0 80px 80px' }}>

        {/* ALL view — alternating image + list */}
        {activeCategory === 'All' && (
          <div>
            {groupedForAll.map((group, gi) => {
              const isEven = gi % 2 === 0
              return (
                <div
                  key={group.category}
                  style={{
                    display: 'flex',
                    flexDirection: isEven ? 'row' : 'row-reverse',
                    minHeight: '400px',
                    borderBottom: gi < groupedForAll.length - 1 ? '0.5px solid #e0ddd8' : 'none',
                    animation: menuInView ? `${isEven ? 'fadeLeft' : 'fadeRight'} 0.7s ease ${gi * 0.12}s both` : 'none',
                  }}>
                  {/* Image side */}
                  <div style={{ flex: '0 0 42%', position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={group.image}
                      alt={group.category}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '360px' }}
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: isEven
                        ? 'linear-gradient(to right, transparent 60%, #FAF8F3 100%)'
                        : 'linear-gradient(to left, transparent 60%, #FAF8F3 100%)',
                    }} />
                  </div>

                  {/* List side */}
                  <div style={{ flex: 1, padding: '48px 52px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ color: '#FF7F6A', fontSize: '11px', letterSpacing: '3px', marginBottom: '8px' }}>{group.category.toUpperCase()}</p>
                    <h3 style={{ color: '#12344D', fontSize: '28px', fontWeight: '700', marginBottom: '8px' }}>{group.subtitle}</h3>
                    <div style={{ width: '40px', height: '2px', background: '#27B7B7', marginBottom: '28px' }} />
                    {group.items.map((item, ii) => (
                      <div key={item.id} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                        padding: '16px 0',
                        borderBottom: ii < group.items.length - 1 ? '0.5px solid #e8e5e0' : 'none',
                      }}>
                        <div style={{ flex: 1, paddingRight: '20px' }}>
                          <p style={{ color: '#12344D', fontSize: '15px', fontWeight: '600', marginBottom: '4px' }}>{item.name}</p>
                          <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6' }}>{item.description}</p>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                          <div style={{ width: '80px', height: '0.5px', background: '#c0bdb8' }} />
                          <p style={{ color: '#FF7F6A', fontWeight: '700', fontSize: '16px' }}>${item.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Category filter view — card grid */}
        {activeCategory !== 'All' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 300px)',
            gap: '24px',
            justifyContent: 'center',
          }}>
            {menuData[activeCategory].map((item, i) => (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  backgroundColor: '#fff',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: hoveredCard === item.id
                    ? '0 12px 40px rgba(0,0,0,0.14)'
                    : '0 2px 16px rgba(0,0,0,0.07)',
                  transform: hoveredCard === item.id ? 'translateY(-6px)' : 'translateY(0)',
                  transition: 'all 0.3s ease',
                  animation: menuInView ? `scaleIn 0.5s ease ${i * 0.1}s both` : 'none',
                }}>
                {/* Circular food image */}
                <div style={{ padding: '28px 24px 0', display: 'flex', justifyContent: 'center' }}>
                  <div style={{
                    width: '150px', height: '150px', borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                    border: '3px solid #FAF8F3',
                  }}>
                    <img src={item.image} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>

                {/* Rating */}
                <div style={{ textAlign: 'center', marginTop: '14px' }}>
                  <span style={{ color: '#FF7F6A', fontSize: '12px', fontWeight: '600' }}>★ {item.rating}</span>
                </div>

                {/* Info */}
                <div style={{ padding: '12px 24px 28px' }}>
                  <p style={{ color: '#12344D', fontSize: '15px', fontWeight: '700', marginBottom: '8px', textAlign: 'center' }}>{item.name}</p>
                  <p style={{ color: '#888', fontSize: '12px', lineHeight: '1.7', textAlign: 'center', marginBottom: '20px' }}>{item.description}</p>
                  {/* Price centered */}
                  <p style={{ color: '#12344D', fontSize: '18px', fontWeight: '800', textAlign: 'center' }}>${item.price}.00</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Menu