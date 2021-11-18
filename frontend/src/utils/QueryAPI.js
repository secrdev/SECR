import axios from 'axios';

export default async function QueryAPI({ url }) {
    if (url != null) {
        await axios.get('http://localhost:8080', { params: { url: url } }).then((response) => {
            const data = response.data;
            return (
                <tbody>
                    {data.map((vuln) => (
                        <tr key={vuln.id}>
                            <td>{vuln.port}</td>
                            <td>{vuln.service}</td>
                            <td>{vuln.vulns.id}</td>
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