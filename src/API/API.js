import axios from 'axios';


export const locationInfoAPI = {
    getRates() {
        return axios.get(`https://www.cbr-xml-daily.ru/latest.js`)
            .then(response =>{
                return response
            })
    }
}
