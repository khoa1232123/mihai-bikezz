import React from "react";

const AddToCart = ({className, text, icon}) => {
  return <button className={className}>
    <div className="">{text}</div>
    <div className="">{icon}</div>
  </button>;
};

export default AddToCart;
