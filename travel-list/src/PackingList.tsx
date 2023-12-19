// import the items component
import Items from "./Items";

// first import the list of items to be used
import { initialItems } from "./App";

interface Props {
  items: itemsProps[];
}
interface itemsProps {
  id: number;
  description: string;
  packed: boolean;
  quantity: number;
}

const PackingList = ({ items }: Props) => {
  return (
    <>
      <div className="list">
        <ul>
<<<<<<< HEAD
          {/* get the itemList here */}

          {items.map((item) => (
=======
          {initialItems.map((item) => (
            //Wrap the item in an array
>>>>>>> 3475f7f9f39b5282be28679e304ce984714a37da
            <Items items={[item]} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default PackingList;
