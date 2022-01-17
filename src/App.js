import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Routers from './Routers';


function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Menu />
          <Routers />
        </BrowserRouter>
      </>
    </div>
  );
}


export default App;
