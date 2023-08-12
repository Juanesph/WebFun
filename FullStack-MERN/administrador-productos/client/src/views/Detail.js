/* import React,  { useState,useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import axios from "axios"

    const Detail = ()=>{
        const {id} = useParams();
        const [productDetail, setProductDetail ] = useState({})
        const [showDetails, setShowDetails] = useState(false);


        useEffect(()=>{
            const fetchProductsDetails = async () => {
            try{
                    const response = await axios.get(`http://localhost:3000/product/${id}`);
                    setProductDetail(response.data.data);
            } 
                catch(error) {
                    console.error("Response ",error.message)
                }

            }
            fetchProductsDetails();
        },[id]);

        if (Object.keys(productDetail).length === 0) {
            return <div>Cargando...</div>;
          }


        // Handles
            const handleShowDetails = () => {
                setShowDetails(true)
            }

            
        
        return (
            <div>
                <h2> Detalles del Producto</h2>
                <p>Title:{productDetail.title}</p>
                {showDetails && (
                 <>   
                <p>Price:{productDetail.price} </p>
                <p>Description:{productDetail.description} </p>
                <Link to="/" className="btn btn-danger">Volver</Link>
                </>
                )}
                {!showDetails && (
                    <button 
                    onClick={handleShowDetails} 
                    type="submit" 
                    className="btn btn-primary">Ver Detalles</button>
                )}
                <hr/>
                <div className="mt-2">
                  <Link to={"/"}>Back to Home</Link>
                </div>
            </div>
        )
    };

    export default Detail; */

import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../config";
import { useParams } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import { Link } from "react-router-dom";


    const Detail = (props) => {

      const [product, setProduct] = useState({});
      const {id} = useParams();

      const getProduct = () => {
        axios.get(`${baseURL}/product/${id}`)
            .then((response) => {
              setProduct(response.data.data[0])
            })
            .catch((error) => {
              console.log(error);
            });
      }

      const editProduct = (prop, value) => {
        axios.patch(`${baseURL}/product/${id}`, {[prop]: value})
        .then((response) => {
          setProduct({
            ...product,
            [prop]: value
          })
        }) 
      }

      useEffect(getProduct, [id])

      return(
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

    export default Detail;