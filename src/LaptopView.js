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
                maxWidth: '35%',
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
    <div style={{width:"85%", margin:"auto"}}>
      <h2 style={{ margin: "auto", textAlign: "center", marginBottom: "20px", color:"#3"}}>{item?.name}</h2>
      {Object.entries(item).map(([key, value]) => ( 
        !(key === 'name' || key === 'id' || key === 'updated_at' || key === 'status' || key === 'created_at' || key === 'image' || key === 'external_image') &&
        <TableRow sx={{width:"100%"}}>
          <TableCell sx={{ fontSize: "18px", width:"50%", fontWeight:"600", textAlign:"center" }} >{key.charAt(0).toUpperCase() + key.slice(1)}</TableCell>
          <TableCell sx={{ fontSize: "18px", width:"50%", textAlign:"center"  }}>{String(value).replace(/â€‰/g, ' ')}</TableCell>
        </TableRow>
      ))}
    </div>
  );
};
