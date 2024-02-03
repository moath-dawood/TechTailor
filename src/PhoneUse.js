import { useState } from "react";
import Options from "./Options";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Box, Button } from "@mui/material";
import { Typography } from "@mui/material";
export default function PhoneUse() {
  const [selectedCheckbox, setselectedcheckbox] = useState([]);
  const [budget, setBudget] = useState('');
  const [mobile, setMobile] = useState([]);
  const [showBox2, setShowBox2] = useState(false);
  const [goodPerformance, setGoodPerformance] = useState(false);
  const [goodForBrowsing, setGoodForBrowsing] = useState(false);

  const handleCheckboxChange = (checkboxId) => {
     let updatedSelection;
     if (selectedCheckbox.includes(checkboxId)) {
      updatedSelection = selectedCheckbox.filter((id) => id !== checkboxId);
  } else {
      updatedSelection = [...selectedCheckbox.filter((id) => id !== (checkboxId === 1 ? 4 : 1)), checkboxId];
  }
  setselectedcheckbox(updatedSelection);
  };

  const handleBudgetChange = (event) => {

    setBudget(event.target.value);
  };
  const handleGenerateClick = async () => {
    const requestData = {

      field_id: selectedCheckbox,
      budget: parseFloat(budget),
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/pick-mobile/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
      if (response.ok) {
        setselectedcheckbox(selectedCheckbox)
        console.log(requestData);
        const data = await response.json();
        console.log('Backend response:', data);
        setMobile(data.mobiles);
      setShowBox2(true);
      } else {
        // Handle errors or non-successful responses
        console.error('Backend request failed:', response.statusText);
      }

    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };
  const handleGoodPerformanceChange = () => {
    setGoodPerformance(!goodPerformance);

    // Disable "good for browsing" when "good performance" is selected
    if (!goodPerformance) {
      setGoodForBrowsing(false);
    }
  };

  const handleGoodForBrowsingChange = () => {
    setGoodForBrowsing(!goodForBrowsing);

    // Disable "good performance" when "good for browsing" is selected
    if (!goodForBrowsing) {
      setGoodPerformance(false);
    }
  };


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="form-row">
        <div className="form-group" >
          <Typography sx={{ fontSize: 17, width: "75%", textAlign: "center" }}> What features do you want in the smartphone? </Typography>
          <FormGroup sx={{ display: "flex", width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
              <FormControlLabel value="camera" id="2" onChange={() => handleCheckboxChange(2)} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} />} label={<Typography sx={{ fontSize: 15 }}>
                Good camera
              </Typography>} />
              <FormControlLabel value="performance" id="1" checked={goodPerformance} onChange={() => { handleCheckboxChange(1); handleGoodPerformanceChange() }} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} />} label={<Typography sx={{ fontSize: 15 }}>
                Good performance
              </Typography>} />
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", width: "50%" }}>
              <FormControlLabel value="battery" id="3" onChange={() => handleCheckboxChange(3)} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} />} label={<Typography sx={{ fontSize: 15 }}>
                Good battery
              </Typography>} />
              <FormControlLabel value="browsing" id="4" checked={goodForBrowsing} onChange={() => { handleCheckboxChange(4); handleGoodForBrowsingChange() }} control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 25 } }} />} label={<Typography sx={{ fontSize: 15 }}>
                Good for browsing
              </Typography>} />
            </Box>
          </FormGroup>
        </div>
        <div className="form-group">
          <label style={{ fontSize: "16px", marginBottom: "15px" }}>What is your budget?</label>
          <input style={{ height: "40px", padding: "10px", fontSize: "14px", borderColor: "#138A5F", marginBottom: "15px", border: "1px #138A5F solid" }} type="text" placeholder="1000$" value={budget} onChange={handleBudgetChange} />
        </div>
      </div>
      <Button variant="outlined"
        sx={{
          "&:hover": {
            bgcolor: "#d0d0d0",
            borderRadius: "15px",
            borderColor: "#138A5F",
            color: "#138A5F",
            fontWeight: "600"
          },
          color: "white",
          margin: "auto",
          marginTop: "10px",
          borderRadius: "15px",
          marginBottom: "20px",
          fontSize: "17px",
          width: "150px",
          height: "50px",
          cursor: "pointer",
          backgroundColor: "#138A5F",
        }}
        onClick={handleGenerateClick}>Generate</Button>
      {showBox2 && <Options mobiles={mobile} />

      }
    </div>

  );
}
