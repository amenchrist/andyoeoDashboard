import React from 'react'
import { inputs } from './courseInfoInputs';

const CourseInfoForm = () => {

    function handleSubmit(){

    }
  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
            {inputs.map(input => {
              return (
                <div className='flex justify-between' key={input.id} >
                  <div style={{width:300}}>
                    <p>{input.label}</p>
                  </div>
                  <div className='flex items-center'>
                    {/* <TextField key={input.label} variant='outlined' value={stateVars[input.field]} onChange={e => stateFuncs[input.setFunction](e.target.value)} /> */}
                  </div>
                </div>
              )
            })}
            <div className='flex justify-center pt2'>
              {/* <Button variant='contained' type='submit'>SUBMIT</Button> */}
            </div>
          </form>
  )
}

export default CourseInfoForm