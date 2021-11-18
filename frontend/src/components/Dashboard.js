import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Dashboard({ url }) {
    const { data, isLoading, error } = useFetchData({ url: "127.0.0.1" })

    const percentage = 25;

    if (error) {
        console.log(error);
    }

    return (
        <div className="Dashboard">
            <div className="Progress-bar">
                <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={{
                        root: {},
                        path: {
                            stroke: `#ff0000`,
                            strokeLinecap: 'round',
                            transition: 'stroke-dashoffset 0.5s ease 0s',
                            transformOrigin: 'center center',
                        },
                        trail: {
                            stroke: '#2B2B2B',
                            transformOrigin: 'center center',
                        },
                        text: {
                            fill: '#ff0000',
                        },
                        background: {
                            fill: '#2B2B2B',
                        },
                    }}
                />
            </div>
            <div className="Table-container">
                <table className="Table">
                    <tr>
                        <th>Port</th>
                        <th>Service</th>
                        <th>Vulnerability</th>
                        <th>Description</th>
                    </tr>
                    {isLoading ? <h4>...</h4> : <tbody>
                        {data.vulns.map((vuln, id) => (
                            <tr key={id}>
                                <td>{data.port}</td>
                                <td>{data.service}</td>
                                <td>{vuln}</td>
                                <td>ap_escape_quotes() may write beyond the end of a buffer when given malicious input. No included modules pass untrusted data to these functions, but third-party / external modules may. This issue affects Apache HTTP Server 2.4.48 and earlier.</td>
                            </tr>
                        ))}
                    </tbody>}
                </table>
            </div>
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