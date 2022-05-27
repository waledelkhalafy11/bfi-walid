import axios from 'axios'
const getRequest = axios.get(`${process.env.REACT_APP_DOMAIN}/api/allunits`)
  .then(res => {
    const response = res.data;
    return response
  })

let initialState = getRequest;

const apiReducer = (state = initialState) => {
  
    return state
  
}

export default apiReducer;

