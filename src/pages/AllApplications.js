import React, { useState, useEffect } from 'react';
import StickyHeadTable from '../components/table';
import TextField from '@mui/material/TextField';
import { useStateContext } from '../contexts/ContextProvider';

const AllApplications = () => {

  const [ searchQuery , setSearchQuery ] = useState('');
  const [ tableData, setTableData ] = useState([]);
  const [ initialTableData, setInitialTableData ] = useState([]);

  const { newApp, setNewApp } = useStateContext();
  

    useEffect(()=>{
        fetch('http://localhost:7000/applications')
        .then(res => res.json())
        .then(data => {
          //console.log(data);
          setTableData(data);
          setInitialTableData(data);})
          
        try{
        }catch {
            console.log('Problem fetching Data');
        }
    }, [])
    
  

  function handleSearch (e) {
    setSearchQuery(e.target.value);
    let query = e.target.value.trim();
    if(query !== ''){
      const reg = new RegExp(query, 'i')
      const results = initialTableData.filter(data =>{
        return data.applicant.match(reg);
      })
      setTableData(results);
    } else {
      setTableData(initialTableData);
    }
  }

  

  return (
    <div  className='pt5 pb5'>
        <div className='pb2'>
            <TextField value={searchQuery} onChange={handleSearch} placeholder='Search Applicants'/>
        </div>
        <div className=''>
          <div className='pb1'>
            {!newApp ? <button className='pa1' onClick={() =>setNewApp(true) }>New Application</button> : ''}
          </div>
            <StickyHeadTable data={tableData} />
        </div>
    </div>
  )
}

export default AllApplications