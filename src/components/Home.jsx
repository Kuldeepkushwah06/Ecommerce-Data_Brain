import React, { useEffect, useState } from 'react'
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/Slice';
const Home = () => {

    // const API_URL ='https://fakestoreapi.com/products'
    // const [cardData,setCardData]= useState([]);
    // // const [isLoading,setIsLoading]= useState(false);

    // const fetchData= async ()=>{
    //     // setIsLoading(true);
    //     try{
    //         const res = await fetch(API_URL)
    //         const output = await res.json()
    //         setCardData(output)
    //         console.log(output)
    //     }
    //     catch(error){
    //         console.log("data fetch nahi ho raha h",error);
    //     }
    //     // setIsLoading(false)

    // }

    // useEffect(()=>{
    //     fetchData()
    // },[])
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);

    useEffect(() => {
    if (status === 'idle') {
      // Only dispatch fetchProducts if status is 'idle'
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: Unable to fetch data</div>;
  }

    if (status === 'loading') {
        return <div>Loading...</div>;
    }

    if (status === 'failed') {
        return <div>Error: Unable to fetch data</div>;
    }
    return (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 max-w-6xl p-1 mx-auto space-y-10 space-x-5 mr-5 min-h-[70vh]">
            {
                products.map((item) => {
                    return (<Card key={item.id} item={item} />)
                })
            }
        </div>
    )
}

export default Home