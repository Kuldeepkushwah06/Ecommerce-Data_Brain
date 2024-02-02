import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/Slice';
import Men from '../pages/Men';

const Filter = ({menStatus}) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const [menCategory, setMenCategory] = useState([]);
  const [womenCategory, setWomenCategory] = useState([]);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }

    // Use the filter function to update the state with the filtered array
    setMenCategory(() => products.filter((item) => item.category === "men's clothing"));
    setWomenCategory(() => products.filter((item) => item.category === "women's clothing"));
  }, [dispatch, status, products]); // Include products in the dependency array

  

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: Unable to fetch data</div>;
  }

  console.log("men category", menCategory);
  console.log("women clothing", womenCategory)
 

  return (
    <div className=''>
        
      
        {
            menStatus && (
                menCategory.map((item)=>{
                    return(<Men item={item}/>)
                })
                )
        }
        {/* {
            womenCategory.map((item)=>{
                return(<Women item={item}/>)
            })
        } */}
    </div>
  );
};

export default Filter;
