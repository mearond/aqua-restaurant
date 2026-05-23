import Navbar from '../../components/Navbar'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()

  return (
    <div style={{ backgroundColor: '#FAF8F3', paddingTop: '70px' }}>
      <Navbar />

      {/* Hero Banner with image overlay */}
      <div style={{
        position: 'relative',
        backgroundColor: '#12344D',
        height: '380px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px',
        overflow: 'hidden',
      }}>
        {/* Background image with dark overlay */}
        <img
          src="/images/interior/interior-2.png"
          alt="background"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.60,
          }}
        />
        {/* Content sits above the image */}
        <p style={{ color: '#27B7B7', fontSize: '12px', letterSpacing: '3px', marginBottom: '12px', position: 'relative' }}>
          WELCOME TO AQUA
        </p>
        <h1 style={{ color: '#FAF8F3', fontSize: '48px', fontWeight: '800', position: 'relative', lineHeight: '1.2', marginBottom: '16px' }}>
          Behind the Dishes
        </h1>
        <p style={{ color: '#FAF8F3', opacity: 0.75, fontSize: '15px', maxWidth: '480px', lineHeight: '1.8', position: 'relative', marginBottom: '28px' }}>
          The story of two culinary worlds coming together — Ethiopian tradition and western refinement.
        </p>
        <a href="#about" style={{
          backgroundColor: '#FF7F6A',
          color: '#fff',
          padding: '12px 28px',
          borderRadius: '7px',
          fontSize: '13px',
          fontWeight: '600',
          textDecoration: 'none',
          position: 'relative',
        }}>Learn More</a>
      </div>

     {/* About Us — 3 column layout */}
<div id="about" style={{ backgroundColor: '#FAF8F3', padding: '80px 60px' }}>
  <p style={{ color: '#FF7F6A', fontSize: '12px', letterSpacing: '3px', textAlign: 'center', marginBottom: '6px' }}>
    Special moments
  </p>
  <h2 style={{ color: '#12344D', fontSize: '32px', fontWeight: '700', textAlign: 'center', letterSpacing: '3px', marginBottom: '48px' }}>
    ABOUT US
  </h2>
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    maxWidth: '1200px',
    margin: '0 auto',
    alignItems: 'center',
    gap: '0',
  }}>
    {/* Left image — shorter */}
    <img
      src="/images/interior/interior-1.png"
      alt="dining"
      style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block', borderRadius: '14px 0 0 14px' }}
    />
    {/* Center text card — taller, sticks out */}
    <div style={{
      backgroundColor: '#1a3f5c',
      padding: '48px 36px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '420px',
      borderRadius: '14px',
      zIndex: 1,
      boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
    }}>
      <p style={{ color: '#27B7B7', fontSize: '11px', letterSpacing: '2px', marginBottom: '10px' }}>
        Ethiopian & Western
      </p>
      <h3 style={{ color: '#FAF8F3', fontSize: '22px', fontWeight: '700', letterSpacing: '1px', marginBottom: '14px', lineHeight: '1.3' }}>
        TRADITIONAL<br />& MODERN
      </h3>
      <p style={{ color: '#FAF8F3', opacity: 0.7, fontSize: '13px', lineHeight: '1.8', marginBottom: '24px' }}>
        Where the rich heritage of Ethiopian flavors meets the elegance of modern western dining.
      </p>
      <button
        onClick={() => navigate('/menu')}
        style={{
          backgroundColor: '#FF7F6A',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '6px',
          fontSize: '12px',
          fontWeight: '600',
          cursor: 'pointer',
          width: 'fit-content',
        }}>
        View Menu
      </button>
    </div>
    {/* Right image — shorter */}
    <img
      src="/images/interior/interior-3.png"
      alt="dining"
      style={{ width: '100%', height: '320px', objectFit: 'cover', display: 'block', borderRadius: '0 14px 14px 0' }}
    />
  </div>
</div>

      {/* Our Values — split layout */}
      <div style={{ backgroundColor: '#12344D', display: 'flex', minHeight: '360px' }}>
        {/* Left image */}
        <div style={{ flex: '0 0 38%' }}>
          <img
            src="/images/interior/interior-4.png"
            alt="our food"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>
        {/* Right values list */}
        <div style={{ flex: 1, padding: '60px 48px' }}>
          <p style={{ color: '#FF7F6A', fontSize: '12px', letterSpacing: '3px', marginBottom: '8px' }}>OUR PHILOSOPHY</p>
          <h2 style={{ color: '#FAF8F3', fontSize: '28px', fontWeight: '800', letterSpacing: '2px', marginBottom: '36px' }}>OUR VALUES</h2>
          {[
            { num: '01', title: 'FRESH INGREDIENTS', desc: 'Sourced daily from local and regional suppliers' },
            { num: '02', title: 'ETHIOPIAN HERITAGE', desc: 'Rooted in tradition, expressed through modern cooking' },
            { num: '03', title: 'WORLD-CLASS CHEFS', desc: 'Masters of both Ethiopian and western cuisine' },
            { num: '04', title: 'FINE DINING ALWAYS', desc: 'Every visit is an occasion worth remembering' },
          ].map(item => (
            <div key={item.num} style={{
              borderBottom: '1px solid rgba(255,255,255,0.15)',
              padding: '14px 0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <div>
                <p style={{ color: '#FAF8F3', fontSize: '13px', fontWeight: '600', letterSpacing: '1px', marginBottom: '4px' }}>{item.title}</p>
                <p style={{ color: '#888', fontSize: '12px' }}>{item.desc}</p>
              </div>
              <span style={{ color: '#27B7B7', fontWeight: '700', fontSize: '14px', marginLeft: '20px' }}>{item.num}</span>
            </div>
          ))}
          <button
            onClick={() => navigate('/menu')}
            style={{
              marginTop: '28px',
              backgroundColor: '#FF7F6A',
              color: '#fff',
              border: 'none',
              padding: '12px 28px',
              borderRadius: '7px',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
            }}>
            View Menu
          </button>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{
        backgroundColor: '#1E81B0',
        padding: '60px 32px',
        display: 'flex',
        justifyContent: 'center',
        gap: '80px',
        flexWrap: 'wrap',
        textAlign: 'center',
      }}>
        {[
          { number: '8+', label: 'YEARS OF EXCELLENCE' },
          { number: '12', label: 'EXPERT CHEFS' },
          { number: '50+', label: 'MENU ITEMS' },
          { number: '10K+', label: 'HAPPY GUESTS' },
        ].map(stat => (
          <div key={stat.label}>
            <p style={{ color: '#FAF8F3', fontSize: '40px', fontWeight: '800', marginBottom: '8px' }}>{stat.number}</p>
            <p style={{ color: '#FAF8F3', opacity: 0.75, fontSize: '12px', letterSpacing: '1px' }}>{stat.label}</p>
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