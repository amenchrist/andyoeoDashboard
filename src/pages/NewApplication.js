import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import DirectionStack from '../components/Stack';
import Button from '@mui/material/Button';
import { useStateContext } from '../contexts/ContextProvider';
import { courseInfoInputs } from '../components/courseInfoInputs';
import { personalInfoInputs } from '../components/personalInfoInputs';
import { documentsInputs } from '../components/documentsInputs';
import { personalStatementInputs } from '../components/personalStatementInputs';
import { submitAppInputs } from '../components/submitAppInputs';

export default function ApplicationForm() {

  const {  onCourseDetails, onPersonalInfo, onStatement, onDocuments, onSubmitApp } = useStateContext()

  const [ agent, setAgent ] = useState('');
  const [ id, setId ] = useState('');
  const [ applicant, setApplicant ] = useState('');
  const [ deliveryPattern, setDeliveryPattern ] = useState('');
  const [ intake, setIntake ] = useState('');
  const [ submittedOn, setSubmittedOn ] = useState('');
  const [ status, setStatus ] = useState('');
  const [ offer, setOffer ] = useState('');
  const [ registrationEmail, setRegistrationEmail ] = useState('');
  const [ enrolmentStatus, setEnrolmentStatus ] = useState('');
  const [ interview, setInterview ] = useState('');
  const [ elpt, setElpt ] = useState('');
  
  const stateVars = {id, agent, applicant, deliveryPattern, intake, submittedOn, status, offer, registrationEmail, enrolmentStatus, interview, elpt}
  const stateFuncs = {setId, setAgent, setApplicant, setDeliveryPattern, setIntake, setSubmittedOn, setStatus, setOffer, setRegistrationEmail, setEnrolmentStatus, setInterview, setElpt }

  function handleSubmit(e){
    e.preventDefault();
    console.log(stateVars)
    
    fetch('http://localhost:7000/applications', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(stateVars)
    })
    .then(res => res.json())
    .then(res => console.log(res));
  }

  let inputs = []
  switch(true){
    case onCourseDetails:
      inputs = courseInfoInputs;
      console.log("course: ",onCourseDetails )
    break;
    case onPersonalInfo:
      inputs = personalInfoInputs;
      console.log("personal: ",onPersonalInfo )
    break;
    case onStatement:
      inputs = personalStatementInputs;
      console.log("personal: ",onPersonalInfo )
    break;
    case onDocuments:
      inputs = documentsInputs;
      console.log("personal: ",onPersonalInfo )
    break;
    case onSubmitApp:
      inputs = courseInfoInputs.concat(personalInfoInputs, personalStatementInputs, documentsInputs);
      console.log("personal: ",onPersonalInfo )
    break;
    default:
      inputs = courseInfoInputs;
  }
  
  return (
      <div className='pt5 pb5' >
        <div className='flex justify-center pa3 '>
            <DirectionStack />
        </div>
        <div className='flex justify-center shadow-1' style={{ margin: 'auto', overflowY: 'auto', maxHeight: '70vh' }}> 
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            {inputs.map(input => {
              return (
                <div className='flex justify-between' key={input.id} >
                  <div style={{width:300}}>
                    <p>{input.label}</p>
                  </div>
                  <div className='flex items-center'>
                    <TextField  variant='outlined' value={stateVars[input.field]} onChange={e => stateFuncs[input.setFunction](e.target.value)} />
                  </div>
                </div>
              )
            })}
            <div className='flex justify-center pt2'>
              <Button variant='contained' type='submit'>SUBMIT</Button>
            </div>
          </form>
        </div>
      </div>
  );
}