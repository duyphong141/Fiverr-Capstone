import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';

import { createBrowserHistory } from 'history';
import { HomeTemplate } from './templates/HomeTemplate';
import ChiTietLoai from './pages/ChiTietLoai/ChiTietLoai';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import CongViec from './pages/CongViec/CongViec';
import Register from './pages/Register/Register';
export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history} forceRefresh>
      <Switch>
        <HomeTemplate exact path='/home' component={Home}/>
        <Route exact path='/chitietloai/:maloaicongviec' component={ChiTietLoai}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/register' component={Register}/>

        {/* 2 thằng này là giông nhau, chỉ khác đường link */}
        <Route exact path='/search/:congviectimkiem' component={CongViec}/>
        <Route exact path='/categories/:machitietloai' component={CongViec}/>


        <HomeTemplate exact path='/' component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
