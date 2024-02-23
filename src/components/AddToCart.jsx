import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "./ui/use-toast";

const AddToCart = ({ className, text, icon, bike, currency }) => {
  const { addItem } = useShoppingCart();
  const {toast} = useToast();
  return (
    <button
      className={className}
      onClick={() => {
        addItem({ ...bike, id: bike._id, currency: currency });
        toast({title: `${bike.name} has been added to the cart`})
      }}
    >
      <div className="">{text}</div>
      <div className="">{icon}</div>
    </button>
  );
};

export default AddToCart;
