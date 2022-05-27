import axios from 'axios'
const getRequest = axios.get(`http://127.0.0.1:8000/api/allunits`)
.then(res => {
  const response = res.data;
  return response
})

let initialState = getRequest;

const apiReducer = (state = initialState  )=> {
    if (true){
    
        return state
    }
}

export default apiReducer ;

