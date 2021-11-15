import { CircularProgressbar } from 'react-circular-progressbar';
import QueryAPI from '../utils/QueryAPI';

export default function Dashboard({ url }) {
    const res = QueryAPI("127.0.0.1");
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
                    },
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
                    <tr>
                        <td>80</td>
                        <td>Apache HTTP 5.0</td>
                        <td>CVE-2021-41524</td>
                        <td>While fuzzing the 2.4.49 httpd, a new null pointer dereference was detected during HTTP/2 request processing, allowing an external source to DoS the server. This requires a specially crafted request. The vulnerability was recently introduced in version 2.4.49. No exploit is known to the project.</td>
                    </tr>
                    <tr>
                        <td>80</td>
                        <td>Apache HTTP 5.0</td>
                        <td>CVE-2021-41524</td>
                        <td>While fuzzing the 2.4.49 httpd, a new null pointer dereference was detected during HTTP/2 request processing, allowing an external source to DoS the server. This requires a specially crafted request. The vulnerability was recently introduced in version 2.4.49. No exploit is known to the project.</td>
                    </tr>
                    <tr>
                        <td>80</td>
                        <td>Apache HTTP 5.0</td>
                        <td>CVE-2021-41524</td>
                        <td>While fuzzing the 2.4.49 httpd, a new null pointer dereference was detected during HTTP/2 request processing, allowing an external source to DoS the server. This requires a specially crafted request. The vulnerability was recently introduced in version 2.4.49. No exploit is known to the project.</td>
                    </tr>
                    <tr>
                        <td>80</td>
                        <td>Apache HTTP 5.0</td>
                        <td>CVE-2021-41524</td>
                        <td>While fuzzing the 2.4.49 httpd, a new null pointer dereference was detected during HTTP/2 request processing, allowing an external source to DoS the server. This requires a specially crafted request. The vulnerability was recently introduced in version 2.4.49. No exploit is known to the project.</td>
                    </tr>
                    <tr>
                        <td>80</td>
                        <td>Apache HTTP 5.0</td>
                        <td>CVE-2021-41524</td>
                        <td>While fuzzing the 2.4.49 httpd, a new null pointer dereference was detected during HTTP/2 request processing, allowing an external source to DoS the server. This requires a specially crafted request. The vulnerability was recently introduced in version 2.4.49. No exploit is known to the project.</td>
                    </tr>
                    <tr>
                        <td>80</td>
                        <td>Apache HTTP 5.0</td>
                        <td>CVE-2021-41524</td>
                        <td>While fuzzing the 2.4.49 httpd, a new null pointer dereference was detected during HTTP/2 request processing, allowing an external source to DoS the server. This requires a specially crafted request. The vulnerability was recently introduced in version 2.4.49. No exploit is known to the project.</td>
                    </tr>
                    <tr>
                        <td>80</td>
                        <td>Apache HTTP 5.0</td>
                        <td>CVE-2021-41524</td>
                        <td>While fuzzing the 2.4.49 httpd, a new null pointer dereference was detected during HTTP/2 request processing, allowing an external source to DoS the server. This requires a specially crafted request. The vulnerability was recently introduced in version 2.4.49. No exploit is known to the project.</td>
                    </tr>
                    <tr>
                        <td>80</td>
                        <td>Apache HTTP 5.0</td>
                        <td>CVE-2021-41524</td>
                        <td>While fuzzing the 2.4.49 httpd, a new null pointer dereference was detected during HTTP/2 request processing, allowing an external source to DoS the server. This requires a specially crafted request. The vulnerability was recently introduced in version 2.4.49. No exploit is known to the project.</td>
                    </tr>
                </table>
            </div>
        </div>
    )
};
