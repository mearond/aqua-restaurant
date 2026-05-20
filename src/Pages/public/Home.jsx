import Navbar from '../../components/Navbar'

function Home() {
  return (
    <div style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <div style={{
        backgroundColor: '#12344D',
        color: '#FAF8F3',
        textAlign: 'center',
        padding: '120px 40px',
      }}>
        <h1 style={{ fontSize: '56px', margin: '0 0 16px', color: '#27B7B7' }}>AQUA</h1>
        <p style={{ fontSize: '20px', marginBottom: '40px', color: '#FAF8F3', opacity: 0.85 }}>
          Fine dining where the ocean meets the table
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <a href="/menu" style={{
            backgroundColor: '#FF7F6A',
            color: '#FAF8F3',
            padding: '14px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px',
          }}>View Menu</a>
          <a href="/contact" style={{
            border: '2px solid #27B7B7',
            color: '#27B7B7',
            padding: '14px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
          }}>Make a Reservation</a>
        </div>
      </div>

      {/* Features */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '32px',
        padding: '80px 40px',
        flexWrap: 'wrap',
      }}>
        {[
          { icon: '🍽️', title: 'Fine Dining', desc: 'Exquisite dishes crafted by world-class chefs' },
          { icon: '🌊', title: 'Ocean Fresh', desc: 'Ingredients sourced daily from local waters' },
          { icon: '🕯️', title: 'Atmosphere', desc: 'An intimate setting for every occasion' },
        ].map((item) => (
          <div key={item.title} style={{
            backgroundColor: '#fff',
            border: '1px solid #e0ddd8',
            borderRadius: '12px',
            padding: '40px 32px',
            textAlign: 'center',
            width: '260px',
            boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
          }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
            <h3 style={{ color: '#12344D', marginBottom: '8px' }}>{item.title}</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#12344D',
        color: '#FAF8F3',
        textAlign: 'center',
        padding: '32px',
        opacity: 0.9,
        fontSize: '14px',
      }}>
        © 2025 AQUA Restaurant · All rights reserved
      </div>
    </div>
  )
}

export default Home