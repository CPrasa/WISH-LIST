import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CreateProduct() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("animManga");
  const [data, setData] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/items').then((response) => {
      setData(response.data);
    })
  }, [])

  const adddata = () => {
    axios.post("http://localhost:8080/api/items",
      {
        "title": `${title}`,
        "description": `${description}`,
        "category": `${category}`,
        "price": `${price}`
      }).then((response) => {
        console.log(response.data);
        setData(prevData => [...prevData, response.data]);
      })
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

  const handleDelete = () => {
    selectedRows.forEach(id => {
      axios.delete(`http://localhost:8080/api/items/${id}`)
        .then((response) => {
          console.log(`Item with id ${id} deleted.`);
          setData(prevData => prevData.filter(item => item.id !== id));
        })
        .catch((error) => {
          console.error(`Error deleting item with id ${id}:`, error);
        });
    });
    setSelectedRows([]);
  }

  return (
    <div className="container">
      <div style={{ height: '20px' }}></div>
      <h2>CREATE PRODUCT</h2>
      <form>
        <div className="form-group">
          <label htmlFor="itemTitle">Item Title</label>
          <input
            type="text"
            className="form-control"
            id="itemTitle"
            placeholder=""
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder=""
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
            placeholder="$"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div style={{ height: '20px' }}></div>
        <button type="submit" onClick={adddata} className="btn btn-outline-danger">
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
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map(product => (
              <tr key={product.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(product.id)}
                    onChange={() => handleCheckboxChange(product.id)}
                  />
                </td>
                <td>{product.title}</td>
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