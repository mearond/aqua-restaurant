import Navbar from '../../components/Navbar'
import { useState } from 'react'

const menuData = {
  Starters: [
    { id: 1, name: 'Sambusa', description: 'Crispy pastry filled with spiced lentils and jalapeño', price: 10, image: '/images/menu/sambusa.jpg' },
    { id: 2, name: 'Tibs Bruschetta', description: 'Toasted bread topped with spiced beef tibs and tomato', price: 14, image: '/images/menu/tibs-bruschetta.jpg' },
    { id: 3, name: 'Azifa Salad', description: 'Ethiopian green lentil salad with mustard and lemon dressing', price: 10, image: '/images/menu/azifa-salad.jpg' },
  ],
  Mains: [
    { id: 4, name: 'Doro Wat', description: 'Slow-cooked chicken in rich berbere sauce served with injera', price: 28, image: '/images/menu/doro-wat.jpg' },
    { id: 5, name: 'Grilled Tibs Steak', description: 'Tender pan-seared beef with rosemary, garlic and spiced butter', price: 36, image: '/images/menu/tibs-steak.jpg' },
    { id: 6, name: 'Shiro', description: 'Creamy chickpea shiro sauce over penne, topped with niter kibbeh', price: 22, image: '/images/menu/shiro.jpg' },
  ],
  Desserts: [
    { id: 7, name: 'Honey Cake', description: 'Traditional Ethiopian honey wine cake with cream', price: 10, image: '/images/menu/honey-cake.jpg' },
    { id: 8, name: 'Chocolate Fondant', description: 'Warm dark chocolate cake with tej-infused vanilla ice cream', price: 13, image: '/images/menu/chocolate-fondant.jpg' },
    { id: 9, name: 'Fruit Salad', description: 'Seasonal fresh fruit with spiced yogurt and mint', price: 9, image: '/images/menu/fruit-salad.jpg' },
  ],
  Drinks: [
    { id: 10, name: 'Tej', description: 'Traditional Ethiopian honey wine, served chilled', price: 12, image: '/images/menu/tej.jpg' },
    { id: 11, name: 'Spiced Ethiopian Coffee', description: 'Traditional buna with cardamom and a hint of clove', price: 7, image: '/images/menu/ethiopian-coffee.jpg' },
    { id: 12, name: 'Avocado Juice', description: 'Creamy blended avocado with a touch of sugar, Addis-style', price: 8, image: '/images/menu/avocado-juice.jpg' },
  ],
}

const categories = ['All', 'Starters', 'Mains', 'Desserts', 'Drinks']

function Menu() {
  const [activeCategory, setActiveCategory] = useState('All')

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
        <h1 style={{ fontSize: '42px', color: '#27B7B7', marginBottom: '12px'}}>Our Menu</h1>
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
              overflow: 'hidden', // keeps image corners rounded
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              border: '1px solid #e0ddd8',
            }}
          >
            {/* Food image — takes up top portion of card */}
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover', // crops image nicely without stretching
              }}
            />

            {/* Card content */}
            <div style={{ padding: '20px' }}>
              <h3 style={{ color: '#12344D', marginBottom: '8px', fontSize: '18px' }}>{item.name}</h3>
              <p style={{ color: '#888', fontSize: '14px', lineHeight: '1.6', marginBottom: '16px' }}>{item.description}</p>

              {/* Price in coral color (same as old Order Now button) */}
              <span style={{ color: '#FF7F6A', fontWeight: '700', fontSize: '22px' }}>${item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu