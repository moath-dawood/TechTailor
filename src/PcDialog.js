import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';

export default function PcDialog ( { PC , compInfo }) {
    const renderdialog = ( label , value) => (
    <TableRow sx={{ width: '100%' }} key={label}>
      <TableCell sx={{ fontSize: '18px', width: '50%', fontWeight: '600', textAlign: 'center' }}>
        {label}
      </TableCell>
      <TableCell sx={{ fontSize: '18px', width: '50%', textAlign: 'center' }}>
        {value}
      </TableCell>
    </TableRow>
    )
    return (
        <div>
        { compInfo === PC.motherboard && (
        <>
          {renderdialog('Name', PC.motherboard.name)}
          {renderdialog('RAM Type', PC.motherboard.ram_type)}
          {renderdialog('RAM MAX Size', PC.motherboard.memory_max_capacity)}
          {renderdialog('Socket', PC.motherboard.socket)}
          {renderdialog('Form Factor', PC.motherboard.form_factor)}
          {renderdialog('Chipset', PC.motherboard.chipset)}
          {renderdialog('RAM Slots', PC.motherboard.ram_slots)}
          {renderdialog('Produser', PC.motherboard.producer)}          

            <div>
              <img className="LapImage" src={PC.motherboard.external_image || PC.motherboard.image} alt={PC.motherboard.name}  />
              <label> {PC.motherboard.price}</label>
            </div>
            </>
        )}
         { compInfo === PC.cpu && (
        <>
          {renderdialog('Name', PC.cpu.name)}
          {renderdialog('Base Clock', PC.cpu.base_clock)}
          {renderdialog('Turbo Clock', PC.cpu.turbo_clock)}
          {renderdialog('Socket', PC.cpu.socket)}
          {renderdialog('tdp', PC.cpu.tdp)}
          {renderdialog('Cores', PC.cpu.cores)}
          {renderdialog('Produser', PC.cpu.producer)}          
          {renderdialog('Threads', PC.cpu.threads)}

            <div>
              <img className="LapImage" src={PC.cpu.external_image || PC.cpu.image} alt={PC.cpu.name}  />
              <label> {PC.cpu.price}</label>
            </div>
            </>
        )}
        
        </div>
    ) 
}