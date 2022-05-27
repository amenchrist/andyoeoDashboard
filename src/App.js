import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import 'tachyons';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Overview, Applications, Employees, Students } from './pages';
import './App.css';

import { useStateContext } from './contexts/ContextProvider';
import SimpleContainer from './components/Container';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { IoSchool } from 'react-icons/io5';
import ApplicationForm from './pages/NewApplication';
import AllApplications from './pages/AllApplications';

const App = () => {

  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();

  const [ newApp, setNewApp ] = useState('');



  const nav = 
  <div className='flex pt2 justify-between'>
    <div className='flex fw7 f3 bold items-center'>
      <IoSchool /><span className='pl2'>Andyoeo</span>
    </div>
    <div className='flex'>
    <button className='pa1' onClick={() => newApp ? setNewApp(!newApp) : setNewApp(!newApp) }>New Application</button>
      <button className='pa1 '>Home</button>
      <button className='pa1'>Profile</button>
      <button className='pa1'>Logout</button>
    </div>
  </div>;

  if (newApp){
    return (
      <div>
        <SimpleContainer>
          {nav}
          <div>
            <ApplicationForm />
          </div>
        </SimpleContainer>
      </div>
    )
  } else {
    return (
      <div  className='ba b-black'>
        <SimpleContainer>
          {nav}
          <div>
            <AllApplications />
          </div>
        </SimpleContainer>
      </div>
    )
  }
  
}

export default App

// const oldApp = (<div className={currentMode === 'Dark'? 'dark' : ''}>
// <BrowserRouter>
//   <div className='flex relative dark:bg-main-dark-bg'>
//     <div className='fixed right-4 bottom-4' style={{zIndex: '1000'}}>
//       <TooltipComponent content='Settings' position='Top'>
//         <button type='button' className='text-3xl p-3 hover:drop-shadow-xl :hover:bg-light-gray text-white' style={{background: currentColor, borderRadius: '50%'}} onClick={() => setThemeSettings(true)}>
//           <FiSettings />
//         </button>
//       </TooltipComponent>
//     </div>
//     {activeMenu ? (
//       <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
//         <Sidebar />
//       </div> ) : (
//       <div className='w-0 dark:bg-secondary-dark-bg'>
//         <Sidebar />
//     </div>
//     )}
//     <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72': 'flex-2'}`}>
//         <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
//           <Navbar />
//         </div>
//       <div>
//         { themeSettings && <ThemeSettings />}
//         <Routes>
//           {/* Dashboard */}
//           <Route path='/' element={<Overview />} />
//           <Route path='/overview' element={<Overview />} />

//           {/* Pages */}
//           <Route path='/students' element={<Students />} />
//           <Route path='/employees' element={<Employees />} />
//           <Route path='/applications' element={<Applications />} />

//         </Routes>
//       </div>
//     </div>
//   </div>
// </BrowserRouter>
// </div>)