import { useState } from 'react';
import Dashboard from './Dashboard';

export default function LandingPage() {
    const [url, seturl] = useState('');
    const [isSubmitted, setisSubmitted] = useState(false);

    function handleUrlChange(e) {
        seturl(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setisSubmitted(true);
    }

    const Land = () => {
        return (
            <div className="Landing-page">
                <h1 className="Logo">SECR</h1>
                <div className="Input-container">
                    <form onSubmit={handleSubmit}>
                        <input className="URL-input" value={url} type="text" placeholder="Enter URL" onChange={handleUrlChange} /><input className="URL-submit" type="submit" value="Scan" />
                    </form>
                </div>
            </div>
        )
    }

    return (
        <>
            {(!isSubmitted) ? <Land /> : <Dashboard url={url} />}
        </>
    );
}
