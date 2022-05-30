import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { useStateContext } from '../contexts/ContextProvider';
import Button from '@mui/material/Button';

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
  }

  
  

  return (
    <div>
      <Stack direction="row" spacing={2}>
      <Button sx={{ color: 'black' }} onClick={() => handleClick(0)} variant={onCourseDetails? 'outlined': 'text' }>Course Details</Button>
      <Button sx={{ color: 'black' }} onClick={() => handleClick(1)} variant={onPersonalInfo? 'outlined': '' }>Personal Info</Button>
      <Button sx={{ color: 'black' }} onClick={() => handleClick(2)} variant={onStatement? 'outlined': '' }>Statement</Button>
      <Button sx={{ color: 'black' }} onClick={() => handleClick(3)} variant={onDocuments? 'outlined': '' }>Documents</Button>
      <Button sx={{ color: 'black' }} onClick={() => handleClick(4)} variant={onSubmitApp? 'outlined': '' }>Submit Application</Button>
        {/* <button ><Item>Course Details</Item></button>
        <button><Item>Personal Info</Item></button>
        <button ><Item>Statement</Item></button>
        <button ><Item>Documents</Item></button>
        <button ><Item>Submit Application</Item></button> */}
      </Stack>
    </div>
  );
}
