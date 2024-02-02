import MTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function Table({ PC, PcPrice }) {
  console.log(PC);
  console.log(PcPrice);

  return (
    <div>
      <TableContainer sx={{display:"flex", flexDirection:"column"}}>
      <label style={{fontSize:"20px", margin:"auto", padding:"20px",borderRadius:"15px",textAlign:"center",marginBottom:"30px", fontWeight:"700", color:"white",backgroundColor:"#138A5F"}}> Total Price: {PcPrice}$ </label>
        <MTable sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead sx={{marginBottom:"20px"}}>
            <TableRow>
              <TableCell sx={{fontSize:"18px", fontWeight:"600"}}>Component</TableCell>
              <TableCell sx={{fontSize:"18px", fontWeight:"600"}}>Selection</TableCell>
              <TableCell sx={{fontSize:"18px", fontWeight:"600"}} align="right">Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell sx={{fontSize:"18px"}} component="th" scope="row">Motherboard</TableCell>
              <TableCell sx={{display:"flex",fontSize:"18px", alignItems:"center", paddingBottom:"12.5px"}}><img className="comp-image" src={PC?.motherboard?.external_image || PC?.motherboard?.image}/> {PC?.motherboard?.name}</TableCell>
              <TableCell sx={{fontSize:"18px"}} align="right">{PC?.motherboard?.price}$</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{fontSize:"18px"}}component="th" scope="row">CPU</TableCell>
              <TableCell sx={{display:"flex",fontSize:"18px", alignItems:"center"}}><img className="comp-image" src={PC?.cpu?.external_image || PC?.cpu?.image}/> {PC?.cpu?.name}</TableCell>
              <TableCell sx={{fontSize:"18px"}}align="right">{PC?.cpu?.price}$</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{fontSize:"18px"}}component="th" scope="row">GPU</TableCell>
              <TableCell sx={{display:"flex",fontSize:"18px", alignItems:"center"}}><img className="comp-image" src={PC?.gpu?.external_image || PC?.gpu?.image}/> {PC?.gpu?.name}</TableCell>
              <TableCell sx={{fontSize:"18px"}}>{PC?.gpu?.price}$</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{fontSize:"18px"}}component="th" scope="row">RAM</TableCell>
              <TableCell sx={{display:"flex",fontSize:"18px", alignItems:"center"}}><img className="comp-image" src={PC?.ram?.external_image || PC?.ram?.image}/> {PC?.ram?.name}</TableCell>
              <TableCell sx={{fontSize:"18px"}}align="right">{PC?.ram?.price}$</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{fontSize:"18px"}}component="th" scope="row">Internal drive</TableCell>
              <TableCell sx={{display:"flex",fontSize:"18px", alignItems:"center"}}><img className="comp-image" src={PC?.internal_drive?.external_image || PC?.internal_drive?.image}/> {PC?.internal_drive?.name}</TableCell>
              <TableCell sx={{fontSize:"18px"}}align="right">{PC?.internal_drive?.price}$</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{fontSize:"18px"}}component="th" scope="row">Power supply</TableCell>
              <TableCell sx={{display:"flex",fontSize:"18px", alignItems:"center"}}><img className="comp-image" src={PC?.power_supply?.external_image || PC?.power_supply?.image}/> {PC?.power_supply?.name}</TableCell>
              <TableCell sx={{fontSize:"18px"}}align="right">{PC?.power_supply?.price}$</TableCell>
            </TableRow>
            <TableRow>
              <TableCell sx={{fontSize:"18px"}}component="th" scope="row">Case</TableCell>
              <TableCell sx={{display:"flex",fontSize:"18px", alignItems:"center"}}><img className="comp-image" src={PC?.case?.external_image || PC?.case?.image}/> {PC?.case?.name}</TableCell>
              <TableCell sx={{fontSize:"18px"}}align="right">{PC?.case?.price}$</TableCell>
            </TableRow>
          </TableBody>
        </MTable>
      </TableContainer>
    </div>
  );
};