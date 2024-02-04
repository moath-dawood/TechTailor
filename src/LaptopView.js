import React from "react";
import ReactModal from "react-modal";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useState } from "react";
export default function LaptopView({ laptop, lapPrice, mobile, mobilePrice }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      {laptop ? (
        <div className="img">
          <img className="LapImage" src={laptop.external_image || laptop.image} alt={laptop.name} onClick={openModal} style={{ cursor: 'pointer' }} />
          <div className="img-overlay img-overlay--blur">
            <label style={{ backgroundColor: "rgba(24, 37, 39, 0.9)", marginBottom: "10px", paddingLeft: "15px", paddingRight: "15px", borderRadius: "15px" }}>{laptop.name}</label>
            <label style={{ backgroundColor: "rgba(24, 37, 39, 0.9)", paddingLeft: "15px", paddingRight: "15px", borderRadius: "15px" }}>{lapPrice}$</label>
          </div>
          <ReactModal
            isOpen={modalIsOpen}
            laptop={laptop}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              content: {
                maxWidth: '35%',
                margin: 'auto',
              },
            }}
          >
            <Details item={laptop} />
          </ReactModal>
        </div>
      ) : null}

      {mobile ? (
        <div className="img">
          <img className="PhoneImage" src={mobile.external_image || mobile.image} alt={mobile.name} onClick={openModal} style={{ cursor: 'pointer' }} />
          <div className="img-overlay img-overlay--blur">
            <label style={{ backgroundColor: "rgba(24, 37, 39, 0.9)", marginBottom: "10px", paddingLeft: "15px", paddingRight: "15px", borderRadius: "15px" }}>{mobile.name}</label>
            <label style={{ backgroundColor: "rgba(24, 37, 39, 0.9)", paddingLeft: "15px", paddingRight: "15px", borderRadius: "15px" }}>{mobilePrice}$</label>
          </div>
          <ReactModal
            isOpen={modalIsOpen}
            mobile={mobile}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
              },
              content: {
                maxWidth: '40%',
                margin: 'auto',
              },
            }}
          >
            <Details item={mobile} />
          </ReactModal>
        </div>
      ) : null}
    </div>
  );
}
function Details({ item }) {

  return (
    <div style={{ width: "fit-content", margin: "auto" }}>
      <h2 style={{ margin: "auto", textAlign: "center", marginTop: "10px", padding: "15px", backgroundColor: "#138A5F", marginBottom: "20px", borderRadius: "10px", width: "fit-content", color: "white" }}>{item?.name}</h2>
      {Object.entries(item).map(([key, value]) => (
        !(key === 'name' || key === 'id' || key === 'updated_at' || key === 'status' || key === 'created_at' || key === 'image' || key === 'external_image') &&
        <TableRow sx={{ width: "100%", margin: "auto" }}>
          <TableCell sx={{ fontSize: "18px", width: "50%", fontWeight: "600", textAlign: "left" }}>{key.replace(/_/g, ' ').toUpperCase()}</TableCell>
          <TableCell sx={{ fontSize: "18px", width: "50%", textAlign: "left" }}>{typeof value === 'boolean' ? (value ? 'Yes' : 'No') : String(value).replace(/â€‰/g, ' ')}</TableCell>
        </TableRow>
      ))}
    </div>
  );
};
