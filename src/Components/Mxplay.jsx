import React from 'react'
import { useLoaderData,Link } from 'react-router-dom'


const Mxplay = () => {
    const data = useLoaderData() || []
    if (!data.length) {
    return <h2 style={{ padding: "40px" }}>Loading fragnance products...</h2>
  }
  return (
    <div className="b">
      {data.map(item => (
        <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
        <div className="bp1" key={item.id}>

          {/* IMAGE */}
          <div className="bp11">
            <img src={item.images[0]} alt={item.title} />
          </div>

          {/* DETAILS */}
          <div className="bp12">
            <div className="bs1">{item.title}</div>

            <div className="bs2">
              ⭐ {item.rating} / 5
            </div>

            <div className="bs3">
              ${item.price}
              <span className="discount">
                &nbsp;({item.discountPercentage}% OFF)
              </span>
            </div>

            <div className="bs4">
              {item.warrantyInformation || "1 Year Warranty"}
            </div>

            <div className="bs5">
              <button>Add to Cart</button>
            </div>
          </div>
        </div>
        </Link>
      ))}
    </div>
  
  )
}

export default Mxplay
