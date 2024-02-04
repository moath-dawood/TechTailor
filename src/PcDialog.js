import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React from 'react';

export default function PCDialog({ PC, compInfo }) {
  const renderdialog = (label, value) => (
    <TableRow sx={{ width: '100%', display: "flex", margin: "auto", color: "black" }}  key={label}>
      <TableCell sx={{ fontSize: '18px', width: '50%', fontWeight: '600', textAlign: 'center', color: "black" }}>
        {label}
      </TableCell>
      <TableCell sx={{ fontSize: '18px', width: '50%', textAlign: 'center' }}>
        {value}
      </TableCell>
    </TableRow>
  )
  return (
    <div>
      {compInfo === PC.motherboard && (
        <>
          {renderdialog('RAM Type', PC.motherboard.ram_type)}
          {renderdialog('RAM Max Size', PC.motherboard.memory_max_capacity)}
          {renderdialog('Socket', PC.motherboard.socket)}
          {renderdialog('Form Factor', PC.motherboard.form_factor)}
          {renderdialog('Chipset', PC.motherboard.chipset)}
          {renderdialog('RAM Slots', PC.motherboard.ram_slots)}
          {renderdialog('Producer', PC.motherboard.producer)}
          {renderdialog('Price', PC.motherboard.price)}

          <div>
            <img className="PCImage" src={PC.motherboard.external_image || PC.motherboard.image} alt={PC.motherboard.name} />
          </div>
        </>
      )}
      {compInfo === PC.cpu && (
        <>
          {renderdialog('Base Clock', PC.cpu.base_clock)}
          {renderdialog('Turbo Clock', PC.cpu.turbo_clock)}
          {renderdialog('Socket', PC.cpu.socket)}
          {renderdialog('TDP', PC.cpu.tdp)}
          {renderdialog('Cores', PC.cpu.cores)}
          {renderdialog('Producer', PC.cpu.producer)}
          {renderdialog('Threads', PC.cpu.threads)}
          {renderdialog('Price', PC.cpu.price)}

          <div>
            <img className="PCImage" src={PC.cpu.external_image || PC.cpu.image} alt={PC.cpu.name} />
          </div>
        </>
      )}
      {compInfo === PC.ram && (
        <>
          {renderdialog('Size ', PC.ram.size)}
          {renderdialog('Clock', PC.ram.clock)}
          {renderdialog('Sticks', PC.ram.sticks)}
          {renderdialog('Type', PC.ram.type)}
          {renderdialog('Producer', PC.ram.producer)}
          {renderdialog('Price', PC.ram.price)}

          <div>
            <img className="PCImage" src={PC.ram.external_image || PC.ram.image} alt={PC.ram.name} />
          </div>
        </>
      )}
      {compInfo === PC.gpu && (
        <>
          {renderdialog('PCI_e', PC.gpu.pci_e)}
          {renderdialog('Vram', PC.gpu.vram)}
          {renderdialog('Boost clock', PC.gpu.boost_clock)}
          {renderdialog('Memory clock', PC.gpu.memory_clock)}
          {renderdialog('Connectors 8pin', PC.gpu.connectors_8pin)}
          {renderdialog('Connectors 6pin', PC.gpu.connectors_6pin)}
          {renderdialog('HDMI', PC.gpu.hdmi)}
          {renderdialog('VGA', PC.gpu.vga)}
          {renderdialog('DVI', PC.gpu.dvi)}
          {renderdialog('Cores', PC.gpu.cores)}
          {renderdialog('Price', PC.gpu.price)}

          <div>
            <img className="PCImage" src={PC.gpu.external_image || PC.gpu.image} alt={PC.gpu.name} />
          </div>
        </>
      )}
      {compInfo === PC.case && (
        <>
          {renderdialog('Type', PC.case.type)}
          {renderdialog('Style', PC.case.style)}
          {renderdialog('Side Panel', PC.case.side_panel)}
          {renderdialog('Price', PC.case.price)}


          <div>
            <img className="PCImage" src={PC.case.external_image || PC.case.image} alt={PC.case.name} />
          </div>
        </>
      )}
      {compInfo === PC.internal_drive && (
        <>
          {renderdialog('Capacity ', PC.internal_drive.capacity)}
          {renderdialog('Interface', PC.internal_drive.interface)}
          {renderdialog('Cache', PC.internal_drive.cache)}
          {renderdialog('Drive Type', PC.internal_drive.drive_type)}
          {renderdialog('Price Per GB', PC.internal_drive.price_per_gb)}
          {renderdialog('Price', PC.internal_drive.price)}

          <div>
            <img className="PCImage" src={PC.internal_drive.external_image || PC.internal_drive.image} alt={PC.internal_drive.name} />
          </div>
        </>
      )}
      {compInfo === PC.power_supply && (
        <>
          {renderdialog('Wattage ', PC.power_supply.wattage)}
          {renderdialog('Type', PC.power_supply.type)}
          {renderdialog('Efficiency', PC.power_supply.efficiency)}
          {renderdialog('Price', PC.power_supply.price)}
          <div>
            <img className="PCImage" src={PC.power_supply.external_image || PC.power_supply.image} alt={PC.power_supply.name} />
          </div>
        </>
      )}
    </div>
  )
}