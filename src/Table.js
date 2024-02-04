import MTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import PCDialog from './PCDialog';

export default function Table({ PC, PcPrice }) {
  const [compInfo, setCompInfo] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleCellClick = (cilickedcomponent) => {
    setOpenDialog(true);
    setCompInfo(cilickedcomponent);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <div className='pctable'>
      <Dialog open={openDialog} sx={{ width: "100%" }} onClose={handleCloseDialog}>
        <DialogTitle sx={{ color: "white", margin: "auto", marginTop: "10px", padding: "15px", backgroundColor: "#138a5f", borderRadius: "10px", width: "fit-content" }}>{compInfo?.name}</DialogTitle>
        <DialogContent sx={{ width: "100%" }}>
          <DialogContentText>
            <PCDialog compInfo={compInfo} PC={PC} />
          </DialogContentText>
        </DialogContent>
      </Dialog>
      <TableContainer sx={{ display: "flex", flexDirection: "column" }}>
        <label style={{ fontSize: "20px", margin: "auto", padding: "20px", borderRadius: "15px", textAlign: "center", marginBottom: "30px", fontWeight: "700", color: "white", backgroundColor: "#138A5F" }}> Total Price: {PcPrice}$ </label>
        <MTable sx={{ minWidth: 500 }} aria-label="simple table">
          <TableHead sx={{ marginBottom: "20px" }}>
            <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>Component</TableCell>
            <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>Selection</TableCell>
            <TableCell sx={{ fontSize: "18px", fontWeight: "600" }} align="right">Price</TableCell>
          </TableHead>
          <TableBody>
            <TableRow onClick={() => handleCellClick(PC?.motherboard)}>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>Motherboard</TableCell>
              <TableCell sx={{ display: "flex", fontSize: "18px", alignItems: "center", paddingBottom: "12.5px" }}><img className="comp-image" src={PC?.motherboard?.external_image || PC?.motherboard?.image} alt={PC.name} /> {PC?.motherboard?.name}</TableCell>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }} align="right">{PC?.motherboard?.price}</TableCell>
            </TableRow>
            <TableRow onClick={() => handleCellClick(PC?.cpu)}>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>CPU</TableCell>
              <TableCell sx={{ display: "flex", fontSize: "18px", alignItems: "center" }}><img className="comp-image" src={PC?.cpu?.external_image || PC?.cpu?.image} alt={PC?.name} /> {PC?.cpu?.name}</TableCell>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }} align="right">{PC?.cpu?.price}</TableCell>
            </TableRow>
            {PC?.gpu && PC.gpu.name ? (
              <TableRow onClick={() => handleCellClick(PC?.gpu)}>
                <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>GPU</TableCell>
                <TableCell sx={{ display: "flex", fontSize: "18px", alignItems: "center" }}>
                  <img className="comp-image" src={PC?.gpu?.external_image || PC?.gpu?.image} alt={PC?.name} />
                  {PC?.gpu.name}
                </TableCell>
                <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>{PC?.gpu?.price}</TableCell>
              </TableRow>
            ) : (
              <TableRow sx={{ alignItems: "center" }}>
                <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>GPU</TableCell>
                <TableCell sx={{ fontSize: "18px" }}>None</TableCell>
                <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>0</TableCell>
              </TableRow>
            )}
            <TableRow onClick={() => handleCellClick(PC?.ram)}>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>RAM</TableCell>
              <TableCell sx={{ display: "flex", fontSize: "18px", alignItems: "center" }}><img className="comp-image" src={PC?.ram?.external_image || PC?.ram?.image} alt={PC?.name} /> {PC?.ram?.name}</TableCell>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }} align="right">{PC?.ram?.price}</TableCell>
            </TableRow>
            <TableRow onClick={() => handleCellClick(PC?.internal_drive)}>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>Internal drive</TableCell>
              <TableCell sx={{ display: "flex", fontSize: "18px", alignItems: "center" }}><img className="comp-image" src={PC?.internal_drive?.external_image || PC?.internal_drive?.image} alt={PC?.name} /> {PC?.internal_drive?.name}</TableCell>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }} align="right">{PC?.internal_drive?.price}</TableCell>
            </TableRow>
            <TableRow onClick={() => handleCellClick(PC?.power_supply)}>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>Power supply</TableCell>
              <TableCell sx={{ display: "flex", fontSize: "18px", alignItems: "center" }}><img className="comp-image" src={PC?.power_supply?.external_image || PC?.power_supply?.image} alt={PC?.name} /> {PC?.power_supply?.name}</TableCell>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }} align="right">{PC?.power_supply?.price}</TableCell>
            </TableRow>
            <TableRow onClick={() => handleCellClick(PC?.case)}>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }}>Case</TableCell>
              <TableCell sx={{ display: "flex", fontSize: "18px", alignItems: "center" }}><img className="comp-image" src={PC?.case?.external_image || PC?.case?.image} alt={PC?.name} /> {PC?.case?.name}</TableCell>
              <TableCell sx={{ fontSize: "18px", fontWeight: "600" }} align="right">{PC?.case?.price}</TableCell>
            </TableRow>
          </TableBody>
        </MTable>
      </TableContainer>
    </div>
  );

};