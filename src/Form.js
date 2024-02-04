import GeneralForm from "./GeneralForm";
import { CPUFormData , GPUFormData , MotherBoardsFormData , RAMFormData , CaseFormData, InternalDriveFormData
, PowerSupplyFormData, MobileFormData , LaptopFormData } from "./CompArrays";

export default function Form ({selectedbtn , itemid }){
const api = `http://127.0.0.1:8000/dashboard/${selectedbtn}/`;
    return (  
      <div>
        { selectedbtn === 'cpus' &&
        < GeneralForm ConfigFormData={CPUFormData} apiEndpoint={api} edititemid={itemid} />
        }
        { selectedbtn === 'gpus' &&
        <GeneralForm ConfigFormData={GPUFormData} apiEndpoint={api} edititemid={itemid} />
        }
         { selectedbtn === 'cases' &&
        <GeneralForm ConfigFormData={CaseFormData} apiEndpoint={api } edititemid={itemid} />
        } { selectedbtn === 'rams' &&
        <GeneralForm  ConfigFormData={RAMFormData} apiEndpoint={api} edititemid={itemid} />
        } { selectedbtn === 'motherboards' &&
        <GeneralForm ConfigFormData={MotherBoardsFormData} apiEndpoint={api} edititemid={itemid} />
        } { selectedbtn === 'internal-drives' &&
        <GeneralForm ConfigFormData={InternalDriveFormData} apiEndpoint={api} edititemid={itemid} />
        } { selectedbtn === 'power-supplies' &&
        <GeneralForm ConfigFormData={PowerSupplyFormData} apiEndpoint={api} edititemid={itemid} />
        } { selectedbtn === 'mobiles' &&
        <GeneralForm ConfigFormData={MobileFormData} apiEndpoint={api} edititemid={itemid} />
        } { selectedbtn === 'laptops' &&
        <GeneralForm  ConfigFormData={LaptopFormData} apiEndpoint={api} edititemid={itemid} />
        }
        </div>
    );

}