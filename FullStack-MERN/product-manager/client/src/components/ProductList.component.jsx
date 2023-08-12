import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const ProductList = props => {
  const {removeFromList} = props;
  const deleteProduct = (productId) => {
    axios.delete("http://localhost:8000/api/products/" + productId)
    .then((res) => removeFromList(productId))
    .catch((err) => console.log("Error: ", err));
  }

  return (
    <div>
      {props.products.map((product, index) => (
        <p key={index}> 
          <Link to={`/products/${product._id}`}>{product.title}</Link>
          <button onClick={(e) => {
              deleteProduct(product._id);
            }}>
            Delete Item
          </button>
        </p>
        
      ))}
    </div>
  );
};

export default ProductList;