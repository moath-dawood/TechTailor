import { useState } from "react";
import Options from "./Options";

export default function LaptopUse() {
    const [selectedUse, setselectedUse] = useState("");
    const [option, setOption] = useState("");
    const [budget,setBudget]= useState('');
    const[Laptops,setLapTops]= useState([]);
    const[showBox2,setShowBox2]=useState(false);
    
    function handleOptionChange(event){
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
        field_id : parseInt(selectedUse.id),
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
          console.log('Backend response:', data);
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
      <div>
        <div className="form-row">
          <div className="form-group">
            <label>What do you want the Laptop for?</label>
            <select value={option} onChange={handleOptionChange}>
              <option value="gaming" id="3">Gaming</option>
              <option value="workstation" id="2">Work Station</option>
              <option value="home" id="1"> Home</option>
            </select>
          </div>
          <div className="form-group">
            <label>What is your budget?</label>
            <input type="text" placeholder="1000$" value={budget} onChange={handleBudgetchange} />
          </div>
        </div>
        <button onClick={handleGenerateClick}>Generate</button>
        { showBox2 && <Options laptops={Laptops}/>

    }
      

        </div>
    );


  }