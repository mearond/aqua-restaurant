import Navbar from '../../components/Navbar'
import { useState } from 'react'

// Menu data — later this will come from the database, for now it's hardcoded
const menuData = {
  Starters: [
    { id: 1, name: 'Tuna Tartare', description: 'Fresh tuna, avocado, sesame oil, crispy wonton', price: 18 },
    { id: 2, name: 'Oysters on Ice', description: 'Half dozen fresh oysters with mignonette sauce', price: 22 },
    { id: 3, name: 'Calamari Fritti', description: 'Lightly fried squid with lemon aioli', price: 14 },
  ],
  Mains: [
    { id: 4, name: 'Grilled Sea Bass', description: 'With roasted vegetables and saffron butter sauce', price: 38 },
    { id: 5, name: 'Lobster Risotto', description: 'Creamy arborio rice with half lobster tail', price: 52 },
    { id: 6, name: 'Salmon en Croûte', description: 'Herb-crusted salmon wrapped in golden pastry', price: 34 },
  ],
  Desserts: [
    { id: 7, name: 'Crème Brûlée', description: 'Classic vanilla custard with caramelized sugar', price: 12 },
    { id: 8, name: 'Chocolate Fondant', description: 'Warm dark chocolate cake with vanilla ice cream', price: 14 },
    { id: 9, name: 'Mango Sorbet', description: 'Fresh mango sorbet with coconut flakes', price: 10 },
  ],
  Drinks: [
    { id: 10, name: 'Ocean Breeze', description: 'Signature cocktail with rum, lime, and blue curaçao', price: 16 },
    { id: 11, name: 'Sparkling Water', description: 'San Pellegrino 750ml', price: 6 },
    { id: 12, name: 'House Wine', description: 'Red or white, glass pour', price: 12 },
  ],
}

// The categories we'll show as filter buttons
const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']

function Menu() {
  // Tracks which category is selected, starts on 'All'
  const [activeCategory, setActiveCategory] = useState('All')

  // If 'All' is selected, combine every category into one flat list
  // Otherwise just show the selected category's items
  const itemsToShow = activeCategory === 'All'
    ? Object.values(menuData).flat()
    : menuData[activeCategory]

  return (
    <div style={{ backgroundColor: '#FAF8F3', minHeight: '100vh' }}>
      <Navbar />

      {/* Page header */}
      <div style={{
        backgroundColor: '#12344D',
        color: '#FAF8F3',
        textAlign: 'center',
        padding: '60px 40px',
      }}>
        <h1 style={{ fontSize: '42px', color: '#27B7B7', marginBottom: '12px' }}>Our Menu</h1>
        <p style={{ opacity: 0.8, fontSize: '16px' }}>Fresh ingredients, crafted with passion</p>
      </div>

      {/* Category filter buttons */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        padding: '40px 20px 20px',
        flexWrap: 'wrap',
      }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            style={{
              padding: '10px 24px',
              borderRadius: '24px',
              border: '2px solid #1E81B0',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px',
              // Active category gets filled, inactive stays outlined
              backgroundColor: activeCategory === category ? '#1E81B0' : 'transparent',
              color: activeCategory === category ? '#fff' : '#1E81B0',
              transition: 'all 0.2s',
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Menu items grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '24px',
        padding: '32px 60px 80px',
        maxWidth: '1200px',
        margin: '0 auto',
      }}>
        {itemsToShow.map(item => (
          <div
            key={item.id}
            style={{
              backgroundColor: '#fff',
              borderRadius: '12px',
              padding: '28px',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid #e0ddd8',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <h3 style={{ color: '#12344D', marginBottom: '8px', fontSize: '18px' }}>{item.name}</h3>
              <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6' }}>{item.description}</p>
            </div>
            {/* Price tag at the bottom of the card */}
            <div style={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ color: '#1E81B0', fontWeight: '700', fontSize: '20px' }}>${item.price}</span>
              <button style={{
                backgroundColor: '#FF7F6A',
                color: '#fff',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 18px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '13px',
              }}>
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu