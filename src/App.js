import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Routers from './Routers';



function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Menu />
          <Routers/>
        </Router>
      </>
    </div>
  );
}


export default App;
