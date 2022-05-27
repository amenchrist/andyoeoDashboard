import React, { useState } from 'react';
import StickyHeadTable from '../components/table';
import TextField from '@mui/material/TextField';

const AllApplications = () => {

    
  const [ searchQuery , setSearchQuery ] = useState('');

  function handleSearch (e) {
    setSearchQuery(e.target.value);
    console.log(searchQuery)
  }

  return (
    <div  className='pt5 pb5'>
        <div className='pb2'>
            <TextField value={searchQuery} onChange={handleSearch} placeholder='Search'/>
        </div>
        <div className='tc'>
            <StickyHeadTable />
        </div>
    </div>
  )
}

export default AllApplications