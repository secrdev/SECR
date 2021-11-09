import axios from 'axios';

export default function QueryAPI(url) {
    if (url != null) {
        axios.get('http://localhost:8080/', {
            params: {
                url: url,
            }
        }).then(Response => {
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        });
    }
}