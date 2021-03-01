import './App.css';
import Header from './components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CricketerInfo from './components/CricketerInfo/CricketerInfo';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <CricketerInfo></CricketerInfo>
      <footer>
        <h6>Copyright 2021 Bangladesh Cricket-board</h6>
      </footer>
    </div>
  );
}

export default App;
