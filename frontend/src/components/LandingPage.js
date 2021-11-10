import { useState } from 'react';
import Dashboard from './Dashboard';

export default function LandingPage() {
    const [url, seturl] = useState('');

    function handleUrlChange(e) {
        seturl(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        return (
            <Dashboard url={url} />
        )
    }

    return (
        <div className="Landing-page">
            <h1 className="Logo">SECR</h1>
            <div className="Input-container">
                <form onSubmit={handleSubmit}>
                    <input className="URL-input" value={url} type="text" placeholder="Enter URL" onChange={handleUrlChange} /><input className="URL-submit" type="submit" value="Scan" />
                </form>
            </div>
        </div>
    );
}
