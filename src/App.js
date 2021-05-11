import './App.css';
import Assets from './pages/assets/Assets';
import Nav from './components/nav/Nav';
import Dtable from './components/table/Dtable';
import Table from './components/table/Table';

import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './components/cards/Cards';
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom';
import history from "./History";
import Exchange from './pages/exchange/Exchange'
import Wallet from './pages/wallet/Wallet';



function App() {
  return (
    <div className="app">
      <BrowserRouter history = {history}>
      <Nav />
        <Switch>
            <Route path='/home' component = {Dtable} />
            <Route path='/assets' component = {Assets} />
            <Route path='/exchange' component = {Exchange} />
            <Route path='/wallet' component = {Wallet} />
            <Route exact-path='/' component = {Assets} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
