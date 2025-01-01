import React from "react";
import OnSaleSlider from "./OnSaleSlider";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const ProductsOnSale = () => {
  return (
    <div className="ProductsOnSale">
      <span>
        <span>
          <h3>Products On Sale</h3>
          <p> Shop Now! </p>
        </span>
        <button>View all </button>
      </span>

      <OnSaleSlider />
      <div className="pagination">
        <div>
          {" "}
          <IoIosArrowBack />{" "}
        </div>
        <div>
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default ProductsOnSale;
