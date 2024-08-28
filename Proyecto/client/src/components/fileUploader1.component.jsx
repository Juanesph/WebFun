// FileUploader.js

import React, { useState, useEffect } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import DataTableComponent from './DataTable.component';
import SummaryComponent from './Summary.component';
import ScrollUpButton from 'react-scroll-up'; // Asegúrate de importar ScrollUpButton

const FileUploader1 = () => {
  const [file, setFile] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [summaryData, setSummaryData] = useState([]);
  const [calendarVisible, setCalendarVisible] = useState(false);

  useEffect(() => {
    if (file && file.length > 0) {
      const loadedFile = file[0];
      const reader = new FileReader();

      reader.onload = (event) => {
        const loadedData = event.target.result;
        const rows = loadedData.split('\n');
        const parsedData = rows.map((row) => {
          const rowData = row.split('\t').map((value) => value.trim());

          if (rowData.length < 6) {
            console.warn(`Fila ignorada debido a datos incompletos: ${row}`);
            return null;
          }

          const [rut, fechaHora, , marcacion, ,] = rowData;
          const [fecha, hora] = fechaHora.split(' ');

          return {
            Rut: rut,
            'Fecha y hora': fecha,
            'Hora': hora,
            'Marcación': marcacion,
          };
        }).filter((data) => data !== null);

        setTableData(parsedData);

        const summaryMap = new Map();
        parsedData.forEach((item) => {
          if (!summaryMap.has(item.Rut)) {
            summaryMap.set(item.Rut, []);
          }
          const summary = summaryMap.get(item.Rut);
          const existingEntry = summary.find(
            (entry) => entry['Fecha'] === item['Fecha y hora']
          );
          if (existingEntry) {
            existingEntry[item['Marcación']] = item['Hora'];
          } else {
            const newEntry = { 'Fecha': item['Fecha y hora'] };
            newEntry[item['Marcación']] = item['Hora'];
            summary.push(newEntry);
          }
        });

        const summarizedData = [];
        summaryMap.forEach((summary, rut) => {
          summarizedData.push({ Rut: rut, Marcaciones: summary });
        });
        setSummaryData(summarizedData);
      };

      reader.readAsText(loadedFile.file);
    }
  }, [file]);

  const csvHeaders = [
    { label: 'Rut', key: 'Rut' },
    { label: 'Fecha y hora', key: 'Fecha y hora' },
    { label: 'Hora', key: 'Hora' },
    { label: 'Marcación', key: 'Marcación' },
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <div className='m-5'>
        <h1 className='m-5'>Gestor de Asistencia</h1>
        <FilePond
          files={file}
          onupdatefiles={setFile}
          allowMultiple={false}
          labelIdle='Click para cargar el archivo'
        />
        <DataTableComponent tableData={tableData} />
        <SummaryComponent
          summaryData={summaryData}
          
          
        />
        <button onClick={handleScrollToTop} className="btn btn-primary btn-scroll-top">
          Volver al inicio
        </button>
        <ScrollUpButton /> {/* Agregamos el componente ScrollUpButton */}
      </div>
    </div>
  );
};

export default FileUploader1;
