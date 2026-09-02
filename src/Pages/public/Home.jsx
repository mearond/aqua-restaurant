import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

function useInView(threshold = 0.15) {
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

function Home() {
  const navigate = useNavigate()

  const [dishesRef, dishesInView] = useInView()
  const [spaceRef, spaceInView] = useInView()
  const [reviewsRef, reviewsInView] = useInView()

  const [hoveredDish, setHoveredDish] = useState(null)
  const [hoveredSpace, setHoveredSpace] = useState(null)
  const [hoveredBtn, setHoveredBtn] = useState(null)

  const dishes = [
    { name: 'Doro Wat', desc: 'Slow-cooked chicken in rich berbere sauce served with injera', price: '$28', image: '/images/menu/doro-wat.jpg' },
    { name: 'Grilled Tibs Steak', desc: 'Tender pan-seared beef with rosemary, garlic and spiced butter', price: '$36', image: '/images/menu/tibs-steak.jpg' },
    { name: 'Sambusa', desc: 'Crispy pastry filled with spiced lentils and jalapeño', price: '$10', image: '/images/menu/sambusa.jpg' },
  ]

  const spaces = [
    { image: '/images/interior/interior-1.png', label: 'Main Dining Hall' },
    { image: '/images/interior/interior-2.png', label: 'Private Lounge' },
    { image: '/images/interior/interior-3.png', label: 'Terrace Seating' },
  ]

  const reviews = [
    { name: 'Sarah M.', location: 'Addis Ababa', review: 'The Doro Wat was absolutely incredible. Best Ethiopian food I\'ve had in years. The atmosphere is just perfect.' },
    { name: 'James K.', location: 'Nairobi', review: 'The atmosphere is stunning and the food is even better. The fusion of Ethiopian and western flavors is genius.' },
    { name: 'Meron T.', location: 'Addis Ababa', review: 'Perfect blend of Ethiopian and western flavors. The Tibs Steak was divine and the service was exceptional.' },
  ]

  return (
    <div style={{ backgroundColor: '#FAF8F3', paddingTop: '70px' }}>
      <Navbar />

      {/* ── Hero — full background image with tint only around text ── */}
      <div style={{
        position: 'relative',
        height: '90vh',
        minHeight: '560px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
      }}>
        {/* Full background image */}
        <img
          src="/images/interior/interior-1.png"
          alt="AQUA interior"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Very subtle dark overlay across whole image */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0,0,0,0.25)',
        }} />

        {/* Text content with dark tint only behind it */}
        <div style={{
          position: 'relative', zIndex: 1,
          padding: '60px 80px',
          maxWidth: '640px',
        }}>
          {/* Dark tint behind text only */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(135deg, rgba(12,30,45,0.85) 0%, rgba(12,30,45,0.6) 70%, transparent 100%)',
            borderRadius: '16px',
            backdropFilter: 'blur(2px)',
          }} />

          <div style={{ position: 'relative', zIndex: 1, padding: '48px' }}>
            <p style={{ color: '#27B7B7', fontSize: '12px', letterSpacing: '3px', marginBottom: '16px' }}>WELCOME TO AQUA</p>
            <h1 style={{ color: '#FAF8F3', fontSize: '52px', fontWeight: '800', lineHeight: '1.15', marginBottom: '20px' }}>
              Fine Dining<br />
              Where the <span style={{ color: '#27B7B7' }}>Ocean</span><br />
              Meets the Table
            </h1>
            <p style={{ color: '#FAF8F3', opacity: 0.85, fontSize: '16px', lineHeight: '1.8', marginBottom: '36px' }}>
              Experience the bold flavors of Ethiopian cuisine blended with the elegance of modern western fine dining.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={() => navigate('/menu')}
                onMouseEnter={() => setHoveredBtn('menu')}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  backgroundColor: hoveredBtn === 'menu' ? '#e86d59' : '#FF7F6A',
                  color: '#fff', padding: '14px 32px', borderRadius: '8px',
                  border: 'none', fontWeight: '700', fontSize: '15px',
                  cursor: 'pointer', transition: 'background-color 0.2s',
                }}>
                View Menu
              </button>
              <button
                onClick={() => {
                  const isLoggedIn = localStorage.getItem('token')
                  navigate(isLoggedIn ? '/reservations' : '/login')
                }}
                onMouseEnter={() => setHoveredBtn('reserve')}
                onMouseLeave={() => setHoveredBtn(null)}
                style={{
                  border: '2px solid #27B7B7',
                  backgroundColor: hoveredBtn === 'reserve' ? 'rgba(39,183,183,0.2)' : 'transparent',
                  color: '#27B7B7', padding: '14px 32px', borderRadius: '8px',
                  fontSize: '15px', cursor: 'pointer', transition: 'background-color 0.2s',
                }}>
                Make a Reservation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Featured Dishes — slide in from left ── */}
      <div style={{ padding: '80px 80px', backgroundColor: '#FAF8F3' }}>
        <p style={{ color: '#FF7F6A', fontSize: '12px', letterSpacing: '3px', textAlign: 'center', marginBottom: '8px' }}>OUR SPECIALTIES</p>
        <h2 style={{ color: '#12344D', fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '8px' }}>Featured Dishes</h2>
        <p style={{ color: '#888', fontSize: '15px', textAlign: 'center', marginBottom: '48px' }}>Handpicked favorites from our Ethiopian-Western menu</p>

        <div ref={dishesRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
          {dishes.map((item, i) => (
            <div
              key={item.name}
              onMouseEnter={() => setHoveredDish(i)}
              onMouseLeave={() => setHoveredDish(null)}
              style={{
                backgroundColor: '#fff', borderRadius: '14px', overflow: 'hidden',
                border: '1px solid #e0ddd8',
                transform: dishesInView
                  ? hoveredDish === i ? 'translateX(0) scale(1.03)' : 'translateX(0) scale(1)'
                  : 'translateX(-60px) scale(1)',
                opacity: dishesInView ? 1 : 0,
                transition: `transform 0.5s ease ${i * 0.15}s, opacity 0.5s ease ${i * 0.15}s`,
                boxShadow: hoveredDish === i ? '0 8px 32px rgba(0,0,0,0.14)' : '0 2px 12px rgba(0,0,0,0.06)',
              }}>
              <img src={item.image} alt={item.name} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px' }}>
                <h3 style={{ color: '#12344D', fontSize: '17px', marginBottom: '8px' }}>{item.name}</h3>
                <p style={{ color: '#888', fontSize: '13px', lineHeight: '1.6', marginBottom: '14px' }}>{item.desc}</p>
                <span style={{ color: '#FF7F6A', fontWeight: '700', fontSize: '20px' }}>{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <button
            onClick={() => navigate('/menu')}
            onMouseEnter={() => setHoveredBtn('fullmenu')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              border: '2px solid #1E81B0',
              backgroundColor: hoveredBtn === 'fullmenu' ? '#1E81B0' : 'transparent',
              color: hoveredBtn === 'fullmenu' ? '#fff' : '#1E81B0',
              padding: '12px 32px', borderRadius: '8px',
              fontWeight: '600', fontSize: '14px',
              cursor: 'pointer', transition: 'all 0.2s',
            }}>
            See Full Menu
          </button>
        </div>
      </div>

      {/* ── Our Space — slide in from right ── */}
      <div style={{ backgroundColor: '#12344D', padding: '80px 80px' }}>
        <p style={{ color: '#27B7B7', fontSize: '12px', letterSpacing: '3px', textAlign: 'center', marginBottom: '8px' }}>OUR SPACE</p>
        <h2 style={{ color: '#FAF8F3', fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '8px' }}>Designed for Every Occasion</h2>
        <p style={{ color: '#FAF8F3', opacity: 0.65, fontSize: '15px', textAlign: 'center', marginBottom: '48px' }}>
          From intimate dinners to celebratory gatherings, AQUA sets the scene
        </p>
        <div ref={spaceRef} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', maxWidth: '1100px', margin: '0 auto' }}>
          {spaces.map((item, i) => (
            <div
              key={item.label}
              onMouseEnter={() => setHoveredSpace(i)}
              onMouseLeave={() => setHoveredSpace(null)}
              style={{
                position: 'relative', borderRadius: '14px', overflow: 'hidden',
                transform: spaceInView
                  ? hoveredSpace === i ? 'translateX(0) scale(1.03)' : 'translateX(0) scale(1)'
                  : 'translateX(60px) scale(1)',
                opacity: spaceInView ? 1 : 0,
                transition: `transform 0.5s ease ${i * 0.15}s, opacity 0.5s ease ${i * 0.15}s`,
                boxShadow: hoveredSpace === i ? '0 8px 32px rgba(0,0,0,0.3)' : 'none',
              }}>
              <img src={item.image} alt={item.label} style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                background: 'linear-gradient(transparent, rgba(18,52,77,0.85))',
                padding: '20px 16px 16px',
              }}>
                <p style={{ color: '#FAF8F3', fontWeight: '600', fontSize: '14px' }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Testimonials — fade in on scroll ── */}
      <div style={{ padding: '80px 80px', backgroundColor: '#FAF8F3' }}>
        <p style={{ color: '#FF7F6A', fontSize: '12px', letterSpacing: '3px', textAlign: 'center', marginBottom: '8px' }}>WHAT PEOPLE SAY</p>
        <h2 style={{ color: '#12344D', fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '8px' }}>Guest Reviews</h2>
        <p style={{ color: '#888', fontSize: '15px', textAlign: 'center', marginBottom: '48px' }}>Hear from our valued guests</p>

        <div ref={reviewsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
          {reviews.map((item, i) => (
            <div
              key={item.name}
              style={{
                backgroundColor: '#fff', borderRadius: '14px', padding: '28px',
                border: '1px solid #e0ddd8',
                opacity: reviewsInView ? 1 : 0,
                transform: reviewsInView ? 'translateY(0)' : 'translateY(30px)',
                transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              }}>
              <div style={{ color: '#FF7F6A', fontSize: '16px', marginBottom: '14px' }}>★★★★★</div>
              <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '20px' }}>
                "{item.review}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  backgroundColor: '#1E81B0', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', color: '#fff', fontWeight: '700', fontSize: '14px',
                }}>
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p style={{ color: '#12344D', fontWeight: '600', fontSize: '14px' }}>{item.name}</p>
                  <p style={{ color: '#888', fontSize: '12px' }}>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA Banner — interior-2 background image inspired by inspo ── */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Background image */}
        <img
          src="/images/interior/interior-2.png"
          alt="reserve"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,30,45,0.78)' }} />

        {/* Content — inspired by inspo: left text + right button */}
        <div style={{
          position: 'relative', zIndex: 1,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '32px',
          padding: '52px 80px',
        }}>
          {/* Left */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '12px',
              background: 'rgba(255,127,106,0.15)', border: '1px solid rgba(255,127,106,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '24px', flexShrink: 0,
            }}>📅</div>
            <div>
              <p style={{ color: '#FAF8F3', opacity: 0.6, fontSize: '12px', letterSpacing: '2px', marginBottom: '4px' }}>BOOK YOUR TABLE</p>
              <h2 style={{ color: '#FAF8F3', fontSize: '28px', fontWeight: '800', marginBottom: '6px' }}>Reserve Your Table Now!</h2>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '32px', height: '1px', background: '#FF7F6A' }} />
                <p style={{ color: '#FAF8F3', opacity: 0.65, fontSize: '13px' }}>Good food is better when shared.</p>
              </div>
            </div>
          </div>

          {/* Right — Book a Table button */}
          <button
            onClick={() => {
              const isLoggedIn = localStorage.getItem('token')
              navigate(isLoggedIn ? '/reservations' : '/login')
            }}
            onMouseEnter={() => setHoveredBtn('cta')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              backgroundColor: hoveredBtn === 'cta' ? '#e86d59' : '#FF7F6A',
              color: '#fff', padding: '16px 36px', borderRadius: '40px',
              border: 'none', fontWeight: '700', fontSize: '15px',
              cursor: 'pointer', transition: 'background-color 0.2s',
              whiteSpace: 'nowrap',
            }}>
            <span>📅</span> Book a Table
          </button>
        </div>
      </div>
    </div>
  )
}

export default Home