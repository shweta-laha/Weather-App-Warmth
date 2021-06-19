import React from 'react';
import {Box, makeStyles } from  '@material-ui/core';
import logo from '../image/wall3.jpeg';
import Form from './Form.jsx';
import Clock from 'react-live-clock';


const useStyles=makeStyles({
component:{
height:'100vh',
display:'flex',
alignItems:'center',
width:'90%',
marginLeft:'5%'

},
    leftContainer:{
        backgroundImage: `url(${logo})`,
        height:'98vh',
        width:'60%',
        backgroundSize: 'cover',
        borderRadius: '60px 0 0 60px',
      
    },

    rightContainer:{
        background:'linear-gradient(to right,rgba(11, 55, 71),  rgba(188, 241, 247))',
      color:'black',
        height:'98vh',
        width:'80%',
        fontSize:30
        

    }
})

const Weather= ()=> {
const classes = useStyles();

    return (
        <Box className={classes.component}>

          <Box className={classes.leftContainer} style={{   fontFamily:'Quicksand',}}>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div style={{
              textAlign:'center',
               fontSize:'2.8vw',
               fontFamily:'Quicksand',
               letterSpacing:2,
               paddingBottom:2,
               color:'white'
              }}>

{new Date().getDate()} {new Date().toLocaleString("en-US", { month: "long" })}, {new Date().getFullYear()}
<br/>
           <Clock  style={{fontSize:'1.8vw'}}
           format={'HH:mm:ss'} ticking={true} timezone={'India'} /></div>
           </Box>

          <Box className={classes.rightContainer}>
             <Form/>
          </Box>

        </Box>
        
    )
}
export default Weather;