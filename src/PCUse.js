import React, { useState } from 'react';
import Options from './Options';
import Button from '@mui/material/Button';

export default function PCUse() {
  const [showBox2, setShowBox2] = useState(false);
  const [option, setoption] = useState('');
  const [selectedUse, setselectedUse] = useState({ id: '', value: '' });
  const [budget, setBudget] = useState('');
  const [PCs, setPCs] = useState([])

  function handleOptionChange(event) {
    setoption(event.target.value);
    const selectedOption = event.target.options[event.target.selectedIndex];
    setselectedUse({
      id: selectedOption.id,
      value: event.target.value,
    });
  }
  const handleBudgetchange = (event) => {
    setBudget(event.target.value)
  };
  const handleGenerateClick = async () => {
    const requestData = {
      field_id: parseInt(selectedUse.id),
      budget: parseFloat(budget),
    };
    try {
      const response = await fetch('http://127.0.0.1:8000/pick-pc/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      if (response.ok) {
        const data = await response.json();
        setPCs(data.PCs);
        setShowBox2(true);
      } else {
        console.error('Backend request failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <div className="form-row">
        <div className="form-group">
          <label style={{fontSize:"16px", marginRight:"10px", marginBottom:"10px" }}>What do you want the PC for?</label>
          <select style={{height:"40px",fontSize:"14px", borderColor:"#138A5F",marginBottom:"10px"}} value={option} onChange={handleOptionChange}>
            <option value="">--Please choose an option--</option>
            <option value="Gaming" id="4" > Gaming </option>
            <option value="Graphic design" id="3"> Graphic design </option>
            <option value="Programming" id="2"> Programming </option>
            <option value="Office" id="1"> Office </option>
          </select>
        </div>
        <div className="form-group">
          <label style={{fontSize:"16px",marginBottom:"10px"}}>What is your budget?</label>
          <input style={{height:"40px",padding:"10px",fontSize:"14px",borderColor:"#138A5F",marginBottom:"10px", border:"1px #138A5F solid"}} type="text" placeholder="1000$" value={budget} onChange={handleBudgetchange} />
        </div>
      </div>
      <Button variant="outlined"
        sx={{
          "&:hover": {
            bgcolor: "#d0d0d0",
            borderRadius: "15px",
            borderColor: "#138A5F",
            color: "#138A5F",
            fontWeight:"600"
          },
          color: "white",
          margin:"auto",
          marginTop: "5px",
          borderRadius: "15px",
          marginBottom:"10px",
          fontSize: "17px",
          width: "150px",
          height: "50px",
          cursor: "pointer",
          backgroundColor: "#138A5F",
        }}
        onClick={handleGenerateClick}>Generate</Button>
      {showBox2 && <Options PCs={PCs} />}
    </div>
  );
}