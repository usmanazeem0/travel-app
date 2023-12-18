const Form = () => {
  // define the handle submit function

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your 😍 trip?</h3>

        {/* add select box and input */}

        <select>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input type="text" placeholder="Item..." />
        <button type="button">Add</button>
      </form>
    </>
  );
};

export default Form;
