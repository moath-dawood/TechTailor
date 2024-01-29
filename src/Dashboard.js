import React, { useState } from "react";
import { Form, Button, Table } from "react-bootstrap";
export default function DashBoard (){
return (
     <div>
        <div className="btn-group">
        <button className="btn"> Mother Board  </button>
        <button className="btn"> CPU  </button>
        <button className="btn"> GPU </button>
        <button className="btn"> CASE  </button>
        <button className="btn"> INTERNAL_DRIVE  </button>
        <button className="btn"> POWER_SUPPLY  </button>
        <button className="btn"> RAM  </button>
        </div>
        <div className="btn-group">
        <button className="btn">Laptop</button> 
        <button className="btn">Smartphones</button>
        </div>
        <div>
            <SmartphoneList/>
        </div>
    </div>
);
}


const Smartphones = [
  { id: 1, name: "Apple iPhone 12" },
  { id: 2, name: "Honor 90 5G" },
  { id: 3, name: "Infinix Note 12 Pro 5G" },
  { id: 4, name: "OnePlus 10 Pro 5G" },
  { id: 5, name: "POCO X5 Pro" },
  { id: 6, name: "Realme 11 Pro" },
  { id: 7, name: "Samsung Galaxy S23 Plus" },
  { id: 8, name: "Vivo X100 Pro 5G" },
  { id: 9, name: "Xiaomi 12 Pro 5G" },
  { id: 10, name: "Huawei Honor 20i" },
  { id: 11, name: "QiPhone SE" },
];

const SmartphoneList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleEdit = () => {
    // Handle edit functionality here
    console.log("Edit button clicked for ID:", selectedId);
  };

  const handleDelete = () => {
    // Handle delete functionality here
    console.log("Delete button clicked for ID:", selectedId);
  };

  const filteredSmartphones = Smartphones.filter((smartphone) =>
    smartphone.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Form.Control
        type="text"
        placeholder="Search smartphones..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
          </tr>
        </thead>
        <tbody>
          {filteredSmartphones.map((smartphone) => (
            <tr key={smartphone.id}>
              <td>{smartphone.id}</td>
              <td>{smartphone.name}</td>
              <td>
                <Button
                  variant="secondary"
                  onClick={() => setSelectedId(smartphone.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => setSelectedId(smartphone.id)}
                  disabled={selectedId !== smartphone.id}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

