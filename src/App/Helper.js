import axios from 'axios'

const fetchApi = async (baseURL) => {
  const { data } = await axios.get(`${baseURL}`)
  return data
}

export { fetchApi }
