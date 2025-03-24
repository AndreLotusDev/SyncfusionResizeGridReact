import {
  ColumnDirective,
  ColumnsDirective,
  GridComponent,
  Inject,
  Resize,
} from '@syncfusion/ej2-react-grids';
import { useEffect, useRef } from 'react';
import { data } from './datasource';

function App() {
  let gridRef = useRef<GridComponent>(null);

  useEffect(() => {
    let gridInstance = gridRef.current;
    if(!gridInstance) {
      console.error('Was a problem initializing the grid');
    }
    gridInstance!.resizing = (e) => {
      let tempWidth = Number.parseInt((e.column.width as string).replace('px', ''));
      let minWidth = e.column.minWidth;

      let id = "btn_reset_" + e.column.field;
      let buttonFound = document.getElementById(id);

      if(tempWidth == minWidth) {
        console.log('none');
        buttonFound!.style.display = "none";
        return;
      }

      if(tempWidth > minWidth) {
        console.log('block');
        buttonFound!.style.display = "block";
      }
    }
  }, []);

  const resizeColumn = (columnUid = "") => {
    let gridInstance = gridRef.current;
    let column = gridInstance?.getColumnByField(columnUid); 
    if(column) {
      column.width = column.minWidth + "px";   
      
      setTimeout(() => {
        let id = "btn_reset_" + column.field;
        let buttonFound = document.getElementById(id);
        buttonFound!.style.display = "none";
      }, 200);

      gridInstance?.refreshColumns();
    }
  }

  const HeaderWithReset = ({ columnUid = "", headerText = "" }) => { 
    let toReturn = (
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          {headerText}
        </span>
        <button
          id={"btn_reset_" + columnUid}
          className='btn_reset'
          style={{
            marginLeft: '10px',
            padding: '2px 5px',
            fontSize: '12px',
          }}
          onClick={() => resizeColumn(columnUid)}
        >
          reset
        </button>
      </div>
    );

    return toReturn;
  };

  return (
    <>
      <GridComponent
        ref={gridRef}
        dataSource={data}
        height={315}
        width="auto"
        allowResizing={true}
        resizeSettings={{ mode: 'Normal' }}
      >
        <Inject services={[Resize]} />
        <ColumnsDirective>
          <ColumnDirective
            field="CustomerID"
            headerText="Customer ID"
            minWidth="200"
            width="200"
            headerTemplate={() => HeaderWithReset({ columnUid: "CustomerID", headerText: "Customer ID" })}
          />
          <ColumnDirective
            field="OrderID"
            headerText="Order ID"
            textAlign="Right"
            width="500"
          />
        </ColumnsDirective>
      </GridComponent>
    </>
  );
}

export default App;
