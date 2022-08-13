import axios from 'axios'
const getRequest = axios.get(`${process.env.REACT_APP_DOMAIN}/api/webcontent`)
  .then(res => {
    const response = res.data;
    return response
  })

let initialState = getRequest;

const webReducer = (state = initialState) => {
  
    return state
  
}

export default webReducer;

