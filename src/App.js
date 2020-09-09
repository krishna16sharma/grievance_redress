import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

const initialState = {
    current: 'home'
}
const routeChange = (current) =>{
    this.setState({current: current})
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = initialState;
    }
  render(){
      const {current} = this.state;
      return (
          <div>
          {
              (current === 'home')
               ?
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                                  <a className="navbar-brand" href="#">Grievance Redressal</a>
                                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto ">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#" >Login</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Register</a>
                                            </li>
                                        </ul>
                                        </div>
                        </nav>
                        <div className='home' style={{fontFamily:'Arial'}}>
                            <h1>Welcome!</h1>
                        </div>
                    </div>
                : (current === 'login')
                    ?
                        <Login/>
                    :
                        <Register/>

            }
            </div>
      );
    }
}

export default App;
