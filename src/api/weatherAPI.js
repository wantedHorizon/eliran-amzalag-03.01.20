import axios from 'axios';

// AGV0xjWSyk9LAuD6zeQtyvQbRlExdZHr,
export default axios.create({
  baseURL: 'http://dataservice.accuweather.com',
  params: {
    // part: 'snippet',
    // maxResults: 5,
    apikey: "wQdLdkzH1a0YWqxhtzA6A0mosEq2ZMM0",
  },
});
