import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import './App.css'

function App() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">ShopEasy</div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="login-btn">Login</button>
      </nav>


      <section className="hero">

        <div className="hero-content">
          <h1>Find products you love</h1>

          <p>
            Discover our latest products at amazing prices!
          </p>

          <button
            className="shop-btn"
            onClick={() => window.open("https://www.amazon.in", "_blank")}
            >
            Shop Now
          </button>
        </div>

        <div className="hero-visual">
          <div className="floating-card card-one">
            <div className="card-icon">🛍️</div>
            <div>
              <strong>Easy Shopping</strong>
              <span>Everything you need</span>
            </div>
          </div>

          <div className="floating-card card-two">
            <div className="card-icon">⭐</div>
            <div>
              <strong>Best Quality</strong>
              <span>Top rated products</span>
            </div>
          </div>

          <div className="hero-circle">
            <div className="shopping-bag">🛒</div>
          </div>
        </div>

      </section>


      <section className="products-section">

        <div className="section-heading">
          <h2>Featured Products</h2>
          <p>Explore our popular products</p>
        </div>

        <div className="products">

          <div className="product-card">
            <div className="product-image">🎧</div>
            <p className="category">Electronics</p>
            <h3>Wireless Headphones</h3>
            <div className="product-bottom">
              <span>$59.99</span>
              <button>Buy Now</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">⌚</div>
            <p className="category">Accessories</p>
            <h3>Product 1</h3>
            <div className="product-bottom">
              <span>$10</span>
              <button>Buy Now</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">🎒</div>
            <p className="category">Lifestyle</p>
            <h3>Product 2</h3>
            <div className="product-bottom">
              <span>$20</span>
              <button>Buy Now</button>
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">👟</div>
            <p className="category">Fashion</p>
            <h3>Product 3</h3>
            <div className="product-bottom">
              <span>$69.99</span>
              <button>Buy Now</button>
            </div>
          </div>

        </div>

      </section>


      <footer>
        <p>© 2026 ShopEasy. All rights reserved.</p>
      </footer>

    </div>
  )
}

export default App