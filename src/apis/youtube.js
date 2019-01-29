
import axios from 'axios';

// this is a very basic call for axios, the query strings can be added when we make a call to this instance.

const googleKEY = 'AIzaSyDKRalnjWdYlUspYNXYmh0BEXf4eWHxzMo'

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params:{
    part:'snippet',
    maxResults: 5,
    key:googleKEY,
  }
});