import { useState } from "react";
import Options from "./Options";
import { Button } from "@mui/material";

export default function LaptopUse() {
  const [selectedUse, setselectedUse] = useState("");
  const [option, setOption] = useState("");
  const [budget, setBudget] = useState('');
  const [Laptops, setLapTops] = useState([]);
  const [showBox2, setShowBox2] = useState(false);

  function handleOptionChange(event) {
    setOption(event.target.value);
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
      const response = await fetch('http://127.0.0.1:8000/pick-laptop/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      if (response.ok) {
        const data = await response.json();
        setLapTops(data.laptops);
        setShowBox2(true);
      } else {
        // Handle errors or non-successful responses
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
        <label style={{fontSize:"16px", marginRight:"13px",marginBottom:"10px"}}>What do you want the Laptop for?</label>
          <select style={{height:"40px",fontSize:"14px", borderColor:"#138A5F",marginBottom:"10px"}} value={option} onChange={handleOptionChange}>
            <option value="">--Please choose an option--</option>
            <option value="Gaming" id="3">Gaming</option>
            <option value="Workstation" id="2">Work Station</option>
            <option value="Home" id="1"> Home</option>
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
          marginBottom:"10px",
          marginTop: "5px",
          borderRadius: "15px",
          fontSize: "17px",
          width: "150px",
          height: "50px",
          cursor: "pointer",
          backgroundColor: "#138A5F",
        }}
        onClick={handleGenerateClick}>Generate</Button>
      {showBox2 && <Options laptops={Laptops} />

      }


    </div>
  );


}