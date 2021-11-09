import axios from 'axios';

export default function QueryAPI(url) {
    if (url != null) {
        axios.get({
            url: `localhost:8080/?url=${url}`,
            method: 'get',
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }
}