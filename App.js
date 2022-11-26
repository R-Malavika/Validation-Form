import React from 'react';
import TextField from '@mui/material/TextField';
import './App.css';
import {
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText,
  FormGroup,
  Checkbox,
} from '@mui/material';
import { useForm } from "react-hook-form";

const App = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => console.log(data)

  return (
    <div className="App__form">
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField 
          name="firstName" 
          label="First Name" 
          placeholder="Enter your First Name"
          variant="outlined"
          fullWidth 
          {...register("firstName", { required: "First Name is required.", pattern: {
            value: /^^[\w\s-]+$$/,
            message: 'First Name should not contain special characters',
          }
        })}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName?.message}
        /><br></br><br></br>
        <TextField 
          label="Last Name"
          placeholder="Enter your Last Name"
          variant="outlined"
          fullWidth
          name="lastName"
          {...register("lastName", { required: "Last Name is required." })}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName?.message}
        /><br></br><br></br>
        <TextField
          label="E-mail"
          placeholder="Enter your E-mail ID"
          variant="outlined"
          fullWidth
          name="email"
          {...register("email", { required: "E-mail Address is required.", pattern: {
            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Please enter a valid email',
        } })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message}
        /><br></br><br></br>
        <TextField
          label="Password"
          placeholder="Enter your password"
          variant="outlined"
          fullWidth
          name="password"
          {...register("password", { required: "Set Password to proceed", pattern: {
            value: /^(?=.[a-z])(?=.[A-Z])(?=.*[0-9])(?=.[!@#$%^&])(?=.{8,})$/,
            message: 'Your password must contain 8 characters, 1 lowercase, 1 uppercase, 1 numeric, 1 special character',
        } })}
          error={Boolean(errors.password)}
          helperText={errors.password?.message}
        /><br></br><br></br>
{/* Radio button */}
        <FormControl error={Boolean(errors.gender)} >
          <FormLabel component="legend"> Choose Your Gender </FormLabel>
          <RadioGroup row aria-label="gender" name="gender">
            <FormControlLabel 
              value="female" 
              control={
                <Radio {...register("gender", { required: "Choose your gender" })} />
              } 
              label="Female"
             />
            <FormControlLabel 
              value="male" 
              control={
                <Radio {...register("gender", { required: "Choose your gender" })} />
              } 
              label="Male" 
              />
            <FormControlLabel 
              value="other" 
              control={
                <Radio {...register("gender", { required: "Choose your gender" })} />
              } 
              label="Other" 
            />
            
          </RadioGroup>
          <FormHelperText style={{color:'#d32f2f'}}>{errors.gender?.message}</FormHelperText>
        </FormControl>
        <div className="clearfix"></div>
{/* Check box */}
        <FormGroup 
          error={Boolean(errors.tnc)}
          style={{ display: "block", marginTop: "17px" }}
        >
          <FormControlLabel 
            control={
              <Checkbox  name="tnc" {...register("tnc", { required: "please agree to our terms and conditions" })} />
            } 
            label="I agree to all terms and conditions" 
          />
        </FormGroup>
        <FormHelperText style={{color:'#d32f2f'}}>{errors.tnc?.message}</FormHelperText>
        <div className="clearfix"></div><br></br>
        <Button variant="contained" color="primary" type="submit" className="btns">
            create new account
          </Button>
      </form>
    </div>
  )
}


export default App


















//import React from 'react'
//import RegisterForm from './formvalid'
/*import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Create from './Components/Create'
import Read from './Components/Read'
import Update from './Components/Update'*/
//import './App.css'
//const App = () => {
  //return (
    // <RegisterForm/>
   /* <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Create/>}/>
    <Route exact path="/read" element={<Read/>}/>
    <Route exact path='/edit' element={<Update/>}/>
    </Routes>
    </BrowserRouter>*/

  //)
//}

//export default App








//import './App.css';
// import Hello from './Hello'
// import Test from './Test'
// import EnhancedBorder from './HOC/ApplyBorder'
// import Hello from './Hello';
// import Test from './Test'
/*import ClickCounter from './clickCounter'
import HoverCounter from './hoverCounter';
import UpdatedComponent from './HOC/HocCounter'

const UpdatedClickCounter = UpdatedComponent(ClickCounter)
const UpdatedHoverCounter = UpdatedComponent(HoverCounter)

function App() {

  return (
    <div className="App">
      <UpdatedClickCounter name="Vimal"/>
      <UpdatedHoverCounter/>
    </div>
  );
}*/

/*import Page1 from "./Routes/page1";
import Page2 from "./Routes/page2";
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
<>
<Routes>
<Route path="/" element={<Page1/>}/>
<Route path="/page2" element={<Page2/>}/>
</Routes>
</>
  );
}*/
