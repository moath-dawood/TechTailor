import React from "react";
import ReactModal from "react-modal";
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
                maxWidth: '50%',
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
                maxWidth: '50%',
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
    <div>
      <h2>{item?.name}</h2>
      <ul>
        {Object.entries(item).map(([key, value]) => (
          <li key={key}>
            {key.charAt(0).toUpperCase() + key.slice(1)}: {String(value)}
          </li>
        ))}
      </ul>
    </div>
  );
};
