import { useState } from 'react';

function LandingPage() {
    const [url, seturl] = useState('');
    return (
        <div className="Content">
            <h1 className="Logo">SECR</h1>
            <div className="Input-container">
                <form onSubmit={console.log(url)}>
                    <input className="URL-input" value={url} type="text" placeholder="Enter URL" onInput={e => seturl(e.target.value)} /><input className="URL-submit" type="submit" value="Scan" />
                </form>
            </div>
        </div>
    );
}

export default LandingPage;