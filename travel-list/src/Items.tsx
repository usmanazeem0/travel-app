interface items {
  description: string;
  quantity: number;
  id: number;
  packed: boolean;
}
interface Props {
  item: items[];
}

const Items = ({ item }: Props) => {
  return (
    <>
      <li>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.description} {item.quantity}
        </span>
        <button>❌</button>
      </li>
    </>
  );
};

export default Items;
