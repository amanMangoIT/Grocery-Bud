import React from "react";
import Singleitem from "./Singleitem";

const Items = ({ items, removeItem }) => {
  console.log("dgf", items);
  return (
    <>
      {items.map((item) => {
        return <Singleitem key={item.id} item={item} removeItem={removeItem} />;
      })}
    </>
  );
};

export default Items;
