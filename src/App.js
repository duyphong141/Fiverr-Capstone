import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate';
import ChiTietLoai from './pages/ChiTietLoai/ChiTietLoai';
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate exact path='/home' component={Home}/>
        {/* <HomeTemplate exact path='/chitietloai/:loaicongviec' component={ChiTietLoai}/> */}
        <Route exact path='/chitietloai/:loaicongviec' component={ChiTietLoai}/>
        
        <HomeTemplate exact path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
