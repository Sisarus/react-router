import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function CreateProduct() {
  const navigate = useNavigate();
  return (
    <div>
      <h4>CreateProduct</h4>
      <br />
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        Go Back
      </button>
    </div>
  );
}

export default CreateProduct;
