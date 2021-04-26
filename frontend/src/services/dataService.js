import axios from 'axios'

import promiseWrapper from '../utils/promiseWrapper'

const fetchData = (url, options) => {
  return promiseWrapper(axios.get(url, options))
}

const postData = async (url, data, options) => {
  return axios.post(url, data, options)
    .then(result => {
      return result.data
    })
    .catch(() => {
      return 'error'
    })
}

export {
  fetchData,
  postData
}