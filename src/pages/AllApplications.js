import React, { useState, useEffect } from 'react';
import StickyHeadTable from '../components/table';
import TextField from '@mui/material/TextField';
import { useStateContext } from '../contexts/ContextProvider';
import Button from '@mui/material/Button';

const AllApplications = () => {

  const { newApp, setNewApp, tableData, setTableData } = useStateContext();
  
  const [ searchQuery , setSearchQuery ] = useState('');
  const [ filteredData, setFilteredData ] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:7000/applications')
    .then(res => res.json())
    .then(data => {
      //console.log(data);
      setTableData(data);
      setFilteredData(data);})
      
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
      const results = tableData.filter(data =>{
        return data.applicant.match(reg);
      })
      setFilteredData(results);
    } else {
      setFilteredData(tableData);
    }
  }

  

  return (
    <div  className='pt5 pb5'>
        <div className='pb2 flex justify-between'>
            <TextField value={searchQuery} onChange={handleSearch} placeholder='Search Applicants'/>
            {!newApp ? <Button variant='contained' type='submit'onClick={() =>setNewApp(true) } size='medium'>New Application</Button> : ''}
        </div>
        <div className=''>
          <div className='pb1'>
          </div>
            <StickyHeadTable data={filteredData} />
        </div>
    </div>
  )
}

export default AllApplications