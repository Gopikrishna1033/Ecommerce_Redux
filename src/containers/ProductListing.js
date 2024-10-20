import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponents from './ProductComponent'
import axios from 'axios'
import { setProducts } from '../redux/actions/ProductActions';
const ProductListing = () => {

    const products = useSelector((state)=>state)
    const dispatch = useDispatch();


    const fetchproducts = async()=>{
        const response = await axios.get('https://fakestoreapi.com/products')
        .catch((err)=>{
            console.log("Error",err);
        })
        dispatch(setProducts(response.data))
    }

    useEffect(()=>{
        fetchproducts();
    },[])

    console.log("products",products)
  return (
    <div>
        <ProductComponents></ProductComponents>
    </div>
  )
}

export default ProductListing