
import axios from 'axios';

const URL='https://api.openweathermap.org/data/2.5/weather';
const API_KEY='9fd95f81221a825b7adb9654e15166ba';


export const getData= async(city, country)=>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}