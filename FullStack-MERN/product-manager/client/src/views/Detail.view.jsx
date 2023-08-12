import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  
  const [product, setProduct] = useState();
  const {id} = useParams();

  useEffect(() => {
    getOneProductById();
  }, [id]);

  const getOneProductById = async () => {
    try{
      let res = await axios.get("http://localhost:8000/api/products/" + id);
      setProduct(res.data);
    } catch (err) { 
      console.log(err);
    }
  };

  const deleteProduct = (productId) => {
    axios.delete("http://localhost:8000/api/products/" + productId)
    .then((res) => setProduct(null))
    .catch((err) => console.log("Error: ", err));
  }

  const [deleteSucces, setDeleteSucces] = useState(false);

  return(
    <div>
      <h1>Detail Products</h1>
      {product && <p>Title: {product.title}</p>}
      {product && <p>Price: {product.price}</p>}
      {product && <p>Description: {product.description}</p>}
      {product && (
        <button onClick={(e) => {
          deleteProduct(product._id);
          setDeleteSucces(true);
        }}>
          Delete
        </button>
      )}
      {deleteSucces && <Navigate to="/"/>}
    </div>
  );
};

export default Detail;