interface Item {
  description: string;
  quantity: number;
  id: number;
  packed: boolean;
}

interface Props {
<<<<<<< HEAD
  items: Item[];
=======
  items: Item[]; // Change 'item' to 'items' to reflect it's an array
>>>>>>> 3475f7f9f39b5282be28679e304ce984714a37da
}

const Items = ({ items }: Props) => {
  return (
    <>
<<<<<<< HEAD
      {/* itterate the list of item */}

=======
>>>>>>> 3475f7f9f39b5282be28679e304ce984714a37da
      {items.map((item) => (
        <li key={item.id}>
          <span style={item.packed ? { textDecoration: "line-through" } : {}}>
            {item.description} {item.quantity}
<<<<<<< HEAD
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
=======
          </span>
          <button>❌</button>
        </li>
      ))}
>>>>>>> 3475f7f9f39b5282be28679e304ce984714a37da
    </>
  );
};

export default Items;
