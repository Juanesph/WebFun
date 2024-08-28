// SummaryComponent.js

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Calendar from 'react-calendar';
import DataTable from 'react-data-table-component'; // Asegúrate de que la ruta sea correcta


const SummaryComponent = ({ summaryData, calendarVisible, setCalendarVisible }) => {
  return (
    <>
      <h2 className="text-center m-5">
        Resumen de Marcaciones por Rut y Fecha
        <a href="#enlace-calendario" className="m-5" onClick={() => setCalendarVisible(!calendarVisible)}>
          Calendario
        </a>
      </h2>

      {calendarVisible && (
        <div className="text-center m-5">
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Calendar />
          </div>
        </div>
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
                  
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
    </>
  );
};

export default SummaryComponent;
