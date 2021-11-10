import axios from 'axios';

export default async function QueryAPI(url) {
    if (url != null) {
        try {
            const response = await axios.get('http://localhost:8080', { params: { url: url } });
            if (response.status === 200) {
                return response.data;
            }
        } catch (error) {
            console.log(error);
        }
    }
}