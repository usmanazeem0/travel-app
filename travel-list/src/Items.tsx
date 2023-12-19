interface Item {
  description: string;
  quantity: number;
  id: number;
  packed: boolean;
}
interface Props {
  items: Item[];
}

const Items = ({ items }: Props) => {
  return (
    <>
      {/* itterate the list of item */}

      {items.map((item) => (
        <li key={item.id}>
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.description} {item.quantity}
            <button>❌</button>
          </span>
        </li>
      ))}
      {/* <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.description} {item.quantity}
        </span>
        <button>❌</button>
      </li> */}
    </>
  );
};

export default Items;
