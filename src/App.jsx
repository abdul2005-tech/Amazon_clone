import React from 'react'
import { createBrowserRouter,RouterProvider,Link,Outlet } from "react-router-dom";

import Template from './Components/Template'
import Home from './Components/Home'
import Data from './Components/Data'
import Product from './Components/Product';
import Beauty from './Components/Beauty';
import Fragnance from './Components/Fragnance';
import Furniture from './Components/Furniture';
import Grocery from './Components/Grocery';
import Mxplay from './Components/Mxplay';
import SearchResults from './Components/SearchResults';
async function fetcher(){
  const res=await fetch('https://dummyjson.com/products')
  if(!res.ok) throw new Error('failed');
  const data = await res.json();
  return data.products;

}
const router=createBrowserRouter([
  {path:'/',
  element:<Template/>,
  children:[
    {index:true,element:<Home/>,loader:fetcher},
    {path:'mx',element:<Mxplay/>,loader:fetcher},
    {path:'sell',element:<Beauty/>,loader:fetcher},
    {path:'bestseller',element:<Mxplay/>,loader:fetcher},
    {path:'mobiles',element:<Furniture/>,loader:fetcher},
    {path:'todaysdeals',element:<Mxplay/>,loader:fetcher},
    {path:'customer_service',element:<Fragnance/>,loader:fetcher},
    {path:'newreleases',element:<Beauty/>,loader:fetcher},
    {path:'amazon_pay',element:<Fragnance/>,loader:fetcher},
    {path:'fashion',element:<Beauty/>,loader:fetcher},
    {path:'electronics',element:<Furniture/>,loader:fetcher},
    {path:'beauty',element:<Beauty/>,loader:fetcher},
    {path:'fragnance',element:<Fragnance/>,loader:fetcher},
    {path:'furniture',element:<Furniture/>,loader:fetcher},
    {path:'grocery',element:<Grocery/>,loader:fetcher},
    {path: 'product/:id',element: <Product />,loader: fetcher},
    {path:'search',element:<SearchResults/>,loader:fetcher}
  ]
  }
])


const App = () => {
  return <RouterProvider router={router}/>
}

export default App
