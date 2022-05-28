import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useStateContext } from '../contexts/ContextProvider';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DirectionStack() {

  const {  onCourseDetails, onPersonalInfo, onStatement, onDocuments, onSubmitApp, setOnCourseDetails, setOnPersonalInfo, setOnStatement, setOnDocuments, setOnSubmitApp } = useStateContext()
  
  const vars = [ onCourseDetails, onPersonalInfo, onStatement, onDocuments, onSubmitApp ];
  const funcs = [ setOnCourseDetails, setOnPersonalInfo, setOnStatement, setOnDocuments, setOnSubmitApp ];
    
  function handleClick(i){
    funcs.forEach((func,x) => {
      if(x === i){
        funcs[x](true)
      } else{
        funcs[x](false)
      }
    })
    // vars.forEach(d => {
    //   console.log(d)
    // })
  }

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <button onClick={() => handleClick(0)}><Item>Course Details</Item></button>
        <button onClick={() => handleClick(1)}><Item>Personal Info</Item></button>
        <button onClick={() => handleClick(2)}><Item>Statement</Item></button>
        <button onClick={() => handleClick(3)}><Item>Documents</Item></button>
        <button onClick={() => handleClick(4)}><Item>Submit Application</Item></button>
      </Stack>
    </div>
  );
}
