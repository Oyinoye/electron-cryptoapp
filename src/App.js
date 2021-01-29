import './App.css';
import Assets from './pages/assets/Assets';
import Nav from './components/nav/Nav';
import Dtable from './components/table/Dtable';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='app'>
      <Nav />
      <Dtable />
    </div>
  );
}

export default App;
