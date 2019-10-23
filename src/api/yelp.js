import axios from 'axios';


export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer _owrfzpsA_BIFqB0CVqWwQ0TP8hQuJIhGRUvd5gJ4ezIpyV-w9HmcAfZHALDA9BZ98AlJeBfjmd-CUZH_SAaIBFhwK_YWDAVxof_YMXqd6II_CjO6CpcpMwSFWI5XXYx'
  }
});