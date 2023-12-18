import "./App.css";
import Form from "./Form";

import Logo from "./Logo";
import PackingList from "./PackingList";
import Stats from "./Stats";

// create the list of items

export const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <PackingList />
        <Stats />
      </div>
    </>
  );
}

export default App;
