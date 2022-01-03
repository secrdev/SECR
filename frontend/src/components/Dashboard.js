import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CalculateSecurityScore from '../utils/CalculateSecurityScore';
import Loadscreen from './Loadscreen';

export default function Dashboard({ url }) {
    const { data, isLoading, error } = useFetchData({ url: url });

    const score = isLoading ? null : CalculateSecurityScore(1, data.vulns.length);

    if (error) {
        console.log(error);
    }

    return (
        <div className="Dashboard">
            {!isLoading && data.descriptions !== null ? (
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
                            <tbody>
                                <tr>
                                    <th>Port</th>
                                    <th>Service</th>
                                    <th>Vulnerability</th>
                                    <th>Description</th>
                                </tr>
                            </tbody>
                            {<tbody>
                                {data.vulns.map((vuln, id) => (
                                    <tr key={id}>
                                        <td>{data.port}</td>
                                        <td>{data.service.replace('_http-server-header:', '')}</td>
                                        <td><a href={vuln}>{vuln.replace('https://vulners.com/cve/', '')}</a></td>
                                        <td>{data.descriptions[id]}</td>
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
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get('http://localhost:15411', { params: { url: url } });
                const descriptions = await getDescriptions(res.data.vulns);
                console.log(descriptions)
                setData({
                    port: res.data.port,
                    service: res.data.service,
                    vulns: res.data.vulns,
                    descriptions: descriptions,
                });
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [url]);

    return {
        data,
        isLoading,
        error
    };
}

async function getDescriptions(vulns) {
    const result = [];
    vulns.forEach((vuln) => {
        axios.get(`https://olbat.github.io/nvdcve/${vuln.replace('https://vulners.com/cve/', '')}.json`).then(res => {
            result.push(res.data.cve.description.description_data[0].value);
        });
    })
    return result;
}