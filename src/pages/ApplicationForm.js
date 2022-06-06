import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField';
import DirectionStack from '../components/Stack';
import Button from '@mui/material/Button';
import { useStateContext } from '../contexts/ContextProvider';
import { courseInfoInputs } from '../components/applicationInputs/courseInfoInputs';
import { personalInfoInputs } from '../components/applicationInputs/personalInfoInputs';
import { documentsInputs } from '../components/applicationInputs/documentsInputs';
import { personalStatementInputs } from '../components/applicationInputs/personalStatementInputs';
import { v4 as uuidv4 } from 'uuid';
import { submitAppInputs } from '../components/applicationInputs/submitAppInputs';
import { MenuItem, Select } from '@mui/material';
//import SendIcon from '@mui/icons-material/Send';

export default function ApplicationForm() {

  const {  onCourseDetails, onPersonalInfo, onStatement, onDocuments, onSubmitApp, activeApp, setActiveApp, application, setApplication, appVars, appFuncs } = useStateContext()

  const [ submittedOn, setSubmittedOn ] = useState('');
  const [ status, setStatus ] = useState('');
  const [ offer, setOffer ] = useState('');
  const [ registrationEmail, setRegistrationEmail ] = useState('');
  const [ enrolmentStatus, setEnrolmentStatus ] = useState('');
  const [ interview, setInterview ] = useState('');
  const [ elpt, setElpt ] = useState('');

  const [ agent, setAgent ] = useState('');
  const [ id, setId ] = useState(uuidv4().substring(0,7));
  const [ slcFunded, setSlcFunded ] = useState('');
  const [ residencyStatus, setResidencyStatus ] = useState('');
  const [ euSC, setEuSC ] = useState('');
  const [ programmeGroup, setProgrammeGroup ] = useState('');
  const [ course, setCourse ] = useState('');
  const [ intake, setIntake ] = useState('');
  const [ deliveryPattern, setDeliveryPattern ] = useState('');
  const [ courseLevel, setCourseLevel ] = useState('');
  const [ entryLevel, setEntryLevel ] = useState('');
  const [ courseFee, setCourseFee ] = useState('');
  const [ firstYearFee, setFirstYearFee ] = useState('');
  const [ title, setTitle ] = useState('');
  const [ forename1, setForename1 ] = useState('');
  const [ forename2, setForename2 ] = useState('');
  const [ forename3, setForename3 ] = useState('');
  const [ prefFirstName, setPrefFirstName ] = useState('');
  const [ surname, setSurname ] = useState('');
  const [ prevSurname, setPrevSurname ] = useState('');
  const [ gender, setGender ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ advanceEntry, setAdvanceEntry ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ nationality, setNationality ] = useState('');
  const [ dualNationality, setDualNationality ] = useState('');
  const [ cOBirth, setCOBirth ] = useState('');
  const [ ethicOrigin, setEthicOrigin ] = useState('');
  const [ dOBirth, setDOBirth ] = useState('');
  const [ highestQualPreUK, setHighestQualPreUK ] = useState('');
  const [ highestQual, setHighestQual ] = useState('');
  const [ lastInstitution, setLastInstitution ] = useState('');
  const [ institution, setInstitution ] = useState('');
  const [ hesaNo, setHesaNo ] = useState('');
  const [ uLN, setULN ] = useState('');
  const [ qualification, setQualification ] = useState('');
  const [ yearAchieved, setYearAchieved ] = useState('');
  const [ subject, setSubject ] = useState('');
  const [ grade, setGrade ] = useState('');
  const [ passportNo, setPassportNo ] = useState('');
  const [ passportExp, setPassportExp ] = useState('');
  const [ passportIssuePlace, setPassportIssuePlace ] = useState('');
  const [ careLeaver, setCareLeaver ] = useState('');
  const [ disability, setDisability ] = useState('');
  const [ liveInUk, setLiveInUk ] = useState('');
  const [ permHouseNumber, setPermHouseNumber ] = useState('');
  const [ permStreet, setPermStreet ] = useState('');
  const [ permCityTown, setPermCityTown ] = useState('');
  const [ permCountyState, setPermCountyState ] = useState('');
  const [ permPostCode, setPermPostCode ] = useState('');
  const [ permCountry, setPermCountry ] = useState('');
  const [ curHouseNumber, setCurHouseNumber ] = useState('');
  const [ curStreet, setCurStreet ] = useState('');
  const [ curCityTown, setCurCityTown ] = useState('');
  const [ curCountyState, setCurCountyState ] = useState('');
  const [ curPostCode, setCurPostCode ] = useState('');
  const [ curCountry, setCurCountry ] = useState('');
  const [ nokName, setNokName ] = useState('');
  const [ nokRelation, setNokRelation ] = useState('');
  const [ nokPhone, setNokPhone ] = useState('');
  const [ nokEmail, setNokEmail ] = useState('');
  const [ personalStatement, setPersonalStatement ] = useState('');
  const [ attachedFiles, setAttachedFiles ] = useState('');
  const [ applicant, setApplicant ] = useState([forename1, forename2, forename3, surname].join(' '));
  
  const stateVars = { agent, id, slcFunded, residencyStatus, euSC, programmeGroup, course, intake, deliveryPattern, courseLevel, entryLevel, courseFee, firstYearFee, title, forename1, forename2, forename3, prefFirstName, surname, prevSurname, gender, email, advanceEntry, phone, nationality, dualNationality, cOBirth, ethicOrigin, dOBirth, highestQualPreUK, highestQual, lastInstitution, institution, hesaNo, uLN, qualification, yearAchieved, subject, grade, passportNo, passportExp, passportIssuePlace, careLeaver, disability, liveInUk, permHouseNumber, permStreet, permCityTown, permCountyState, permPostCode, permCountry, curHouseNumber, curStreet, curCityTown, curCountyState, curPostCode, curCountry, nokName, nokRelation, nokPhone, nokEmail, personalStatement, attachedFiles, applicant }
  const stateFuncs = { setAgent, setId, setSlcFunded, setResidencyStatus, setEuSC, setProgrammeGroup, setCourse, setIntake, setDeliveryPattern, setCourseLevel, setEntryLevel, setCourseFee, setFirstYearFee, setTitle, setForename1, setForename2, setForename3, setPrefFirstName, setSurname, setPrevSurname, setGender, setEmail, setAdvanceEntry, setPhone, setNationality, setDualNationality, setCOBirth, setEthicOrigin, setDOBirth, setHighestQualPreUK, setHighestQual, setLastInstitution, setInstitution, setHesaNo, setULN, setQualification, setYearAchieved, setSubject, setGrade, setPassportNo, setPassportExp, setPassportIssuePlace, setCareLeaver, setDisability, setLiveInUk, setPermHouseNumber, setPermStreet, setPermCityTown, setPermCountyState, setPermPostCode, setPermCountry, setCurHouseNumber, setCurStreet, setCurCityTown, setCurCountyState, setCurPostCode, setCurCountry, setNokName, setNokRelation, setNokPhone, setNokEmail, setPersonalStatement, setAttachedFiles, setApplicant }
  
  // CAUTION! The order here is important
  const varsArray = [ 'agent', 'id', 'slcFunded', 'residencyStatus', 'euSC', 'programmeGroup', 'course', 'intake', 'deliveryPattern', 'courseLevel', 'entryLevel', 'courseFee', 'firstYearFee', 'title', 'forename1', 'forename2', 'forename3', 'prefFirstName', 'surname', 'prevSurname', 'gender', 'email', 'advanceEntry', 'phone', 'nationality', 'dualNationality', 'cOBirth', 'ethicOrigin', 'dOBirth', 'highestQualPreUK', 'highestQual', 'lastInstitution', 'institution', 'hesaNo', 'uLN', 'qualification', 'yearAchieved', 'subject', 'grade', 'passportNo', 'passportExp', 'passportIssuePlace', 'careLeaver', 'disability', 'liveInUk', 'permHouseNumber', 'permStreet', 'permCityTown', 'permCountyState', 'permPostCode', 'permCountry', 'curHouseNumber', 'curStreet', 'curCityTown', 'curCountyState', 'curPostCode', 'curCountry', 'nokName', 'nokRelation', 'nokPhone', 'nokEmail', 'personalStatement', 'attachedFiles'];
  const funcsArray = [ setAgent, setId, setSlcFunded, setResidencyStatus, setEuSC, setProgrammeGroup, setCourse, setIntake, setDeliveryPattern, setCourseLevel, setEntryLevel, setCourseFee, setFirstYearFee, setTitle, setForename1, setForename2, setForename3, setPrefFirstName, setSurname, setPrevSurname, setGender, setEmail, setAdvanceEntry, setPhone, setNationality, setDualNationality, setCOBirth, setEthicOrigin, setDOBirth, setHighestQualPreUK, setHighestQual, setLastInstitution, setInstitution, setHesaNo, setULN, setQualification, setYearAchieved, setSubject, setGrade, setPassportNo, setPassportExp, setPassportIssuePlace, setCareLeaver, setDisability, setLiveInUk, setPermHouseNumber, setPermStreet, setPermCityTown, setPermCountyState, setPermPostCode, setPermCountry, setCurHouseNumber, setCurStreet, setCurCityTown, setCurCountyState, setCurPostCode, setCurCountry, setNokName, setNokRelation, setNokPhone, setNokEmail, setPersonalStatement, setAttachedFiles, setApplicant]
  
  useEffect(() => {

    if(activeApp === ''){
      setActiveApp(id)
      setApplication(stateVars)
    } else {
      //set state variables to application details
      setId(activeApp)
      funcsArray.forEach((func, i) => func(application[varsArray[i]]))
    }
  }, [])

  function handleSubmit(e){
    e.preventDefault();    
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

    //Object.entries(stateFuncs).forEach(func => func[1](''));
      
  }

  let section= '', inputs = []
  switch(true){
    case onCourseDetails:
      inputs = courseInfoInputs;
      section = 'Course Details';
    break;
    case onPersonalInfo:
      inputs = personalInfoInputs;
      section = 'Personal Info';
    break;
    case onStatement:
      inputs = personalStatementInputs;
      section = 'Statement';
    break;
    case onDocuments:
      inputs = documentsInputs;
      section = 'Documents';
    break;
    case onSubmitApp:
      inputs = submitAppInputs;
      section = 'Submit Application';
    break;
    default:
      inputs = courseInfoInputs;
      section = 'Course Details';
  }

  function validateChange(val, func){
    func(val)
    if (val.match(/[a-z]*$/)){
    }
  }
  
  
  return (
      <div className='pt5 pb5' >
        <div className='flex justify-center pa3 '>
            <DirectionStack />
        </div>
        <div className='shadow-1' style={{ margin: 'auto', overflowY: 'auto', maxHeight: '70vh' }}> 
          <div className='pl5'>
            <h2>{section.toUpperCase()}</h2>
          </div>
          <div className='flex justify-center pb2'>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              {inputs.map(input => {
                let inputProps = {
                  value: stateVars[input.field],
                  onChange: (e) => {
                    validateChange(e.target.value, stateFuncs[input.setFunction])
                  }
                }
                if(input.type === 'select'){
                  inputProps.variant = 'outlined'
                  return (
                    <div className='flex justify-between' key={input.id} > 
                    <div style={{width:300}}>
                      <p>{input.label}</p>
                    </div>
                    <div className='flex items-center'>
                      <Select sx={{ width:200,  height: 35 }} variant='standard' {...inputProps}>
                        {input.dropDown.map((item, i) => {
                          return (
                            <MenuItem value={item} key={i}>{item}</MenuItem>
                          )
                        })
                      }
                      </Select>
                    </div>
                  </div>
                  )
                } else {
                  if(input.disabled){inputProps.disabled = true}
                  return (
                    <div className='flex justify-between' key={input.id} > 
                      <div style={{width:300}}>
                        <p>{input.label}</p>
                      </div>
                      <div className='flex items-center'>
                        <TextField sx={{ width:200}} {...inputProps} />
                      </div>
                    </div>
                  )           
                }
                     
              })}
              <div className='flex justify-center pt2'>
                <Button variant='contained' type='submit' size='large'>SAVE</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
  );
}