import axios from "axios"; 

export default axios.create({
    baseURL: "http://127.0.0.1:8000/backend_api/photos",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json', 
    }
})