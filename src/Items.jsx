import React from "react";
import Singleitem from "./Singleitem";

const Items = ({ items, removeItem, editItem }) => {
  console.log("dgf", items);
  return (
    <>
      {items.map((item) => {
        return (
          <Singleitem
            key={item.id}
            item={item}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </>
  );
};

export default Items;
