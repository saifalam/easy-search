import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID pdaTFfthtPx-qo5tGehMGrKlossHGXRx0DVx7otF548'
    }
});