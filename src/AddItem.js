import { useState } from "react";
import {PropTypes} from "prop-types";
function AddItem(props) {
  // Initialize state variables
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const addItemButtonPressed = () => {
    props.addItem({ name: name, price: price, type: type, brand: brand });
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  };
  return (
    <div className="container">
        <div className="row mt-3">
            <h2>Add an Item</h2>
        </div>
        <div className="row mt-3">
            <div className="col">
                {/* Name input field */}
                <label htmlFor="name-field-add">Name: </label>
                <input
                type="text"
                id="name-field-add"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="col">
                {/* Price input field */}
                <label htmlFor="price-field-add">Price: </label>
                <input
                type="number"
                id="price-field-add"
                className="form-control"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div className="col">
                {/* Type input field */}
                <label htmlFor="type-field-add">Type: </label>
                <input
                type="text"
                className="form-control"
                id="type-field-add"
                value={type}
                onChange={(e) => setType(e.target.value)}
                />
            </div>
            <div className="col">
                {/* Brand input field */}
                <label htmlFor="brand-field-add">Brand: </label>
                <input
                type="text"
                className="form-control"
                id="brand-field-add"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                />
            </div>
        </div>
        <div className="row mt-3">
            <div className="col-4" />
            {/* Search button */}
            <button type="button" className="col-4 btn btn-success" onClick={addItemButtonPressed}>
            Add Item
            </button>
        </div>
    </div>
  );
}

PropTypes.AddItem = {
    name: PropTypes.string,
    price: PropTypes.number,
    type: PropTypes.string,
    brand: PropTypes.string,
    addItem: PropTypes.func
};

export default AddItem;
