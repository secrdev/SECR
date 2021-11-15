import axios from 'axios';

export default async function QueryAPI(url) {
    if (url != null) {
        await axios.get('http://localhost:8080', { params: { url: url } }).then((response) => {
            return response.data;
        }).catch(error => {
            console.log(error);
        });
    }
}