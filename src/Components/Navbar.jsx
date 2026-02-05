import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './logo.jpeg'
import SideMenu from './SideMenu'
import './sideMenu.css'
import { useAuth, useCart } from '../context'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { user, isAuthenticated, logout } = useAuth()
  const { cartCount } = useCart()

  const handleSearch = () => {
    if (!query.trim()) return
    navigate(`/search?q=${query}`)
  }

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  return (
    <div className="navbar">

      {/* TOP NAV BAR */}
      <div className="nav">
        <div className="n1">
          <Link to="/"><img src={logo} alt="logo" /></Link>
        </div>

        <div className="n2">
          🌍 Delivering to Mumbai 897654 <br />
          <button>Update location</button>
        </div>

        <div className="n3">
          <div className="n31">
            <select>
              <option>All</option>
              <option>Furniture</option>
              <option>Fragrance</option>
              <option>Groceries</option>
            </select>
          </div>

          <div className="n32">
            <input
              type="text"
              placeholder="Amazon.in"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>

          <div className="n33">
            <button onClick={handleSearch}>⌕</button>
          </div>
        </div>

        <div className="n4">
          {/* Conditional Auth UI */}
          <div className="nav-auth">
            {isAuthenticated ? (
              <div className="nav-auth-link nav-auth-logged-in">
                <span className="nav-auth-greeting">Hello, {user?.name}</span>
                <button className="nav-logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/signin" className="nav-auth-link">
                <span className="nav-auth-greeting">Hello, sign in</span>
                <span className="nav-auth-text">Account & Lists</span>
              </Link>
            )}
          </div>

          <div className="nav-orders">
            <Link to="/" className="nav-orders-link">
              <span className="nav-orders-greeting">Returns</span>
              <span className="nav-orders-text">& Orders</span>
            </Link>
          </div>

          <div className="nav-cart">
            <Link to="/cart" className="nav-cart-link">
              <span className="nav-cart-icon">🛒</span>
              <span className="nav-cart-text">Cart</span>
              {cartCount > 0 && <span className="nav-cart-count">{cartCount}</span>}
            </Link>
          </div>
        </div>
      </div>

      {/* HEAD SECTION */}
      <div className="head">
        <div className="menu">
          <div className="menu-btn" onClick={() => setMenuOpen(true)}>
            ☰ <p>All</p>
          </div>

          <SideMenu
            isOpen={menuOpen}
            onClose={() => setMenuOpen(false)}
          />
        </div>

        <Link className="hn1" to="/mx">MX Player</Link>
        <Link className="hn2" to="/sell">Sell</Link>
        <Link className="hn3" to="/bestseller">Bestsellers</Link>
        <Link className="hn4" to="/mobiles">Mobiles</Link>
        <Link className="hn5" to="/todaysdeals">Today's Deals</Link>
        <Link className="hn6" to="/customer_service">Customer Service</Link>
        <Link className="hn7" to="/newreleases">New Releases</Link>
        <Link className="hn8" to="/amazon_pay">Amazon Pay</Link>
        <Link className="hn9" to="/fashion">Fashion</Link>
        <Link className="hn10" to="/electronics">Electronics</Link>
      </div>

    </div>
  )
}

export default Navbar
