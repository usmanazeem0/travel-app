// import the items component
import Items from "./Items";

// first import the list of items to be used
import { initialItems } from "./App";

const PackingList = () => {
  return (
    <>
      <div className="list">
        <ul>
          {initialItems.map((item) => (
            //Wrap the item in an array
            <Items items={[item]} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default PackingList;
