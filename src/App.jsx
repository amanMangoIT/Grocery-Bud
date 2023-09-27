import { useState } from "react";

import "./App.css";
import Form from "./Form";
import { nanoid } from "nanoid";

import Items from "./Items";

const setLocalStorage = (items) => {
  localStorage.setItem("list", JSON.stringify(items));
};

const getListFromLocalStorage = JSON.parse(
  localStorage.getItem("list") || "[]",
);

function App() {
  const [items, setItems] = useState(getListFromLocalStorage);

  const addItem = (itemname) => {
    const newItem = {
      name: itemname,
      completed: false,
      id: nanoid(),
    };
    const allNewItems = [...items, newItem];
    setItems(allNewItems);
    setLocalStorage(allNewItems);
  };

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    localStorage.removeItem('list')
  };

  return (
    <>
      <section className="section-center">
        <Form addItem={addItem} />
        <Items items={items} removeItem={removeItem} />
      </section>
    </>
  );
}

export default App;
