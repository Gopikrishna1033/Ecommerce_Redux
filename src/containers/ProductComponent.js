import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Card, CardActionArea,CardContent,CardMedia, Typography } from '@mui/material';

const ProductComponents = () => {
    const products = useSelector((state)=>state.allproducts.products);
    // const{id, title}  = products[0];
    const renderlist = products.map((product)=>{
    const {id,title,image,price,category} = product;


    return ( 
        <div  key={id} >
            <Link to={`/product/ ${id}`}>
                <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea>
                    <CardMedia 
                    component = "img"
                    image={image}
                    alt = {title}
                    style={{
                        height: '50vh',       // Fixed height for all images
                        objectFit: 'contain',   // Ensures images are cropped to fill the area while maintaining aspect ratio
                        width: '100%',
                    }}
                    />
                    <CardContent>
                        <Typography variant='body2' style={{fontSize:"1rem",fontWeight:"600",fontFamily:"Open sans"}}>{title}</Typography>
                        <Typography variant='body2'>$ {price}</Typography>
                        <Typography variant='body2'>{category}</Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
        
            </Link>
        </div>
    );
   });
  return (
    <div  
     style={{
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)',   // 4 cards per row
        gap: '20px',                             // Gap between cards
        padding: '20px',                         // Padding around the grid
      }}>
        {renderlist}
    
    </div>
  );
};

export default ProductComponents