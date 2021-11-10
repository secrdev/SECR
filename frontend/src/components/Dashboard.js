import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import QueryAPI from '../../utils/QueryAPI';

export default function Dashboard({ url }) {
    const res = QueryAPI(url);
    const displayResInTable = ({ res }) => {
        res.vulns.map((vuln, index) => {
            return (
                <tr key={index}>
                    <td>{res.port}</td>
                    <td>{res.service}</td>
                    <td>{vuln}</td>
                    <td>lol</td>
                </tr>
            )
        })
    }
    return (
        <div className="Dashboard">
            <div className="Progress-bar">
                <CircularProgressbar value={25} text={'25%'} background={true} styles={{
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
                <table className="Table">
                    <tr>
                        <th>Port</th>
                        <th>Service</th>
                        <th>Vulnerability</th>
                        <th>Description</th>
                    </tr>
                    <displayResInTable res={res} />
                </table>
            </div>
        </div>
    )
}