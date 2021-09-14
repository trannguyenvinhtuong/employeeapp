import {Component} from 'react';
import Home from './components/home/Home';
import Navcp from './components/home/Navcp';
import './Style.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import routes from './routes';

class App extends Component {
  showContent = (routes) =>{
    var rs = null;
    if(routes.length>0){
      rs=routes.map((route)=>{
        return(
          <Route
            key={route.id}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        )
      })
    }
    return rs;
}
  render() {
    return (
      <Router>
        <Navcp />
        <Switch>
          {this.showContent(routes)}
        </Switch>
      </Router>
    );
  }
}

export default App;
