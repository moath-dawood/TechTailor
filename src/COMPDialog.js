import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';

export default function PCDialog ( { PC , compInfo }) {
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
          {renderdialog('Base Clock', PC.cpu.base_clock)}
          {renderdialog('Turbo Clock', PC.cpu.turbo_clock)}
          {renderdialog('Socket', PC.cpu.socket)}
          {renderdialog('TDB', PC.cpu.tdp)}
          {renderdialog('Cores', PC.cpu.cores)}
          {renderdialog('Produser', PC.cpu.producer)}          
          {renderdialog('Threads', PC.cpu.threads)}

            <div>
              <img className="LapImage" src={PC.cpu.external_image || PC.cpu.image} alt={PC.cpu.name}  />
              <label> {PC.cpu.price}</label>
            </div>
            </>
        )}
        { compInfo === PC.ram && (
        <>
          {renderdialog('Size ', PC.ram.size)}
          {renderdialog('Clock', PC.ram.clock)}
          {renderdialog('Sticks', PC.ram.sticks)}
          {renderdialog('Timings', PC.ram.timings)}
          {renderdialog('Type', PC.ram.type)}
          {renderdialog('Produser', PC.ram.producer)}          

            <div>
              <img className="LapImage" src={PC.ram.external_image || PC.ram.image} alt={PC.ram.name}  />
              <label> {PC.ram.price}</label>
            </div>
            </>
        )}
       { compInfo === PC.gpu && (
        <>
          {renderdialog('PCI_e', PC.gpu.pci_e)}
          {renderdialog('Vram', PC.gpu.vram)}
          {renderdialog('Boost_clock', PC.gpu.boost_clock)}
          {renderdialog('Memory_clock', PC.gpu.memory_clock)}
          {renderdialog('Connectors_8pin', PC.gpu.connectors_8pin)}
          {renderdialog('Connectors_6pin', PC.gpu.connectors_6pin)}
          {renderdialog('HDMI', PC.gpu.hdmi)}          
          {renderdialog('VGA', PC.gpu.vga)}
          {renderdialog('DVI', PC.gpu.dvi)}
          {renderdialog('Cores', PC.gpu.cores)}



            <div>
              <img className="LapImage" src={PC.gpu.external_image || PC.gpu.image} alt={PC.gpu.name}  />
              <label> {PC.gpu.price}</label>
            </div>
            </>
        )}
         { compInfo === PC.case && (
        <>
          {renderdialog('Color ', PC.case.color)}
          {renderdialog('Type', PC.case.type)}
          {renderdialog('Style', PC.case.style)}
          {renderdialog('Side Panel', PC.case.side_panel)}
            

            <div>
              <img className="LapImage" src={PC.case.external_image || PC.case.image} alt={PC.case.name}  />
              <label> {PC.case.price}</label>
            </div>
            </>
        )}
        { compInfo === PC.internal_drive && (
        <>
          {renderdialog('Capacity ', PC.internal_drive.capacity)}
          {renderdialog('Interface', PC.internal_drive.interface)}
          {renderdialog('Cache', PC.internal_drive.cache)}
          {renderdialog('Drive Type', PC.internal_drive.drive_type)}
          {renderdialog('Price Per GB', PC.internal_drive.price_per_gb)}

            <div>
              <img className="LapImage" src={PC.internal_drive.external_image || PC.internal_drive.image} alt={PC.internal_drive.name}  />
              <label> {PC.internal_drive.price}</label>
            </div>
            </>
        )}
         { compInfo === PC.power_supply && (
        <>
          {renderdialog('Wattage ', PC.power_supply.capacity)}
          {renderdialog('Type', PC.power_supply.interface)}
          {renderdialog('Efficiency', PC.power_supply.efficiency)}
          {renderdialog('Drive Type', PC.power_supply.drive_type)}
          {renderdialog('Price Per GB', PC.power_supply.price_per_gb)}

            <div>
              <img className="LapImage" src={PC.power_supply.external_image || PC.power_supply.image} alt={PC.power_supply.name}  />
              <label> {PC.power_supply.price}</label>
            </div>
            </>
        )}
        </div>
    ) 
}