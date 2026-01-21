import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './logo.jpeg'
import SideMenu from './SideMenu'
import './sideMenu.css'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')   // ✅ THIS WAS MISSING
  const navigate = useNavigate()            // ✅ REQUIRED FOR SEARCH

  const handleSearch = () => {
    if (!query.trim()) return
    navigate(`/search?q=${query}`)
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
          <p>🛒 Cart</p>
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
