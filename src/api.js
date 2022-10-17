import axios from 'axios';


// const api = axios.create({
//     baseURL: 'https://generador-datos-fake.p.rapidapi.com/custom/types'
// });
const api = require("axios");



axios({
    "method":"GET",
    "url":"https://generador-datos-fake.p.rapidapi.com/person/",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"generador-datos-fake.p.rapidapi.com",
    "x-rapidapi-key":"de8e95c4aamsh45c40c5e7a3aaa0p1a6c53jsnbb1b5c57abba",
    "useQueryString":true
    },"params":{
    "results":"10"
    }
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((error)=>{
      console.log(error)
    })
export default api;


