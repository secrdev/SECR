import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CalculateSecurityScore from '../utils/CalculateSecurityScore';
import Loadscreen from './Loadscreen';

export default function Dashboard({ url }) {
    const { data, isLoading, error } = useFetchData({ url: url })

    const score = isLoading ? null : CalculateSecurityScore(1, data.vulns.length);

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
                            {isLoading ? <h4>Loading...</h4> : <tbody>
                                {data.vulns.map((vuln, id) => (
                                    <tr key={id}>
                                        <td>{data.port}</td>
                                        <td>{data.service.replace('_http-server-header:', '')}</td>
                                        <td>{vuln.replace('https://vulners.com/cve/', '')}</td>
                                        <td>ap_escape_quotes() may write beyond the end of a buffer when given malicious input. No included modules pass untrusted data to these functions, but third-party / external modules may. This issue affects Apache HTTP Server 2.4.48 and earlier.</td>
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
                const res = await axios.get('http://localhost:8080', { params: { url: url } })
                setData({
                    port: res.data.port,
                    service: res.data.service,
                    vulns: res.data.vulns,
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