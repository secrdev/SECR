import axios from 'axios';

export default function QueryAPI(url) {
    axios.get({
        url: `localhost:8080/?url=${url}`,
        method: 'get',
        timeout: 90000,
    }).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.log(error);
    });
}