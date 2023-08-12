
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "../src/views/Detail";
import ProductList from "./components/ProductList";
import ProductsForm from "./components/ProductForm";
import EditProductList from "./views/Edit";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
            {/* Ruta para la página de inicio */}
            <Route path="/" element={
              <>
                <div className="w-50 m-auto text-center">
                  <h2 className=" mt-3"> PRODUCT MANAGER </h2>
                  <ProductsForm /> {/* Renderizamos el componente ProductsForm aquí */}
                </div>
                <div>
                  <h1 className=" m-auto text-center">All Products</h1>
                  <ProductList />
                </div>
              </>
              } />

              {/* Ruta para los detalles del producto */}
            <Route path="/:id" element={<Detail />} />

            {/* Ruta para formulario de edición (deberías corregir esto ya que tiene el mismo path que la ruta de detalles) */}
            <Route path="/Edit/:id" element={<EditProductList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;