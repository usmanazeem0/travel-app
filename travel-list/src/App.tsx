import "./App.css";
import Form from "./Form";
import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

// create the list of items

export const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
  // create the useState for adding items in packing
  const [items, setItems] = useState([]);
  // create a function to rerender it in the list items
  const addItemHandle = (item) => {
    setItems((items) => [...items, item]);
  };
  return (
    <>
      <div className="app">
        <Logo />
        {/* add props to call the function of rerender items */}
        <Form onAddItems={addItemHandle} />
        <PackingList items={items} />
        <Stats />
      </div>
    </>
  );
}

export default App;
