import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { contextMenuItems } from '../data/dummy';
import { ordersData, ordersGrid } from '../data';
import { Header } from '../components';

const Applications = () => {
  const editing = { allowDeleting: true, allowEditing: true };

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2,5 bg-black text-white text-md m-2';
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white ">
      <Header category="Page" title="Applications" />
      <div className='flex items-center gap-5 m-a bg-black text-white text-md m-2 w-20' >
        <button className='object-center'>NEW</button>
      </div>
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Applications;