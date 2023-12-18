// import the items component
import Items from "./Items";

// first import the list of items to be used
import { initialItems } from "./App";

const PackingList = () => {
  return (
    <>
      <div className="list">
        <ul>
          {/* get the itemList here */}

          {initialItems.map((item) => (
            <Items item={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default PackingList;
