import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Header from './components/header/Header';
import HomeScreen from './components/home/HomeScreen';
import Login from './components/login/Login';
import RegisterUser from './components/login/RegisterUser';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Route path='/' component={HomeScreen}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={RegisterUser}/>
      </Router>
    </div>
  );
}

export default App;
