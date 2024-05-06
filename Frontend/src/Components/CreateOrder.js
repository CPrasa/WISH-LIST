import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CreateProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("ANIM & MANGA");
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/toys').then((response) => {
      setData(response.data);
    })
  }, [])

  const addData = () => {
    axios.post("http://localhost:3000/toys/add", {
      name,
      description,
      category,
      price
    }).then((response) => {
      console.log(response.data);
      setData(prevData => [...prevData, response.data]);
      setName("");
      setDescription("");
      setPrice("");
      setCategory("ANIM & MANGA");
    }).catch((error) => {
      console.error("Error adding product:", error);
    });
  }
  
  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete the selected items?")) {
      selectedRows.forEach(id => {
        axios.delete(`http://localhost:3000/toys/delete/${id}`)
          .then(() => {
            console.log(`Item with id ${id} deleted.`);
            setData(prevData => prevData.filter(item => item._id !== id));
          })
          .catch((error) => {
            console.error(`Error deleting item with id ${id}:`, error);
          });
      });
      setSelectedRows([]);
    }
  }

  const handleCheckboxChange = (id) => {
    setSelectedRows(prevSelected => {
      if (prevSelected.includes(id)) {
        return prevSelected.filter(item => item !== id);
      } else {
        return [...prevSelected, id];
      }
    });
  }

  return (
    <div className="container">
      <div style={{ height: '20px' }}></div>
      <h2>CREATE PRODUCT</h2>
      <form>
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            className="form-control"
            id="itemName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Select Category:</label>
          <select
            className="form-control"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="ANIM & MANGA">ANIM & MANGA</option>
            <option value="COMICS & SUPERHEROS">COMICS & SUPERHEROS</option>
            <option value="MOVIES & TV">MOVIES & TV</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div style={{ height: '20px' }}></div>
        <button type="button" onClick={addData} className="btn btn-outline-danger">
          Add Product
        </button>
      </form>

      <div style={{ height: '40px' }}></div>

      <div className="container border p-4">
        <h2>PRODUCT LIST</h2>
        <button type="button" className="btn btn-outline-secondary">Update</button>
        <button type="button" className="btn btn-outline-success" onClick={handleDelete}>Delete</button>

        <table className="table table-hover" style={{ boxShadow: '2px 8px 16px rgba(0, 0, 0, 0.2)' }}>
          <thead>
            <tr>
              <th>Select</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map(product => (
              <tr key={product._id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(product._id)}
                    onChange={() => handleCheckboxChange(product._id)}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}