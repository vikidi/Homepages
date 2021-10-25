import axios from 'axios'

import promiseWrapper from '../utils/promiseWrapper'

const fetchData = (url, options) => {
  return promiseWrapper(axios.get(url, options))
}

const fetchDataWithoutWrapper = (url, options) => {
  return axios.get(url, options)
}

const postData = async (url, data, options) => {
  return axios.post(url, data, options)
    .then(result => {
      return result.data
    })
    .catch((err) => {
      console.log(err)
      return 'error'
    })
}

export {
  fetchData,
  fetchDataWithoutWrapper,
  postData
}