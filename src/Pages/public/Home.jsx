import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ backgroundColor: '#FAF8F3', paddingTop: '70px' }}>
      <Navbar />

      {/* Hero */}
      <div style={{
        backgroundColor: '#12344D',
        display: 'flex',
        alignItems: 'center',
        gap: '60px',
        padding: '80px 80px',
        flexWrap: 'wrap',
      }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <p style={{ color: '#27B7B7', fontSize: '12px', letterSpacing: '3px', marginBottom: '16px' }}>
            WELCOME TO AQUA
          </p>
          <h1 style={{ color: '#FAF8F3', fontSize: '52px', fontWeight: '800', lineHeight: '1.15', marginBottom: '20px' }}>
            Fine Dining<br />
            Where the <span style={{ color: '#27B7B7' }}>Ocean</span><br />
            Meets the Table
          </h1>
          <p style={{ color: '#FAF8F3', opacity: 0.75, fontSize: '16px', lineHeight: '1.8', marginBottom: '36px', maxWidth: '420px' }}>
            Experience the bold flavors of Ethiopian cuisine blended with the elegance of modern western fine dining.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/menu" style={{
              backgroundColor: '#FF7F6A',
              color: '#fff',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '15px',
            }}>View Menu</a>
          <button
            onClick={() => {
              // check if user is logged in — will be replaced with real auth later
              const isLoggedIn = localStorage.getItem('token')
              if (isLoggedIn) {
                navigate('/reservations')
              } else {
                navigate('/login')
              }
            }}
            style={{
              border: '2px solid #27B7B7',
              color: '#27B7B7',
              padding: '14px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontSize: '15px',
              background: 'transparent',
              cursor: 'pointer',
            }}>
            Make a Reservation
          </button>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <img
            src="/images/interior/interior-1.png"
            alt="AQUA restaurant interior"
            style={{ width: '100%', height: '380px', objectFit: 'cover', borderRadius: '20px' }}
          />
        </div>
      </div>

      {/* Featured Dishes */}
      <div style={{ padding: '80px', backgroundColor: '#FAF8F3' }}>
        <p style={{ color: '#FF7F6A', fontSize: '12px', letterSpacing: '3px', textAlign: 'center', marginBottom: '8px' }}>OUR SPECIALTIES</p>
        <h2 style={{ color: '#12344D', fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '8px' }}>Featured Dishes</h2>
        <p style={{ color: '#888', fontSize: '15px', textAlign: 'center', marginBottom: '48px' }}>Handpicked favorites from our Ethiopian-Western menu</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {[
            { name: 'Doro Wat', desc: 'Slow-cooked chicken in rich berbere sauce served with injera', price: '$28', image: '/images/menu/doro-wat.jpg' },
            { name: 'Grilled Tibs Steak', desc: 'Tender pan-seared beef with rosemary, garlic and spiced butter', price: '$36', image: '/images/menu/tibs-steak.jpg' },
            { name: 'Sambusa', desc: 'Crispy pastry filled with spiced lentils and jalapeño', price: '$10', image: '/images/menu/sambusa.jpg' },
          ].map(item => (
            <div key={item.name} style={{
              backgroundColor: '#fff',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid #e0ddd8',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
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
          <a href="/menu" style={{
            border: '2px solid #1E81B0',
            color: '#1E81B0',
            padding: '12px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '14px',
          }}>See Full Menu</a>
        </div>
      </div>

      {/* Our Atmosphere */}
      <div style={{ backgroundColor: '#12344D', padding: '80px' }}>
        <p style={{ color: '#27B7B7', fontSize: '12px', letterSpacing: '3px', textAlign: 'center', marginBottom: '8px' }}>OUR SPACE</p>
        <h2 style={{ color: '#FAF8F3', fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '8px' }}>Designed for Every Occasion</h2>
        <p style={{ color: '#FAF8F3', opacity: 0.65, fontSize: '15px', textAlign: 'center', marginBottom: '48px' }}>
          From intimate dinners to celebratory gatherings, AQUA sets the scene
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '16px',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {[
            { image: '/images/interior/interior-1.png', label: 'Main Dining Hall' },
            { image: '/images/interior/interior-3.png', label: 'Terrace Seating' },
            { image: '/images/interior/interior-2.png', label: 'Private Lounge' },
          ].map(item => (
            <div key={item.label} style={{ position: 'relative', borderRadius: '14px', overflow: 'hidden' }}>
              <img src={item.image} alt={item.label} style={{ width: '100%', height: '260px', objectFit: 'cover', display: 'block' }} />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(transparent, rgba(18,52,77,0.85))',
                padding: '20px 16px 16px',
              }}>
                <p style={{ color: '#FAF8F3', fontWeight: '600', fontSize: '14px' }}>{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div style={{ padding: '80px', backgroundColor: '#FAF8F3' }}>
        <p style={{ color: '#FF7F6A', fontSize: '12px', letterSpacing: '3px', textAlign: 'center', marginBottom: '8px' }}>WHAT PEOPLE SAY</p>
        <h2 style={{ color: '#12344D', fontSize: '32px', fontWeight: '700', textAlign: 'center', marginBottom: '8px' }}>Guest Reviews</h2>
        <p style={{ color: '#888', fontSize: '15px', textAlign: 'center', marginBottom: '48px' }}>Hear from our valued guests</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '24px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {[
            { name: 'Sarah M.', location: 'Addis Ababa', review: 'The Doro Wat was absolutely incredible. Best Ethiopian food I\'ve had in years. The atmosphere is just perfect.' },
            { name: 'James K.', location: 'Nairobi', review: 'The atmosphere is stunning and the food is even better. The fusion of Ethiopian and western flavors is genius.' },
            { name: 'Meron T.', location: 'Addis Ababa', review: 'Perfect blend of Ethiopian and western flavors. The Tibs Steak was divine and the service was exceptional.' },
          ].map(item => (
            <div key={item.name} style={{
              backgroundColor: '#fff',
              borderRadius: '14px',
              padding: '28px',
              border: '1px solid #e0ddd8',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}>
              <div style={{ color: '#FF7F6A', fontSize: '16px', marginBottom: '14px' }}>★★★★★</div>
              <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', fontStyle: 'italic', marginBottom: '20px' }}>
                "{item.review}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: '#1E81B0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '700',
                  fontSize: '14px',
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

      {/* CTA Banner */}
      <div style={{ backgroundColor: '#1E81B0', padding: '80px', textAlign: 'center' }}>
        <h2 style={{ color: '#FAF8F3', fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>
          Ready for an Unforgettable Evening?
        </h2>
        <p style={{ color: '#FAF8F3', opacity: 0.85, fontSize: '16px', marginBottom: '36px' }}>
          Book your table today and experience the best of Ethiopian-Western fine dining
        </p>
        <button
          onClick={() => {
            const isLoggedIn = localStorage.getItem('token')
            navigate(isLoggedIn ? '/reservations' : '/login')
          }}
          style={{
            backgroundColor: '#FF7F6A',
            color: '#fff',
            padding: '16px 40px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: '700',
            fontSize: '16px',
            cursor: 'pointer',
          }}>
          Reserve a Table
        </button>
      </div>

      {/* Footer */}
      <div style={{ backgroundColor: '#12344D', color: '#FAF8F3', textAlign: 'center', padding: '32px', fontSize: '14px', opacity: 0.9 }}>
        © 2025 AQUA Restaurant · All rights reserved
      </div>
    </div>
  )
}

export default Home