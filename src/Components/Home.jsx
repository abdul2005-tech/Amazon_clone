import React from 'react';
import cos from './cos.avif'
import frag from './frag.jpeg'
import logo from './logo.jpeg'
import furniture from './furniture.jpeg'
import grocery from './gros.avif'
import Slider from './Slider';
import { Link, useLoaderData } from 'react-router-dom';
import cos1 from './cos1.jpg'
import cos2 from './cos2.jpg'
import cos3 from './cos3.jpeg'
import cos4 from './cos4.jpg'
import frag1 from './frag1.jpeg'
import frag2 from './frag2.jpeg'
import frag3 from './frag3.jpeg'
import frag4 from './frag4.jpeg'
import fur1 from './fur1.jpeg'
import fur2 from './fur2.jpeg'
import fur3 from './fur3.jpeg'
import fur4 from './fur4.jpeg'
import gor1 from './gor1.jpeg'
import gor2 from './gor2.jpeg'
import gor3 from './gor3.jpeg'
import gor4 from './gor4.jpeg'

const Home = () => {
  const data = useLoaderData();
  let beauty = data.filter((item) => (
    item.category == 'beauty'

  ))
  let fragnances = data.filter((item) => (
    item.category == 'fragrances'

  ))
  let furni = data.filter((item) => (
    item.category == 'furniture'

  ))
  let groceries = data.filter((item) => (
    item.category == 'groceries'

  ))
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  console.log(groceries.length)
  const bannerImages = [cos, frag, furniture, grocery];
  return (
    <>
      <Slider images={bannerImages} />

      <div className="con1">
        <div className="left">
          <div className="l1">
            <div className="l11"><br />Glow Up Essentials <br />
              Exciting offers on beauty products you’ll love</div>
            <div className="l12">
              <div className="l111"><img src={cos1} alt="logo" /></div>
              <div className="l112"><img src={cos2} alt="logo" /></div>
              <div className="l113"><img src={cos3} alt="logo" /></div>
              <div className="l114"><img src={cos4} alt="logo" /></div>
            </div>
            <div className="l13"><Link to='/beauty'>See all deals</Link></div>
          </div>
          <div className="l2">
            <div className="l11"><br />Trending in Fragrance <br />
              Irresistible scents with exciting offers</div>
            <div className="l12">
              <div className="l111"><img src={frag1} alt="logo" /></div>
              <div className="l112"><img src={frag2} alt="logo" /></div>
              <div className="l113"><img src={frag3} alt="logo" /></div>
              <div className="l114"><img src={frag4} alt="logo" /></div>
            </div>
            <div className="l13"><Link to='/fragnance'>See all deals</Link></div>
          </div>
          <div className="l3">
            <div className="l11"><br />Trending in Furniture <br />
              Top furniture picks with exciting offers</div>
            <div className="l12">
              <div className="l111"><img src={fur1} alt="log" /></div>
              <div className="l112"><img src={fur2} alt="log" /></div>
              <div className="l113"><img src={fur3} alt="log" /></div>
              <div className="l114"><img src={fur4} alt="log" /></div>
            </div>
            <div className="l13"><Link to='/furniture'>See all deals</Link></div>
          </div>
          <div className="l4">
            <div className="l11"><br />Freshness You Can Trust <br />
              Exciting offers on daily grocery essentials</div>
            <div className="l12">
              <div className="l111"><img src={gor1} alt="log" /></div>
              <div className="l112"><img src={gor2} alt="log" /></div>
              <div className="l113"><img src={gor3} alt="log" /></div>
              <div className="l114"><img src={gor4} alt="log" /></div>
            </div>
            <div className="l13"><Link to='/grocery'>See all deals</Link></div>
          </div>
        </div>
        <div className="right">
          <div className="r1">
            {beauty.map((item) => {
              return ( // Explicitly return the JSX
                <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                  <div className="r11" >
                    <div className="r111"><img src={item.images[0]} alt="logo" /></div>
                    <div className="r112">{item.title}</div>
                    <div className="r113"><p>From</p> $ {item.price}</div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="r2">
            {furni.map((item) => {
              return ( // Explicitly return the JSX
                <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                  <div className="r12">
                    <div className="r111"><img src={item.images[0]} alt="logo" /></div>
                    <div className="r112">{item.title}</div>
                    <div className="r113"><p>From</p> $ {item.price}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="lastproduct1">
        <div className="lp">
          {fragnances.map((item) => {
            return ( // Explicitly return the JSX
              <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                <div className="r11">
                  <div className="r111"><img src={item.images[0]} alt="logo" /></div>
                  <div className="r112">{item.title}</div>
                  <div className="r113"><p>From</p> $ {item.price}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <Slider images={bannerImages} />
      <div className="lastproduct">
        <div className="lp">
          {beauty.map((item) => {
            return ( // Explicitly return the JSX
              <Link to={`/product/${item.id}`} key={item.id} style={{ textDecoration: 'none' }}>
                <div className="r11">
                  <div className="r111"><img src={item.images[0]} alt="logo" /></div>
                  <div className="r112">{item.title}</div>
                  <div className="r113"><p>From</p> $ {item.price}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="backtotop" onClick={scrollToTop}>
        Back to top
      </div>
      <div className="info">
        <div className="in1">
          <br />
          <p>Get to Know <br />Us</p><br />
          <a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">About Amazon</a><br />
          <a href="https://amazon.jobs/en/">Careers</a><br />
          <a href="https://press.aboutamazon.com/in/press-release-archive">Press Releases</a><br />
          <a href="https://www.amazon.science/">Amazon Science</a>
        </div>
        <div className="in2">
          <p>Connect with<br />Us</p><br />
          <a href="https://www.facebook.com/AmazonIN">Facebook</a><br />
          <a href="https://x.com/AmazonIN">Twitter</a><br />
          <a href="https://www.instagram.com/amazondotin/#">Instagram</a><br /></div>
        <div className="in3">
          <p>Make Money with Us</p><br />
          <a href="https://www.facebook.com/AmazonIN">Sell on Amazon</a><br />
          <a href="https://x.com/AmazonIN">Sell under Amazon Accelerator</a><br />
          <a href="https://www.instagram.com/amazondotin/#">Protect and Build Your Brand</a><br />
          <a href="https://x.com/AmazonIN">Amazon Global Selling</a><br />
          <a href="https://x.com/AmazonIN">Supply to Amazon</a><br />

        </div>
        <div className="in4">
          <p>Let Us Help You</p><br />
          <a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Your Account</a><br />
          <a href="https://amazon.jobs/en/">Returns Centre</a><br />
          <a href="https://press.aboutamazon.com/in/press-release-archive">Recalls and Product Safety Alerts</a><br />
          <a href="https://www.amazon.science/">Help</a>
        </div>
      </div>
      <div className="extra">
        <div className="e1"><img src={logo} alt="logo" /></div>
        <div className="e2"><select name="lang" id="lang">
          <option value="o1">🌍 English</option>
          <option value="o2">🌍 Hindi</option>
          <option value="o3">🌍 Tamil</option>
        </select></div>
        <div className="e3"><select name="country" id="c">
          <option value="c1">India</option>
          <option value="c2">USA</option>
        </select></div>
      </div>
      <div className="footer">
        <div className="f1">
          <div className="f11">
            <p className='pa'>AbeBooks</p>
            <p>Books, art <br />
              & collectibles</p><br />
            <p className='pa'>Shopbop</p>
            <p>Designer <br />
              Fashion Brands</p>
          </div>
          <div className="f12">
            <p className='pa'>Amazon Web Services</p>
            <p>Scalable Cloud <br />
              Computing Services
            </p><br />
            <p className='pa'>Amazon Business</p>
            <p>Everything For <br />
              Your Business
            </p>
          </div>
          <div className="f13">
            <p className='pa'>Audible</p>
            <p>Download <br />
              Audio Books</p><br />
            <p className='pa'>Amazon Prime Music</p>
            <p>100 million songs, ad-free <br />
              Over 15 million podcast episodes</p>
          </div>
          <div className="f14">
            <p className='pa'>IMDb</p>
            <p>Movies, TV <br />
              & Celebrities</p>
          </div>
        </div>
        <div className="f2">
          <div>Conditions of Use & Sale  Privacy Notice  Interest-Based Ads</div>
          <div>© 1996-2026, Amazon.com, Inc. or its affiliates</div>
        </div>
      </div>
    </>
  )
}

export default Home