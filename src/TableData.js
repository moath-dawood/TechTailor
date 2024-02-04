import React from 'react';
import { useState, useEffect } from 'react';
import Modal from './Edit';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';

export function Title({ selectedbtn }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2 style={{ textTransform: "uppercase", fontFamily: "inherit", margin: "auto", marginBottom: "20px", margintop: "20px", textAlign: "center", color: "#138A5F", width: "fit-content", backgroundColor: "#d0d0d0", padding: "20px", borderRadius: "15px" }}>{selectedbtn}</h2>
    </div>
  )

}

export function SearchBar({ component, handleDelete, selectedbtn, onQueryChange, operationResult }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemid, setitemid] = useState(null);
  const [query, setQuery] = useState('');

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    setitemid(item.id);
  };
  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };
  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onQueryChange(value)
  };
  useEffect(() => {

  }, [selectedbtn]);

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "100%", margin: "auto" }}>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        style={{ height: "25px", padding: "20px", fontSize: "18px", marginBottom: "20px", borderRadius:"10px" }}
      />
      {operationResult && <Alert severity="success">{operationResult}</Alert>}

      {component.results ? (
        <>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>

              {component.results.map(item => (
                <tr key={item.id}>
                  <td style={{ padding: "10px", textAlign:"center" }}>{item.id}</td>
                  <td style={{padding:"10px"}}>{String(item.name).replace(/â€‰/g, ' ')}</td>
                  <td style={{ textAlign: "right" }}>
                    <Button variant="outlined"
                      sx={{
                        "&:hover": {
                          bgcolor: "#d0d0d0",
                          borderRadius: "10px",
                          borderColor: "#138A5F",
                          color: "#138A5F",
                          fontWeight: "600"
                        },
                        color: "white",
                        margin: "auto",
                        borderColor: "white",
                        borderRadius: "10px",
                        marginRight: "5px",
                        fontSize: "12px",
                        cursor: "pointer",
                        backgroundColor: "#138A5F",
                      }}
                      onClick={() => handleEditClick(item)}> EDIT </Button>
                    <Button variant="outlined"
                      sx={{
                        "&:hover": {
                          bgcolor: "#d0d0d0",
                          borderRadius: "10px",
                          borderColor: "red",
                          color: "red",
                          fontWeight: "600"
                        },
                        color: "white",
                        margin: "auto",
                        borderRadius: "10px",
                        fontSize: "12px",
                        cursor: "pointer",
                        backgroundColor: "red",
                      }}
                      onClick={() => handleDelete(item.id)}> DELETE </Button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>

          {selectedItem && (
            <Modal
              isOpen={isModalOpen}
              onClose={closeModal}
              selectedbtn={selectedbtn}
              selectedItem={selectedItem}
              itemid={itemid}

            />

          )}

        </>
      ) : (
        <p>No data available</p>
      )}

    </div>
  );
}
export function Numresult({ component }) {
  return (
    <p style={{ marginBottom: "10px" }}>
      <strong>{component}</strong> results found
    </p>
  );
}
