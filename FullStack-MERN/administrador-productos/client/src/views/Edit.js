import React from 'react'
import { Link } from 'react-router-dom'
import ProductForm from '../components/ProductForm'


const Edit = (props) => {
  
  const {product} = props;

  /* return (
    <div className ="container">
      <div className="w-50 m-auto">
        <ProductForm
          formType = {"update"}
        />
      </div>
    </div>
  ) */

  return (
    <div>

      <h4> Update pet </h4>
      <ProductForm formType={"update"} product={product}/>
      <hr/>
      <div className="mt-2">
        <Link to={"/"}>Back to Home</Link>
      </div>
    </div>
  )
}

export default Edit