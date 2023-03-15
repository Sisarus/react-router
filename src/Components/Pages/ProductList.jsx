import React from "react";
import { useNavigate } from "react-router-dom";

function ProductList() {
  const navigate = useNavigate();
  return (
    <div>
      <h4>ProductList</h4>
      <br />
      <button
        onClick={() => {
          navigate("/product/create");
        }}
      >
        Add Product
      </button>
    </div>
  );
}

export default ProductList;
