import axios from 'axios';

// AGV0xjWSyk9LAuD6zeQtyvQbRlExdZHr,
// wQdLdkzH1a0YWqxhtzA6A0mosEq2ZMM0

export default axios.create({
  baseURL: 'http://dataservice.accuweather.com',
  params: {
    // part: 'snippet',
    // maxResults: 5,
    apikey: "wEAIRZASaw0JGxATP6zOeYfY8yd3pm3r",
  },
});
