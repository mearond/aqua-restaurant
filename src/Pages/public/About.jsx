import Navbar from '../../components/Navbar'

function About() {
  return (
    <div style={{ backgroundColor: '#FAF8F3', paddingTop: '70px' }}>
      <Navbar />

      {/* Header */}
      <div style={{
        backgroundColor: '#12344D',
        color: '#FAF8F3',
        textAlign: 'center',
        padding: '60px 40px',
      }}>
        <h1 style={{ fontSize: '42px', color: '#27B7B7', marginBottom: '12px' }}>Our Story</h1>
        <p style={{ opacity: 0.8, fontSize: '16px' }}>Where Ethiopian heritage meets modern dining</p>
      </div>

      {/* Story section */}
      <div style={{
        maxWidth: '800px',
        margin: '80px auto',
        padding: '0 40px',
        textAlign: 'center',
      }}>
        <h2 style={{ color: '#12344D', fontSize: '28px', marginBottom: '24px' }}>Who We Are</h2>
        <p style={{ color: '#555', lineHeight: '1.9', fontSize: '16px', marginBottom: '24px' }}>
          AQUA was born from a love of two worlds — the rich, bold flavors of Ethiopian cuisine and the refined elegance of western fine dining. We believe food is more than sustenance; it is culture, memory, and connection.
        </p>
        <p style={{ color: '#555', lineHeight: '1.9', fontSize: '16px' }}>
          Every dish on our menu tells a story — from the slow-cooked berbere of our Doro Wat to the delicate pastry of our Sambusa. We source our ingredients with care and craft each plate with intention.
        </p>
      </div>

      {/* Values */}
      <div style={{
        backgroundColor: '#12344D',
        padding: '80px 40px',
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        flexWrap: 'wrap',
      }}>
        {[
          { icon: '🌿', title: 'Fresh', desc: 'Locally sourced ingredients every day' },
          { icon: '🤝', title: 'Community', desc: 'Rooted in Ethiopian hospitality and warmth' },
          { icon: '✨', title: 'Excellence', desc: 'Every plate crafted with precision and care' },
        ].map(item => (
          <div key={item.title} style={{
            textAlign: 'center',
            width: '220px',
            color: '#FAF8F3',
          }}>
            <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
            <h3 style={{ color: '#27B7B7', marginBottom: '8px' }}>{item.title}</h3>
            <p style={{ opacity: 0.8, lineHeight: '1.7', fontSize: '14px' }}>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        backgroundColor: '#12344D',
        color: '#FAF8F3',
        textAlign: 'center',
        padding: '32px',
        fontSize: '14px',
        opacity: 0.9,
      }}>
        © 2025 AQUA Restaurant · All rights reserved
      </div>
    </div>
  )
}

export default About