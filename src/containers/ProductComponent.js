import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
const ProductComponents = () => {
    const products = useSelector((state)=>state.allproducts.products);
   // const{id, title}  = products[0];
   const renderlist = products.map((product)=>{
    const {id,title,image,price,category} = product;

    return (
        
        <div  key={id}>
            <Link to={`/product/ ${id}`}>
        <div className="ui link cards">
            <div className="card" style={{height:"100vh",maxHeight:"75vh"}}>
                <div className="image">
                    <img src={image} alt={title} style={{ width: '100%' ,height:"100vh",maxHeight:"50vh"}} />
                </div>
                <div className="content">
                     <div className="header" >{title}</div> 
                     <div className="meta price">${price}</div>
                     <div className="meta">{category}</div>
                </div>
            </div>
        </div>
        </Link>
    </div>
    );
   });
  return (
    <div style={{display:"flex", flexFlow:"wrap", gap:"50px"}}>
        {renderlist}
    </div>
  );
};

export default ProductComponents