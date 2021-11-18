import axios from 'axios';

export default async function QueryAPI({ url }) {
    if (url != null) {
        await axios.get('http://localhost:8080', { params: { url: url } }).then((response) => {
            const data = response.data;
            console.log(data);
            return (
                <tbody>
                    {data.map((vuln) => (
                        <tr key={vuln.id}>
                            <td>{response.data.port}</td>
                            <td>{response.data.service}</td>
                            <td>{vuln}</td>
                            <td>Yaay</td>
                        </tr>
                    ))}
                </tbody>
            );
        }).catch(error => {
            console.log(error);
        });
    }
}