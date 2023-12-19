interface Item {
  description: string;
  quantity: number;
  id: number;
  packed: boolean;
}

interface Props {
  items: Item[]; // Change 'item' to 'items' to reflect it's an array
}

const Items = ({ items }: Props) => {
  return (
    <>
      {items.map((item) => (
        <li key={item.id}>
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.description} {item.quantity}
          </span>
          <button>❌</button>
        </li>
      ))}
    </>
  );
};

export default Items;
