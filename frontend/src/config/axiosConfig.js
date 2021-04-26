import axios from 'axios'

if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'https://api.villesaarinen.me'
}
else {
  axios.defaults.baseURL = 'http://localhost:8080'
}

//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'