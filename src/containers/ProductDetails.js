import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct ,removeSelectedProduct} from '../redux/actions/ProductActions'
const ProductDetails = () => {
    const product = useSelector((state)=> state.product);
    const {image, title, price, category, description} = product
    const {productId} = useParams()
    const dispatch = useDispatch()
    console.log(productId)
    console.log(product)

    const fetchProductDetails= async ()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err)=>{
            console.log("Err",err)
        })
        dispatch(selectedProduct(response.data));
    }
    useEffect(()=>{
        if(productId&&productId !== ""){
            fetchProductDetails()
        }
        return ()=>{
            dispatch(removeSelectedProduct())
        }
    },[productId])

  return (
        <div className='ui grid container'>
            {Object.keys(product).length === 0 ? (
                <div>Loading product details...</div>
            ) : (
                <div className='ui placeholder segment'>
                    <img src={image} alt={title} style={{ width: '100%', maxWidth: '400px' }} />
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Category: {category}</p>
                    <p>Price: ${price}</p>
                </div>
            )}
        </div>
    );
}

export default ProductDetails