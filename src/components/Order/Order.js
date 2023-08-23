import OrderItem from "../OrderItem/OrderItem";
import "./Order.css";

const Order = ({ handleRemoveFromOrder, orderItems }) => {
  const renderContent = () => {
    if (!orderItems.length) {
      return <p>Choose something yummy</p>;
    }

    return orderItems.map((item) => (
      <OrderItem key={item.id} item={item} onClick={() => handleRemoveFromOrder(item.id)} />
    ));
  };
  return (
    <div className="Order">
      <h2>Your order</h2>
      {renderContent()}
    </div>
  );
};

export default Order;
