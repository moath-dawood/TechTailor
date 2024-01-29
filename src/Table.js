


export default function Table ({PC , PcPrice }){ 
  console.log(PC);
  console.log(PcPrice);
  
  return (
      <div>
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>          </th>
            <th>Selection</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
        
            <tr >
              <td>Motherboard</td>
              <td><img className="comp-image" src={PC?.motherboard?.external_image || PC?.motherboard?.image } alt={PC?.motherboard?.name}/></td>
              <td>{PC?.motherboard?.name}</td>
              <td>{PC?.motherboard?.price}$</td>
             </tr>
             <tr >
              <td>CPU</td>
              <td><img className="comp-image" src={PC?.cpu?.external_image || PC?.cpu?.image } alt={PC?.cpu?.name}/></td>
              <td>{PC?.cpu?.name}</td>
              <td>{PC?.cpu?.price}$</td>
             </tr>
             <tr >
              <td>GPU</td>
              <td><img className="comp-image" src={PC?.gpu?.external_image || PC?.gpu?.image } alt={PC?.gpu?.name}/></td>
              <td>{PC?.gpu?.name}</td>
              <td>{PC?.gpu?.price}$</td>
             </tr>
             <tr >
              <td>RAM</td>
              <td><img className="comp-image"src={PC?.ram?.external_image || PC?.ram?.image } alt={PC?.ram?.name}/></td>
              <td>{PC?.ram?.name}</td>
              <td>{PC?.ram?.price}$</td>
             </tr>
             <tr >
              <td>CASE</td>
              <td><img className="comp-image" src={PC?.case?.external_image || PC?.case?.image } alt={PC?.case?.name}/></td>
              <td>{PC?.case?.name}</td>
              <td>{PC?.case?.price}$</td>
             </tr>
             <tr >
              <td>INTERNAL DRIVE</td>
              <td><img className="comp-image" src={PC?.internal_drive?.external_image || PC?.internal_drive?.image } alt={PC?.internal_drive?.name}/></td>
              <td>{PC?.internal_drive?.name}</td>
              <td>{PC?.internal_drive?.price}$</td>
             </tr>
             <tr >
              <td>power_supply</td>
              <td><img className="comp-image" src={PC?.power_supply?.external_image || PC?.power_supply?.image } alt={PC?.power_supply?.name}/></td>
              <td>{PC?.power_supply?.name}</td>
              <td>{PC?.power_supply?.price}$</td>
             </tr>
             </tbody>
      </table>
      <label> Total Price : {PcPrice} $ </label>
      </div>
    );
  };