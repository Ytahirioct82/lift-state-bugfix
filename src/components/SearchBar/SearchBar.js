import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="SearchBar">
      <input value={value} onChange={onChange} type="text" placeholder="Search by item name" />
    </div>
  );
};

export default SearchBar;
