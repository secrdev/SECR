import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CalculateSecurityScore from '../utils/CalculateSecurityScore';
import Loadscreen from './Loadscreen';

export default function Dashboard({ url }) {
    const { data, isLoading, error } = useFetchData({ url: url })

    const score = isLoading ? null : CalculateSecurityScore(1, data.vulns.length);

    console.log(data);

    if (error) {
        console.log(error);
    }

    return (
        <div className="Dashboard">
            {!isLoading ? (
                <>
                    <div className="Progress-bar">
                        <CircularProgressbar value={score} text={`${score}%`} background={true} styles={{
                            root: {},
                            path: {
                                stroke: `rgba(255, 00, 00)`,
                            },
                            trail: {
                                stroke: '#2b2b2b',
                            },
                            text: {
                                fill: '#ff0000',
                            },
                            background: {
                                fill: '#2b2b2b',
                            }
                        }} />
                    </div><div className="Table-container">
                        <table className="Table">
                            <tr>
                                <th>Port</th>
                                <th>Service</th>
                                <th>Vulnerability</th>
                                <th>Description</th>
                            </tr>
                            {<tbody>
                                {data.vulns.map((vuln, id) => (
                                    <tr key={id}>
                                        <td>{data.port}</td>
                                        <td>{data.service.replace('_http-server-header:', '')}</td>
                                        <td>{vuln.replace('https://vulners.com/cve/', '')}</td>
                                        <td>Exim supports the use of multiple \"-p\" command line arguments which are malloc()'ed and never free()'ed, used in conjunction with other issues allows attackers to cause arbitrary code execution. This affects exim version 4.89 and earlier. Please note that at this time upstream has released a patch (commit 65e061b76867a9ea7aeeb535341b790b90ae6c21), but it is not known if a new point release is available that addresses this issue at this time.</td>
                                    </tr>
                                ))}
                            </tbody>}
                        </table>
                    </div>
                </>
            ) : (<Loadscreen />)}
        </div>
    )
};

function useFetchData({ url }) {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await axios.get('http://localhost:15411', { params: { url: url } });
                const descriptions = await getDescriptions(res.data.vulns);
                setData({
                    port: res.data.port,
                    service: res.data.service,
                    vulns: res.data.vulns,
                    descriptions: descriptions,
                })
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [])

    return {
        data,
        isLoading,
        error
    }
}

async function getDescriptions(vulns) {
    const result = [];
    for (let vuln of vulns) {
        axios.get(`https://olbat.github.io/nvdcve/${vuln.replace('https://vulners.com/cve/', '')}.json`).then(res => {
            result.push(res.data.cve.description.description_data[0].value);
        });
    }
    return result;
}