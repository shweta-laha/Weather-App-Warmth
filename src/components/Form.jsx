import React from "react";
import {useEffect, useState} from 'react';
import {Box, TextField, Button, makeStyles} from '@material-ui/core';
import {getData} from '../service/api.js';
import Information from './information.jsx'


const useStyles= makeStyles({
component:{
  padding:20,
  backgroundColor:'rgba(31, 100, 128)'
},

input:{
color:'white',
marginRight:15,
marginLeft:15,  
  },
button:{
  width:100,
  height:40,
  marginLeft:10,
  marginTop:5,
 borderRadius:60,
  backgroundColor:'rgba(41, 43, 46,0.6)'
}

})


const Form= ()=> {
const classes=useStyles();
 const [data,getWeatherData]=useState();
 const [city, setCity]=useState('');
 const [country, setCountry]=useState('');
 const [click, handleClick]=useState('false');

  useEffect(()=>{
   const getWeather=async()=>{
   city && await getData(city,country).then(response =>{
    getWeatherData(response.data);
      console.log(response.data)
    }
     )
      }
    getWeather();
    handleClick(false);
},[click]);

const handleCityChange=(value)=>{
  setCity(value);
}

const handleCountryChange=(value)=>{
  setCountry(value);
}


        return (
        <React.Fragment>
            <Box className={classes.component}>
            <TextField 
             label="Enter Your City"
            onChange={(e)=>handleCityChange(e.target.value)} 
            inputProps={{className:classes.input}}
            InputLabelProps={{
              style: { color: 'rgba(184, 191, 194)' , fontSize:'13', paddingBottom:5},
            }}
             className={classes.input}
             />
            <TextField id="standard-basic" 
            label="Enter Your Country"
            onChange={(e)=>handleCountryChange(e.target.value)}   
            inputProps={{className:classes.input}} 
            InputLabelProps={{
              style: { color: 'rgba(184, 191, 194)', fontSize:'13', paddingBottom:5 },
            }}/>

            <Button  
            variant="outlined" 
            onClick={()=>handleClick(true)}
            className={classes.button}
            style={{color: 'rgba(184, 191, 194)'}}>Search</Button>
            </Box>
            <Information data={data}/>
        </React.Fragment>
        )   
    }
    export default Form;