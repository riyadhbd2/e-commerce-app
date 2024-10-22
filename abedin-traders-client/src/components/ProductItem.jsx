import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const ProductItem = ({ item }) => {
  const { name, _id, image, price } = item;
  const { currency } = useContext(ShopContext);

  return (
    <div>
      <Link className="text-gray-700 cursor-pointer" to={`/product/${_id}`}>
        <div className="overflow-hidden">
          <img
            className="hover:scale-110 transition ease-in-out"
            src={image[0]}
            alt=""
          />
        </div>
        <p className="pt-3 pb-1 text-sm">{name}</p>
        <p className="text-sm font-medium">
          {currency}
          {price}
        </p>
        <p>{}</p>
      </Link>
    </div>
  );
};

export default ProductItem;
