import React from "react";
import { useShoppingCart } from "use-shopping-cart";
import { useToast } from "./ui/use-toast";

const AddToCart = ({ className, text, icon, bike, currency }) => {
  const {price_id, name, description, image, price, _id} = bike;
  const newBike = {
    id: _id,
    price_id,
    name,
    description,
    image,
    price,
    currency,
  }
  const { addItem } = useShoppingCart();
  const {toast} = useToast();
  return (
    <button
      className={className}
      onClick={() => {
        addItem(newBike);
        toast({title: `${bike.name} has been added to the cart`})
      }}
    >
      <div className="">{text}</div>
      <div className="">{icon}</div>
    </button>
  );
};

export default AddToCart;
