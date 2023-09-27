import React, { useState } from "react";

const Singleitem = ({ item, removeItem }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="single-item">
        <input
          type="checkbox"
          className="checkbox"
          checked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
        />
        <p
          style={{
            textTransform: "capitalize",
            textDecoration: isChecked && "line-through",
          }}
        >
          {item.name}
        </p>
        <button 
        className="btn btn-remove"
        onClick={() => removeItem(item.id)}
        type="button"
        >Delete</button>
      </div>
    </>
  );
};

export default Singleitem;
