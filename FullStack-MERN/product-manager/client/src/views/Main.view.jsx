import { useEffect, useState } from "react"
import axios from "axios";
import ProductForm from "../components/ProductForm.component";
import ProductList from "../components/ProductList.component";



const Main = () => {
  const [products, setProducts] = useState([]);

  function handleAddProducts(item){
    setProducts((items) => [...items, item]); 
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/products")
    .then((res) => setProducts(res.data))
    .catch((err) => console.log("Error: ", err));
    console.log(products);
  }, []);

  const removeFromList = (productId) => {
    setProducts(products.filter((productos) => productos._id !== productId));
  };

  console.log(products);

return (

  <div>
    <ProductForm products={products} onHandleAddProducts={handleAddProducts}/>
    <ProductList products={products} removeFromList={removeFromList}/>
  </div>
  
  )
}

export default Main;
