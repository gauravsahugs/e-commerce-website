import React from "react";
import "./Product.css";

function Product({ title, image, rating, price }){
return(
<div className="product">
<div className="product_info">
<p>{title}</p>
<p className="product_price">
    <small>$</small>
    <strong>{price}</strong>
</p>
<div className="product_rating">
    {Array(rating).fill().map((_, i)=>(
<p>⭐</p> ))}
</div>
</div>
<div>
    <img src={image} alt="" />
<button className="cart_button">Add to cart</button>
</div>
</div>

)
}

export default Product;