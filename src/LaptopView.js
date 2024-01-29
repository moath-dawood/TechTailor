import React from "react";
import ReactModal from "react-modal";
import { useState } from "react";
export default function LaptopView({laptop , lapPrice , mobile,mobilePrice}){
const [modalIsOpen, setModalIsOpen] = useState(false);
const openModal = () => setModalIsOpen(true);
const closeModal = () => setModalIsOpen(false);

    return (
        <div>
            {laptop ? ( 
                <div>
            <img src={laptop.external_image || laptop.image } alt={laptop.name} onClick={openModal} style={{ cursor: 'pointer' }}/>
              {console.log(laptop.external_image)}
            <label>{lapPrice} $ </label>
            <label>{laptop.name}</label>
            <ReactModal
            isOpen={modalIsOpen}
            laptop={laptop}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              content: {
                maxWidth: '80%',
                margin: 'auto',
              },
            }}
            >
            <Details item={laptop} />
            </ReactModal>
            </div>
            ) : null }
            { mobile ? ( 
                <div>
            <img src={mobile.external_image || mobile.image } alt={mobile.name} onClick={openModal} style={{ cursor: 'pointer' }}/>
            <label>{mobilePrice} $ </label>
            <label>{mobile.name}</label>
            <ReactModal
            isOpen={modalIsOpen}
            mobile={mobile}
            onRequestClose={closeModal}
            style={{
              overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              },
              content: {
                maxWidth: '80%',
                margin: 'auto',
              },
            }}
            >
            <Details item={mobile} />
            </ReactModal>
            </div>
            ) : null }
        </div>

    );
}
function Details({item}){

    return (
        <div>
          <h2>{item?.name }</h2>
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
    