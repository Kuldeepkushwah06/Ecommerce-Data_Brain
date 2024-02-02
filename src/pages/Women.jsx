import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import { fetchProducts } from '../redux/Slice';
import { useNavigate } from 'react-router-dom';

const Women = () => {

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const [womenCategory, setWomenCategory] = useState([]);

  const navigate = useNavigate()
  const clickHandler = () => {
    navigate('/buyForm')
  }


  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }

    // Use the filter function to update the state with the filtered array
    setWomenCategory(() => products.filter((item) => item.category === "women's clothing"));
  }, [dispatch, status, products]); // Include products in the dependency array

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: Unable to fetch data</div>;
  }

  console.log(womenCategory)

  
  return (
    <div className='grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 max-w-6xl p-1 mx-auto space-y-10 space-x-5 mr-5 min-h-[70vh]'>
      {
        womenCategory.map((item) => {
          return (
            <div className="flex flex-col items-center justify-between 
    hover:scale-105 transition duration-300 ease-in gap-2 p-3 mt-10 ml-5 rounded-xl outline bg-slate-800">
      <div>
        <h1 className="text-slate-200 font-semibold text-lg text-left truncate w-40 mt-1"
        >{item.title}</h1>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left"
        >{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
      </div>

      <div className="h-[180px]">
        <img src={item.image} alt='Not found' className='w-full h-full' />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </div>

        <button
                  className="text-gray-300 border-2 border-gray-700 rounded-full font-semibold
              text-[8px] p-1 px-1 uppercase
              hover:bg-gray-700
              hover:text-white transiton duration-300 ease-in"
              onClick={clickHandler}
                  >
                  Buy Now
                </button>

      </div>
    </div>
          )
        })
      }
    </div>
  )
}

export default Women