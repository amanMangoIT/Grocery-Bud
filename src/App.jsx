import { useState } from "react";

import "./App.css";
import Form from "./Form";
import Items from "./Items";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const getListFromLocalStorage = JSON.parse(
  localStorage.getItem("list") || "[]",
);

function App() {
  const [items, setItems] = useState(getListFromLocalStorage);

  //---------AddItem Functionality---------//
  const addItem = (itemname) => {
    const newItem = {
      name: itemname,
      completed: false,
      id: nanoid(),
    };
    const allNewItems = [...items, newItem];
    setItems(allNewItems);
    setLocalStorage(allNewItems);
    toast.success("Item Added Succesfully");
  };

  //---------Remove Functionality---------//
  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    localStorage.removeItem("list");
    toast.success("Item Deleted Successfully Succesfully");
  };

  //---------Edit Functionality---------//
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = {
          ...item,
          completed: !item.completed,
        };
        return newItem;
      }
      return item;
    });
    return newItems;
  };

  //--------------Return----------------//
  return (
    <>
      <ToastContainer />
      <section className="section-center">
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} editItem={editItem} />
      </section>
    </>
  );
}

export default App;
