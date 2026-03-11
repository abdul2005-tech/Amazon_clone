import React, { useEffect, useState } from 'react';
import Home from './Home';
const Data = () => {
  const [data, setData] = useState([]); // array

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://dummyjson.com/products');
      const json = await res.json();
      setData(json.products); // extract array
    };
    fetchData();
  }, []);

  let beauty=data.filter((item)=>(
    item.category=='beauty'

  ))
  let fragnances=data.filter((item)=>(
    item.category=='fragrances'

  ))
  let furnitue=data.filter((item)=>(
    item.category=='furniture'

  ))
  let groceries=data.filter((item)=>(
    item.category=='groceries'

  ))
  
  console.log(beauty)

  return (
    <div>
      {/* <Home data={data}/> */}
    </div>
  );
};

export default Data;
