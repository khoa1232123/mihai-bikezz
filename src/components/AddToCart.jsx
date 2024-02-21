import React from "react";
import { useShoppingCart } from "use-shopping-cart";

const AddToCart = ({ className, text, icon, bike, currency }) => {
  const { addItem } = useShoppingCart();
  return (
    <button
      className={className}
      onClick={() => {
        addItem({ ...bike, currency: currency });
      }}
    >
      <div className="">{text}</div>
      <div className="">{icon}</div>
    </button>
  );
};

export default AddToCart;
