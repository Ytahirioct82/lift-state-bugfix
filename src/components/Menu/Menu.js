import Items from "../Items/Items";
import SearchBar from "../SearchBar/SearchBar";
import { useState } from "react";
import "./Menu.css";

const Menu = ({ items, handleAddToOrder }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  const renderContent = () => {
    if (!filteredItems.length) {
      return <div className="Menu__no-content">No items found!</div>;
    }

    return <Items handleAddToOrder={handleAddToOrder} items={filteredItems} />;
  };

  return (
    <div className="Menu">
      <SearchBar onChange={handleChange} value={query} />
      {renderContent()}
    </div>
  );
};

export default Menu;
