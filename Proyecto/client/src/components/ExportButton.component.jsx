import React from 'react';
import { CSVLink } from 'react-csv';
import * as XLSX from 'xlsx';
import { SiMicrosoftexcel } from "react-icons/si";

const ExportButton = ({ data, fileName }) => {
  const exportToCSV = () => {
    const csvData = data.map(item => ({
      Fecha: item.Fecha,
      'Llegada': item[0],
      'Salida a colación': item[1],
      'Regreso colación': item[2],
      'Salida': item[3],
    }));

    return csvData;
  };

  const exportToExcel = () => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Sheet 1");
    XLSX.writeFile(wb, fileName);
  };

  return (
    <div>
      <CSVLink
        data={exportToCSV()}
        headers={[
          { label: 'Fecha', key: 'Fecha' },
          { label: 'Llegada', key: 'Llegada' },
          { label: 'Salida a colación', key: 'Salida a colación' },
          { label: 'Regreso colación', key: 'Regreso colación' },
          { label: 'Salida', key: 'Salida' },
        ]}
        filename={`${fileName}.csv`}
      >
        <button className='btn btn-primary'>Guardar Asistencia  <SiMicrosoftexcel/></button>
      </CSVLink>

    
    </div>
  );
};

export default ExportButton;
