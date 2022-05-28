import React, {useEffect, useState} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

// import {  } from '../data/dummy';
import { customersGrid, customersData, studentsGrid } from '../data';
import { Header } from '../components';

const Students = () => {
  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Delete'];
  const editing = { allowDeleting: true, allowEditing: true };

  const [ studentsData, setStudentsData ] = useState([])

  // let studentsData = []

  useEffect(()=>{
    const studentsDataUrl = 'http://localhost:7000/students';

    if (studentsData === []){

    }
    fetch(studentsDataUrl).then(res => res.json()).then(data => {
      //console.log(data)
      setStudentsData(data);
      // data.forEach(record => {
      //     studentsData.push(record)
      // });
    })

  // localStorage.setItem('studentData',JSON.stringify(studentsData));
  //console.log(studentsData)
  //return studentsData;
  },[])

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white">
      <Header category="Page" title="Students" />
      <GridComponent
        dataSource={studentsData}
        enableHover={false}
        allowPaging
        pageSettings={{ pageCount: 5 }}
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {studentsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Students;