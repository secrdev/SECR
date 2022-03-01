import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CalculateSecurityScore from '../utils/CalculateSecurityScore';
import Loadscreen from './Loadscreen';
import React from 'react';

export default function Dashboard({ url }) {
    const { data, isLoading, error } = useFetchData({ url: url });
    const [searchTerm, setSearchTerm] = useState('');

    console.log(searchTerm);

    if (error) {
        console.log(error);
    }

    if (!isLoading) {
        return (
            <>
                {(data) ? (<>
                    <div className="Dashboard">
                        <div className="Progress-bar">
                            <CircularProgressbar value={data.score} text={`${data.score}%`} background={true} styles={{
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
                        </div>
                        <div className="Table-container">
                            <input className="URL-input-table" type="text" placeholder="Search..." maxLength={2100} onChange={(e) => setSearchTerm(e.target.value.trim())} />
                            <table className="Table">
                                <tbody>
                                    <tr className="Table-header">
                                        <th>Port</th>
                                        <th>Service</th>
                                        <th>Vulnerability</th>
                                    </tr>
                                </tbody>
                                {<tbody>
                                    {data.vulns.filter((val) => {
                                        if (searchTerm === "") {
                                            return val;
                                        } else if (val.toLowerCase().includes(searchTerm.toLowerCase())) {
                                            return val;
                                        }
                                    }).map((vuln, id) => (
                                        <tr key={id}>
                                            <td>{data.port}</td>
                                            <td>{data.service.replace('_http-server-header:', '')}</td>
                                            <td><a href={vuln}>{vuln.replace('https://vulners.com/cve/', '')}</a></td>
                                        </tr>
                                    ))}
                                </tbody>}
                            </table>
                        </div>
                    </div>
                </>) : (<>
                    <div className="Dashboard">
                        <h1 className="SECR-message">No Vulnerabilities!</h1>
                    </div>
                </>)}
            </>
        )
    } else {
        return (
            <Loadscreen />
        )
    }
}

function useFetchData({ url }) {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const res = await axios.get('http://localhost:15411', { params: { url: url } });
            setData({
                port: res.data.port,
                service: res.data.service,
                vulns: res.data.vulns,
                score: CalculateSecurityScore(1, res.data.vulns.length),
            });
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
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
