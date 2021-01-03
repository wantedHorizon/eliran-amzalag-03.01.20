import axios from 'axios';


// wEAIRZASaw0JGxATP6zOeYfY8yd3pm3r
const key = process.env.REACT_APP_API_KEY;
console.log(key);
export default axios.create({
  baseURL: 'https://dataservice.accuweather.com',
  params: {
    apikey: key,
  },
});
