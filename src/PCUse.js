import React, { useState } from 'react';
import Options from './Options';

export default function PCUse() {
    const [showBox2, setShowBox2] = useState(false);
    const[option,setoption]=useState('');
    const [selectedUse,  setselectedUse]= useState({ id: '', value: '' });
    const [budget,setBudget]= useState('');
    const[PCs,setPCs]= useState([])
    
    function handleOptionChange(event){
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
        field_id : parseInt(selectedUse.id),
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
          console.log('Backend response:', data);
          setPCs(data.PCs);
          console.log(data);
          
  
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
      <div>
        <div className="form-row">
          <div className="form-group">
            <label>What do you want the PC for?</label>
            <select value={option} onChange={handleOptionChange}>
              <option value="Gaming" id="4" > Gaming </option>
              <option value="Programming" id="2"> Programming </option>
              <option value="Graphic design" id="3"> Graphic design </option>
              <option value="Office" id="1"> Office </option>
            </select>
          </div>
          <div className="form-group">
            <label>What is your budget?</label>
            <input type="text" placeholder="1000$" value={budget} onChange={handleBudgetchange}/>
          </div>
        </div>
        <button onClick={handleGenerateClick} >Generate</button>
          {showBox2 && <Options PCs={PCs}  />}
      </div>
    );
  }