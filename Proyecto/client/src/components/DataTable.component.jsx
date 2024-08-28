// DataTableComponent.js

import React from 'react';
import DataTable from 'react-data-table-component';
import { CSVLink } from 'react-csv';

const DataTableComponent = ({ tableData }) => {
  const csvHeaders = [
    { label: 'Rut', key: 'Rut' },
    { label: 'Fecha y hora', key: 'Fecha y hora' },
    { label: 'Hora', key: 'Hora' },
    { label: 'Marcación', key: 'Marcación' },
  ];

  return (
    <>
      <DataTable
        data={tableData}
        columns={csvHeaders.map((header) => ({
          name: header.label,
          selector: header.key,
          sortable: true,
        }))}
        pagination
      />

      <CSVLink data={tableData} headers={csvHeaders} filename={'Asistencia.csv'} className="d-block mx-auto text-center m-5">
        <button className="btn btn-primary">Exportar a Excel</button>
      </CSVLink>
    </>
  );
};

export default DataTableComponent;
