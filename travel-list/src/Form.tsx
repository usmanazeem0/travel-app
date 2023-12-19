import { useState } from "react";

const Form = () => {
  //  define the useState hook

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(0);

  // define the handle submit function
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // now add the data to getOut from form
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);

    // after submit form go back to its initial state
    setQuantity(1);
    setDescription("");
  };
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>

        {/* add select box and input */}

        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Item..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="button">Add</button>
      </form>
    </>
  );
};

export default Form;
