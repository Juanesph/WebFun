import { useState } from "react";
import axios from "axios";


const ProductForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onSubmitHandlerForm = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/products", {title, price, description})
    .then((res)=> {
      props.onHandleAddProducts(res.data);
      console.log("Response", res);})
    .catch((err)=> console.log("Err", err));
  };

  return(
    <div>
      <div>
        <form onSubmit={onSubmitHandlerForm}>
          <div className="formGroup">
            <label htmlFor="Title">Title:</label>
            <input onChange={(e) => setTitle (e.target.value)} type="text" id="title" value={title} />
          </div>

          <div className="formGroup">
            <label htmlFor="Title">Price:</label>
            <input onChange={(e) => setPrice (e.target.value)} type="number" id="price" value={price} />
          </div>

          <div className="formGroup">
            <label htmlFor="Title">Description:</label>
            <input onChange={(e) => setDescription (e.target.value)} type="text" id="description" value={description}/>
          </div>
          {/* <button type="submit">
            Crear
          </button> */}
          <input type="submit" />
        </form>
      </div>
    </div>
  )
}

export default ProductForm;