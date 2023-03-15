import React from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { useState } from "react";

function Product() {
  const navigate = useNavigate();

  const [goToProduct, setGoToProduct] = useState(() => {
    return false;
  });

  return (
    <div>
      <h4>Product</h4>
      <br />
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </button>
      <br />
      <Link to={`/product/details/5`}>
        <button>Product Details</button>
      </Link>
      <br />
      {goToProduct && <Navigate to="/product/details/3" />}
      <button
        onClick={() => {
          setGoToProduct({ goToProduct: true });
        }}
      >
        Navigate to Product - 3 (UseState)
      </button>
    </div>
  );
}

export default Product;
