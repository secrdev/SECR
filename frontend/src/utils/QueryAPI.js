import axios from 'axios';

export default async function QueryAPI(url) {
    if (url != null) {
        await axios.get('http://localhost:8080', { params: { url: url } }).then((response) => {
            response.data.map((listValue, index) => {
                return (
                    <tr key={index}>
                        <td>{listValue.port}</td>
                        <td>{listValue.service}</td>
                        <td>{listValue.vulns}</td>
                    </tr>
                )
            });
        }).catch(error => {
            console.log(error);
        });
    }
}