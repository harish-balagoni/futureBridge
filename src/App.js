import './App.css';
import Header from './components/Header';
import Movies from './components/Movies';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
      <Movies/>
      </div>
    </div>
  );
}

export default App;
