import React from "react";
import { Box, Typography, makeStyles } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import OpacityIcon from "@material-ui/icons/Opacity";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness6Icon from "@material-ui/icons/Brightness6";
import DehazeIcon from "@material-ui/icons/Dehaze";
import CloudIcon from "@material-ui/icons/Cloud";

<<<<<<< HEAD
const useStyles=makeStyles(
    {
        component:{
            margin:30,
           

        },
        row:{
            padding:12,
            fontSize: 'calc(14px + (24 - 14) * ((100vw - 768px) / (1600 - 768)))',
            color:'white',
            letterSpacing:2,
            fontFamily:'Source Sans Pro'
        },
        icon: {
            color: 'black',
            marginRight: 5,
            fontSize: 'calc(22px + (30 - 22) * ((100vw - 768px) / (1600 - 768)))',

        },
    }
)

const Information =({data})=> {
    const classes=useStyles();
    return (
        data ?
        <Box className={classes.component} style={{fontSize:'2vw'}}>
        <Typography className={classes.row}><LocationOnIcon className={classes.icon}/>   Location: {data.name}, {data.sys.country}</Typography>
        <Typography className={classes.row}><LinearScaleIcon className={classes.icon}/>   Temparature: {data.main.temp}° C</Typography>
        <Typography className={classes.row}><OpacityIcon  className={classes.icon}/>   Humidity: {data.main.humidity} %</Typography>
        <Typography className={classes.row}><Brightness5Icon className={classes.icon}/>   Sunrise: {new Date (data.sys.sunrise*1000).toLocaleTimeString()}</Typography>
        <Typography className={classes.row}> < Brightness6Icon className={classes.icon}/>   Sunrise: {new Date (data.sys.sunset*1000).toLocaleTimeString()}</Typography>
        <Typography className={classes.row}><DehazeIcon className={classes.icon}/>   Condition: {data.weather[0].main}</Typography>
        <Typography className={classes.row}><CloudIcon className={classes.icon}/>   Clouds: {data.clouds.all} %</Typography>
        </Box> : ''
    )
}
export default Information;
=======
const useStyles = makeStyles({
  component: {
    margin: 30,
  },
  row: {
    padding: 12,
    fontSize: "calc(14px + (24 - 14) * ((100vw - 768px) / (1600 - 768)))",
    color: "white",
    letterSpacing: 2,
    fontFamily: "Source Sans Pro",
  },
  icon: {
    color: "black",
    marginRight: 5,
    fontSize: "calc(22px + (30 - 22) * ((100vw - 768px) / (1600 - 768)))",
  },
});

const Information = ({ data }) => {
  const classes = useStyles();
  return data ? (
    <Box className={classes.component} style={{ fontSize: "2vw" }}>
      <Typography className={classes.row}>
        <LocationOnIcon className={classes.icon} /> Location: {data.name},{" "}
        {data.sys.country}
      </Typography>
      <Typography className={classes.row}>
        <LinearScaleIcon className={classes.icon} /> Temparature:{" "}
        {data.main.temp}° C
      </Typography>
      <Typography className={classes.row}>
        <OpacityIcon className={classes.icon} /> Humidity: {data.main.humidity}{" "}
        %
      </Typography>
      <Typography className={classes.row}>
        <Brightness5Icon className={classes.icon} /> Sunrise:{" "}
        {new Date(data.sys.sunrise * 1000).toLocaleTimeString()}
      </Typography>
      <Typography className={classes.row}>
        <Brightness6Icon className={classes.icon} /> Sunrise:{" "}
        {new Date(data.sys.sunset * 1000).toLocaleTimeString()}
      </Typography>
      <Typography className={classes.row}>
        <DehazeIcon className={classes.icon} /> Condition:{" "}
        {data.weather[0].main}
      </Typography>
      <Typography className={classes.row}>
        <CloudIcon className={classes.icon} /> Clouds: {data.clouds.all} %
      </Typography>
    </Box>
  ) : (
    ""
  );
};
export default Information;
>>>>>>> f826bbb84bb5ef8bf854f831a1abc39073e3288d
