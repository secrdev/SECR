import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function Dashboard() {
    return (
        <div className="Content">
            <div style={{ width: 250, height: 250 }}>
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
        </div>
    )
}