import axios from 'axios';

export default axios.create({
  baseURL: 'http://dataservice.accuweather.com',
  params: {
    // part: 'snippet',
    // maxResults: 5,
    apikey: "AGV0xjWSyk9LAuD6zeQtyvQbRlExdZHr",
  },
});
