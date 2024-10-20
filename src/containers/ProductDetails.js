import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct ,removeSelectedProduct} from '../redux/actions/ProductActions'
import { Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import useStyles from './Styles'

const ProductDetails = () => {
    const classes = useStyles()
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
        <div  className='ui grid container' >
            {Object.keys(product).length === 0 ? (
                <div>Loading product details...</div>
            ) : (
                <div>
                    
                    <Card style={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '70%',          // Set a fixed width, e.g., 50% of the viewport
                            height:"70vh",      // Or set a max width for better responsiveness
                            margin: 'auto',         // Center the card horizontally
                        }}>
                        <CardActionArea style={{display:'flex'}}>
                            <CardMedia
                                component="img"
                                image={image}
                                alt={title}
                                 /* style={{
                                    height: '45vh',       // Fixed height for all images
                                    objectFit: 'contain',   // Ensures images are cropped to fill the area while maintaining aspect ratio
                                    width: '50%',
                                }}  */
                               className={classes.Detailsmedia}
                            />
                            <div style={{display: 'flex', flexDirection: 'column', padding: '16px'}}>
                            <Typography variant='body2' className={classes.title}>{title}</Typography>
                            <Typography variant='body2'  className={classes.pCategory}> <b>$</b> {price}</Typography>
                            <Typography variant='body2' className={classes.pCategory}>{category}</Typography>
                            <Typography variant='body2'  className={classes.pCategory}>{description}</Typography>
                            <div  style={{marginTop:"12%"}}>
                            <Button variant='contained' style={{width:"12.5vw",background:"#2ED573",fontSize:"0.8rem"}}>Add to wish list <FavoriteIcon style={{color:"red",marginLeft:"10px"}}/> </Button>
                            <Button variant='contained'  style={{width:"10vw",marginLeft:"10px",fontSize:"0.8rem"}} >Add to Cart</Button> 
                            </div>
                            </div>
                            
                        </CardActionArea>
                    </Card>
                </div>
            )}
        </div>
    );
}

export default ProductDetails