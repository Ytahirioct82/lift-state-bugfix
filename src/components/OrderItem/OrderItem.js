import "./OrderItem.css";

const OrderItem = ({ item, onClick }) => {
  const { name, price, quantity } = item;

  return (
    <div className="OrderItem">
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <p>Quantity: {quantity} </p>
      <button onClick={onClick}>Remove</button>
    </div>
  );
};

export default OrderItem;
