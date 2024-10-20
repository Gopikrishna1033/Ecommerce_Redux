import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Card, CardActionArea,CardContent,CardMedia, Typography } from '@mui/material';
import useStyles from './Styles';
const ProductComponents = () => {
    const classes = useStyles()
    const products = useSelector((state)=>state.allproducts.products);
    // const{id, title}  = products[0];
    const renderlist = products.map((product)=>{
    const {id,title,image,price,category} = product;


    return ( 
        <div  key={id} >
            <Link to={`/product/ ${id}`}>
                <Card className={classes.rootCard}>
                <CardActionArea>
                    <CardMedia 
                    component = "img"
                    image={image}
                    alt = {title}
                    style={{
                        height: '45vh',       // Fixed height for all images
                        objectFit: 'contain',   // Ensures images are cropped to fill the area while maintaining aspect ratio
                        width: '100%',
                    }}
                    />
                    <CardContent>
                        <Typography variant='body2' className={classes.title}>{title}</Typography>
                        <Typography variant='body2'className={classes.pCategory}><b> $</b> {price}</Typography>
                        <Typography variant='body2' className={classes.pCategory}>{category}</Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
        
            </Link>
        </div>
    );
   });
  return (
    <div  className={classes.dataBody}>
        {renderlist}
    
    </div>
  );
};

export default ProductComponents