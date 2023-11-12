import React from 'react';

const Table = ({ headers, data }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/orders">Orders</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/user">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Watch List</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    
    <table className="table table-hover">
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            {Object.values(row).map((value, index) => (
              <td key={index}>{value}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

const App = () => {
  const headers = ['Title', 'Description', 'Category', 'Price'];
  const data = [
    { Title: 'Product 1', Description: 'Description for Product 1', Category: 'Category A', Price: '$100' },
    { Title: 'Product 2', Description: 'Description for Product 2', Category: 'Category B', Price: '$200' },
    // Add more data as needed
  ];

  return (
    <div className="container mt-4">
      <Table headers={headers} data={data} />
    </div>
  );
}

export default App;
