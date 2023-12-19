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
          {/* get the itemList here */}

          {items.map((item) => (
            <Items items={[item]} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default PackingList;
