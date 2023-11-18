import { useState } from "react";
import {PropTypes} from "prop-types";
function SearchBar(props) {
  // Initialize state variables
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };
  return (
    <div className="container">
      <div className="row mt-3">
        <h2>Search for an Item</h2>
      </div>
      <div className="row mt-3">
        <div className="col">
        {/* Name input field */}
        <label htmlFor="name-field">Name: </label>
        <input
          type="text"
          className="form-control"
          id="name-field"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="col">
        {/* Max Price input field */}
        <label htmlFor="price-field">Max Price: </label>
        <input
          type="number"
          id="price-field"
          className="form-control"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        </div>
        <div className="col">
        {/* Type input field */}
        <label htmlFor="type-field">Type: </label>
        <input
          type="text"
          id="type-field"
          className="form-control"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        </div>
        <div className="col">
        {/* Brand input field */}
        <label htmlFor="brand-field">Brand: </label>
        <input
          type="text"
          id="brand-field"
          className="form-control"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
        </div>

      </div>
      <div className="row mt-3">
        <div className="col-4" />
        {/* Search button */}
        <button type="button" className="col-4 btn btn-success" onClick={searchButtonPressed}>
          Search
        </button>
        </div>
    </div>
  );
}

PropTypes.SearchBar = {
  name: PropTypes.string,
  price: PropTypes.number,
  type: PropTypes.string,
  brand: PropTypes.string,
  updateSearchParams: PropTypes.func,
};


export default SearchBar;
