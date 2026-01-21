import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const Product = () => {
  const data = useLoaderData() || []
  const { id } = useParams()

  const product = data.find(item => item.id === Number(id))

  if (!product) {
    return <h2 style={{ padding: "40px" }}>Product not found</h2>
  }

  return (
    <div className="pp-bg">

      <div className="pp-glass">

        {/* IMAGE SECTION */}
        <div className="pp-left">
          <div className="pp-image-wrapper">
            <img src={product.images[0]} alt={product.title} />
            <span className="pp-discount-badge">
              {product.discountPercentage}% OFF
            </span>
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="pp-right">

          <h1 className="pp-title">{product.title}</h1>

          <div className="pp-rating">
            ⭐ {product.rating} <span> | {product.brand}</span>
          </div>

          <div className="pp-price-box">
            <span className="pp-price">${product.price}</span>
            <span className="pp-mrp">
              M.R.P <del>${Math.round(product.price * 1.3)}</del>
            </span>
          </div>

          <p className="pp-desc">{product.description}</p>

          <div className="pp-features">
            <div>🚚 Free Delivery</div>
            <div>🔄 7-Day Replacement</div>
            <div>🛡 1 Year Warranty</div>
          </div>

          <div className="pp-actions">
            <button className="pp-btn cart">Add to Cart</button>
            <button className="pp-btn buy">Buy Now</button>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Product
