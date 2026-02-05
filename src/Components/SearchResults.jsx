import React from 'react'
import { useLoaderData, useSearchParams, Link} from 'react-router-dom'

const SearchResults = () => {
  const data = useLoaderData() || []
  const [params] = useSearchParams()
  const query = params.get('q')?.toLowerCase().trim() || ''

  if (!query) {
    return <h3 style={{ padding: "20px" }}>Please enter a search term</h3>
  }

  let results = data.filter(item =>
    item.title?.toLowerCase().includes(query)
  )

  return (
    <div style={{ padding: "20px" }}>
      <h2>Results for "{query}"</h2>

      {results.length === 0 && <p>No products found</p>}

      <div className="b">
        {results.map(item => (
        <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>

        <div className="bp1">

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
    </div>
  )
}

export default SearchResults
