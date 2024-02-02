import React from 'react'
import { useNavigate, } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {storeData} from '../redux/itemSlice'

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const clickHandler = (item) => {
    dispatch(storeData(item));
    navigate('/buyForm')
  }
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
          onClick={()=>clickHandler(item)}
        >
          Buy Now
        </button>

      </div>
    </div>
  )
}

export default Card