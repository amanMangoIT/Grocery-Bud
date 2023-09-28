import React from "react";

const Singleitem = ({ item, removeItem, editItem }) => {
  console.log("fff", item);
  return (
    <>
      <div className="single-item">
        <input
          type="checkbox"
          className="checkbox"
          checked={item.completed}
          onClick={() => editItem(item.id)}
        />
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: item.completed && "line-through",
          }}
        >
          {item.name}
        </p>
        <button
          className="btn btn-remove"
          onClick={() => removeItem(item.id)}
          type="button"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Singleitem;
