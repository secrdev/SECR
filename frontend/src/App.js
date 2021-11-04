import './App.css';


function App() {
  return (
    <div className="Content">
      <h1 className="Logo">SECR</h1>
      <div className="Input-container">
        <input className="URL-input" type="text" placeholder="Enter URL" /><input className="URL-submit" type="submit" value="Scan" />
      </div>
    </div>
  );
}

export default App;