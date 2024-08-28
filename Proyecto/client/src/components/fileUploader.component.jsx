
  import React, { useState, useEffect } from 'react';
  import { FilePond } from 'react-filepond';
  import 'filepond/dist/filepond.min.css';
  import DataTable from 'react-data-table-component';
  import { CSVLink } from 'react-csv';
  import Accordion from 'react-bootstrap/Accordion';
  import Calendar from 'react-calendar';
  import 'react-calendar/dist/Calendar.css';
  import 'filepond/dist/filepond.min.css';
  import ExportButton from './ExportButton.component';
  import ScrollUpButton from 'react-scroll-up'
  import { AiOutlineSchedule, AiOutlineUp } from "react-icons/ai";
  import { SiMicrosoftexcel } from "react-icons/si";
  import { BsCalendarDay } from "react-icons/bs";
  

  const FileUploader = () => {
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
          const parsedData = rows.map(row => {
            const rowData = row.split('\t').map(value => value.trim());

            if (rowData.length < 6) {
              console.warn(`Fila ignorada debido a datos incompletos: ${row}`);
              return null;
            }

            const [rut, fechaHora, , marcacion, , ] = rowData;
            const [fecha, hora] = fechaHora.split(' ');

            return {
              Rut: rut,
              'Fecha y hora': fecha,
              'Hora': hora,
              'Marcación': marcacion,
            };
          }).filter(data => data !== null);

          setTableData(parsedData);

          const summaryMap = new Map();
          parsedData.forEach(item => {
            if (!summaryMap.has(item.Rut)) {
              summaryMap.set(item.Rut, []);
            }
            const summary = summaryMap.get(item.Rut);
            const existingEntry = summary.find(entry => entry['Fecha'] === item['Fecha y hora']);
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
      
      <div className='container'>
       
        <h1 className='display-1'><AiOutlineSchedule/></h1>
        <h1 className="text-center m-5">Gestor de Asistencia</h1>
        <div>
          <div className='m-5'>
            <FilePond
              files={file}
              onupdatefiles={setFile}
              allowMultiple={false}
              labelIdle='Click para cargar el archivo'
              
              
            />
          </div>
          {file && (
          <>
          <DataTable
            data={tableData}
            columns={csvHeaders.map(header => ({
              name: header.label,
              selector: header.key,
              sortable: true,
            }))}
            pagination
          />

          <CSVLink data={tableData} headers={csvHeaders} filename={'Asistencia.csv'} className='d-block mx-auto text-center m-5'>
            <button className='btn btn-primary'>Exportar a Excel <SiMicrosoftexcel/></button>
          </CSVLink>

          <h2 className='text-center m-5'>
            Resumen de Marcaciones por Rut y Fecha
            <a href="#enlace-calendario" className="m-5" style={{ color: 'black' }} onClick={() => setCalendarVisible(!calendarVisible)}>Calendario <BsCalendarDay/></a>
          </h2>

          {calendarVisible && (
          <div className="text-center m-5">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Calendar />
            </div>
          </div>
        )}
        </>
          )}

          <Accordion defaultActiveKey="0" className="accordion">
            {summaryData.map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>Rut: {item.Rut}</Accordion.Header>
                <Accordion.Body>
                  <DataTable
                    data={item.Marcaciones}
                    columns={[
                      { name: 'Fecha', selector: 'Fecha', sortable: true },
                      { name: 'Llegada', selector: '0', sortable: true },
                      { name: 'Salida a colación', selector: '1', sortable: true },
                      { name: 'Regreso colación', selector: '2', sortable: true },
                      { name: 'Salida', selector: '3', sortable: true },
                    ]}
                    pagination
                  />

                  <ExportButton data={item.Marcaciones} fileName={`${item.Rut}`} />
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
          
        </div>
        <div className='m-5'>
          {file && (
            <>
            <button onClick={handleScrollToTop} className="btn btn-primary btn-scroll-top"><AiOutlineUp/> Volver al inicio   <AiOutlineUp/></button>
            <ScrollUpButton />
            </>
            )}
        </div>
      </div>
    );
  };

  export default FileUploader;

 

