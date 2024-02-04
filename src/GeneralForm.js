import { useState , useEffect } from "react";

export default function GeneralForm ({ConfigFormData , apiEndpoint , edititemid , attribute}) {
    const [formData, setFormData] = useState(ConfigFormData);

    useEffect(() => {
      if (edititemid) {
        const fetchData = async () => {
          const api = `${apiEndpoint}${edititemid}/`;
          try {
            const response = await fetch(api);
            console.log();
            const data = await response.json();
            setFormData(data);
          } catch (error) {
            console.error("Error fetching data:", error.message);
          }
        };
  
        fetchData();
      }
    }, [apiEndpoint, edititemid]);

    const handleChange = (e) => {
      const { name, value, type, files } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === 'file' ? (files.length > 0 ? files[0] : null) : type === 'number' ? parseFloat(value) : value,
      }));
    };
    console.log(attribute);
    const renderFormFields = () => {
      return  Object.keys(ConfigFormData).map((property) => (
       <div key={property} className="inputs">
          <label style={{fontWeight:"600", color:"#138A5F"}}>
          {property.replace(/_/g, ' ').toUpperCase()}:
            {property === 'image' ? (
              <input
                type="file"
                name={property}
                onChange={handleChange}
                
              />
            ) : property === 'base_clock' || property === 'turbo_clock' ? (
              <input
                type="number"
                step="0.01"
                name={property}
                value={formData[property]}
                onChange={handleChange}
                required
              />
            ) : (
              <input
              style={{marginLeft:"10px", padding:"5px", backgroundColor:"#d2d2d2", border:"#138A5F 1px solid", borderRadius:"10px", width:"200px"}}
                type="text"
                name={property}
                value={formData[property]}
                onChange={handleChange}
                required
              />
            )}
          </label>
        </div>
      ));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
       try {
        const formDataToSend = new FormData();
        Object.entries(formData).forEach(([key, value]) => {
          if ((key === 'external_image' || key === 'image') && value) {
            formDataToSend.append(key, value);
          } else if (key !== 'external_image' && key !== 'image') {
            formDataToSend.append(key, value);
          }
        });
        const url = edititemid ? `${apiEndpoint}${edititemid}/` : apiEndpoint;

        const response = await fetch(url, {
          method: edititemid ? 'PATCH' : 'POST',
          body: formDataToSend,
        });
        console.log(apiEndpoint);
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(`HTTP error! Status: ${response.status}, Details: ${JSON.stringify(errorData)}`);
        }

        if (edititemid) {
          console.log('Data successfully updated:', formData);
          alert('Data successfully updated');
        } else {
          console.log('Data successfully added:', formData);
             alert('Data successfully added');
        }     
       } catch (error) {
        console.error('Error posting data:', error.message);
         alert(`Error posting data: ${error.message}`);

      }
    };
    return (
    
      <form onSubmit={handleSubmit} encType="multipart/form-data"  className="btn-group" >
        {renderFormFields()}
        <button style={{width:"fit-content", padding:"10px", color:"#138a5f", fontSize:"16px", backgroundColor:"#d2d2d2", borderRadius:"10px", borderColor:"#138a5f", margin:"auto"}} type="submit">{edititemid ? "Update" : "Submit"}</button>      
      </form>
    );
  };
  