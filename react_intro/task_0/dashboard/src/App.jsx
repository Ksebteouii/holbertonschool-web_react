import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src="holberton-logo.jpg" alt="holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright {new Date().getFullYear()} - holberton School</p>
      </div>
    </div>
  );
}

export default App;
