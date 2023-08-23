import Grid from "./components/Grid/Grid";
import Menu from "./components/Menu/Menu";
import Order from "./components/Order/Order";
import { addToOrder, removeFromOrder } from "./helpers/orderHelpers";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState({});

  const API_URL = "https://px32id5fdg.execute-api.us-east-1.amazonaws.com";

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch(`${API_URL}/items`);
    const json = await res.json();
    const { data } = json;
    setItems(data);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToOrder = (id) => {
    const updatedOrder = addToOrder(order, id);
    setOrder(updatedOrder);
  };

  const handleRemoveFromOrder = (id) => {
    const updatedOrder = removeFromOrder(order, id);
    setOrder(updatedOrder);
  };

  const orderItems = items
    .filter((item) => Boolean(order[item.id]))
    .map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: order[item.id],
    }));

  const renderLoadingOrMenu = () => {
    if (loading) {
      return <div className="App--loading">Loading...</div>;
    }

    return <Menu handleAddToOrder={handleAddToOrder} items={items} />;
  };

  return (
    <div className="App">
      <h1>Our Menu</h1>
      <Grid className="App__menu-grid">
        {renderLoadingOrMenu()}
        <Order handleRemoveFromOrder={handleRemoveFromOrder} orderItems={orderItems} />
      </Grid>
    </div>
  );
}

export default App;
