import { Radio, RadioGroup, TextField, FormControlLabel,FormControl,FormLabel,Stack,Button } from '@mui/material'
import './App.css'
import { useState } from 'react'
import { Form } from 'react-bootstrap'

function App() {
  const [fname,setFname]=useState("")
  const[lname,setLname]=useState("")
  const[phone,setPhone]=useState("")
  const[dob,setdob]=useState("")
  const [email,setEmail]=useState("")
  const[radio,setRadio]=useState("")
  const[course,setCourse]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const[firstnameInvalid,setfirstnameInvalid]=useState(false)

  const userInput =(inputTag)=>{

  const {name,value}=inputTag
    console.log(name,value);
    if(name=="fname"){
      setFname(value)
      !!value.match(/^[a-zA-Z]+$/)  ? setfirstnameInvalid(false) : setfirstnameInvalid(true)


  }else if(name=="lname")  {
    setLname(value)
  } else if(name=="dob"){
    setdob(value)
  } else if (name=="phone"){
    setPhone(value)
  }  else if (name=="email"){
    setEmail(value)
  } else if(name=="radio"){
    setRadio(value)
  } else if(name=="course"){
    setCourse(value)
  } else if (name=="password"){
    setPassword(value)
  } else if (name=="confirmPassword"){
    setConfirmPassword(value)
  }

}
  // console.log(name);

  const handleReset=()=>{
    setFname("")
    setLname("")
    setdob("")
    setCourse("")
    setPhone("")
    setEmail("")
    setRadio("")
    setPassword("")
    setConfirmPassword("")
  }

  const handleSubmit=()=>{
    if(fname && lname && phone && email && radio && confirmPassword && password){
      alert(`Form Submitted Successfully!👍

          Name:      ${fname}${lname}

          DOB:       ${dob}

          Gender :   ${radio}

          Phone:     ${phone}

          Email Id:  ${email}

          Course:    ${course}

          Password:  ${password}
        `)
      }
    }
  return (
    <>
      <div style={{minHeight:"100vh"}} className='d-flex justify-content-center align-items-center bg-primary'>
        <div style={{width:'600px'}} className='bg-light rounded p-5'>
          <h3 className='text-center text-primary'>Registration Form</h3>
          <form className='mt=3'>
            <div className='mt-3'>
              <TextField value={fname||""} onChange={e=>userInput(e.target)} name='fname' className='w-100' id="outlined-principle" label="First Name" variant="outlined" />
            </div>
            {
              firstnameInvalid && <div className="mb-3 fw-bolder text-danger">*Invalid name</div>
            }
            <div className='mt-3'>
              <TextField value={lname||""} onChange={e=>userInput(e.target)} name='lname' className='w-100' id="outlined-principle" label="Last Name" variant="outlined" />
            </div>
            <div className='mt-3'>
              <TextField value={dob||""} onChange={e=>userInput(e.target)} type='date' name='dob' className='w-100' id="outlined-principle" label="Dob" variant="outlined" />
            </div>
            <RadioGroup row value={radio||""}  aria-labelledby="demo-row-radio-buttons-group-label" onChange={e=>userInput(e.target)}   name="row-radio-buttons-group radio"   className='my-3' >
              <FormControlLabel value="female" control={<Radio />}  name='radio' label="Female" />
              <FormControlLabel value="male" control={<Radio />}  name='radio' label="Male" />     
            </RadioGroup>
            <div className='mt-3'>
              <TextField value={phone||""} onChange={e=>userInput(e.target)} name='phone' className='w-100' id="outlined-principle" label="Phone" variant="outlined" />
            </div>
            <div className='mt-3'>
              <TextField value={email||""} onChange={e=>userInput(e.target)} name='email' className='w-100' id="outlined-principle" label="Email" variant="outlined" />
            </div>
            <div className="mt-3">
            <Form.Control as="select" value={course||""} name='course' placeholder='Select Course' className='w-100' onChange={e=>userInput(e.target)}>
              <option >Select Course</option>
              <option value="Biology" name='course'>Biology</option>
              <option value="Computer Science" name='course'>Computer Science</option>
              <option value="Commerce" name='course'>Commerce</option>
              <option value="Humanities" name='course'>Humanities</option>
            </Form.Control>
            </div>
            <div className='mt-3'>
              <TextField value={password||""} onChange={e=>userInput(e.target)} name='password' className='w-100' id="outlined-principle" label="Password" variant="outlined" 
              type='password'/>
            </div>
            <div className='mt-3'>
              <TextField value={confirmPassword||""} onChange={e=>userInput(e.target)} name='confirmPassword' className='w-100' id="outlined-principle" label="Confirm Password" variant="outlined"
              type='password' />
            </div>
            <Stack direction="row" spacing={2} className='mt-3'>
              <Button onClick={handleReset} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Cancel</Button>
              <Button onClick={handleSubmit} style={{width:'50%',height:'70px',color:'white'}} className='bg-primary' variant="outlined">Register</Button>
            </Stack>
          </form>
        </div>

      </div>
    </>
  )
}

export default App
