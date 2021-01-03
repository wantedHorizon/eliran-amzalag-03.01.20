import axios from 'axios';



export default axios.create({
  baseURL: 'https://dataservice.accuweather.com',
  params: {
    apikey: "wEAIRZASaw0JGxATP6zOeYfY8yd3pm3r",
  },
});
