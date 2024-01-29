import { useState } from "react";
import Options from "./Options";
export default function PhoneUse() {
  const [selectedCheckbox, setselectedcheckbox] = useState([]);
  const [budget,setBudget]= useState('');
  const[mobile,setMobile]= useState([]);
  const[showBox2,setShowBox2]=useState(false);
  const [goodPerformance, setGoodPerformance] = useState(false);
  const [goodForBrowsing, setGoodForBrowsing] = useState(false);
  
  const handleCheckboxChange = (checkboxId) => {
        
    const updatedSelection = selectedCheckbox.includes(checkboxId)
      ? selectedCheckbox.filter((id) => id !== checkboxId)
      : [...selectedCheckbox, checkboxId];
        
    setselectedcheckbox(updatedSelection);
  };

  const handleBudgetChange = (event) => {
    
    setBudget(event.target.value);
  };
  const handleGenerateClick = async () => {
    const requestData = {
      
      field_id : selectedCheckbox,
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
      <div>
        <div className="form-row">
          <div className="form-group">
            <label>What do you want the device for?</label>
            <div className="radio-group">
              <label>
              <input type="checkbox" name="pcFor" value="camera" id="2" onChange={() =>handleCheckboxChange(2)} /> 
                good camera
              </label>
              <label>
                <input type="checkbox" name="pcFor" value="performance" id="1" 
                checked={goodPerformance}
                onChange={() =>{handleCheckboxChange(1) ; handleGoodPerformanceChange()}
                }
                />
                good performance
              </label>
              <label>
                <input type="checkbox" name="pcFor" value="battery" id="3" onChange={() =>handleCheckboxChange(3)} />
                good battery
              </label>
              <label>
                <input type="checkbox" name="pcFor" value="browsing" id="4" 
                checked={goodForBrowsing}
                 onChange={() =>{handleCheckboxChange(4); handleGoodForBrowsingChange()}} />
                good for browsing
              </label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="budget">What is your budget?</label>
            <input type="text" id="budget" placeholder="1000$" onChange={handleBudgetChange} />
          </div>
        </div>
        <button type="submit" onClick={handleGenerateClick}> Generate</button>
        { showBox2 && <Options mobiles={mobile}  />

    }
      </div>

    );
  }
  