interface itemProp {
  description: string;
  quantity: number;
  id: number;
  packed: boolean;
}
interface item {
  items: itemProp[];
}

const Items = ({ items }: item) => {
  return (
    <>
      <li>
        <span style={items.packed ? { textDecoration: "line-through" } : {}}>
          {items.description} {items.quantity}
        </span>
        <button>❌</button>
      </li>
    </>
  );
};

export default Items;
