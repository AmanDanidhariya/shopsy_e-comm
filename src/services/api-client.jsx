import axios from "axios"

const instance =axios.create({
    baseURL:"https://real-time-amazon-data.p.rapidapi.com",
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'real-time-amazon-data.p.rapidapi.com'
      }
    

})

export default instance;