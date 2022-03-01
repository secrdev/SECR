import { useState } from 'react';
import Dashboard from './Dashboard';

export default function LandingPage() {
    const [url, setUrl] = useState('');
    const [submit, setSubmit] = useState(false);

    function handleUrlChange(e) {
        setUrl(e.target.value);
    }

    function handleSubmit(e) {
        if (url.trim() !== '') {
            e.preventDefault();
            setSubmit(true);
        }
    }

    return (
        <>
            {(!submit) ? (
                <div className="Landing-page">
                    <h1 className="Logo">SECR</h1>
                    <div className="Input-container">
                        <form onSubmit={handleSubmit}>
                            <input className="URL-input" value={url} type="text" placeholder="App URL" onChange={handleUrlChange} maxLength={2100} /><input className="URL-submit" type="submit" value="Scan" disabled={url.trim() === ''} />
                        </form>
                    </div>
                </div>
            ) : (<Dashboard url={url} />)}
        </>
    );
}
