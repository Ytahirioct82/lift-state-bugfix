import Item from "../Item/Item";
import "./Items.css";

const Items = ({ items, handleAddToOrder }) => {
  return (
    <article className="Items">
      {items.map((item) => {
        const { id } = item;
        return <Item key={id} item={item} onClick={() => handleAddToOrder(id)} />;
      })}
    </article>
  );
};

export default Items;
