import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Grievance from './components/grievance_form/grievance_form';

import './App.css';

const initialState = {
    current: 'regis'
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
            <Navigation current={{current}}/>
          {
              (current === 'home')
               ?
                   <div className='home' style={{fontFamily:'Arial'}}>
                       <h1>Welcome!</h1>
                   </div>
                : (current === 'login')
                    ?
                        <Login/>
                    : (current === 'register')
                        ?
                            <Register/>
                        :
                            <Grievance/>

            }
            </div>
      );
    }
}

export default App;
