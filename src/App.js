import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Grievance from './components/grievance_form/grievance_form';
import grievance1 from "./components/images/Grievance1.png";
import Particles from 'react-particles-js';

import './App.css';

const particlesOptions = {
  particles: {
      line_linked: {
                width:1,
                color: "#5C5559"
            },
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 100
        }
    },
    opacity:0.2,
    number:{
        value: 100
    }
  }
}



const initialState = {
    current: 'h'
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = initialState;
    }
    routeChange = (current) =>{
        this.setState({current: current})
    }
  render(){
      const {current} = this.state;
      return (
          <div>
          <Particles className='particles'
            params={particlesOptions}
            />
            <Navigation current={{current}} routeChange={this.routeChange}/>
          {
              (current === 'home')
               ?
                   <div className='home'>
                       <h1>Welcome!</h1>
                       <div><img src={grievance1} alt="pic"/></div>
                       <p>Grievance Redressal is a management and governance related process used commonly in India. Grievance Redress Mechanism
                        is part and parcel of the machinery of any administration.</p>
                        <p>Our goal is to channel the grievances to the right authorities</p>
                        <p>We facilitate the resolution of grievances in a fair and impartial manner involving the respective department (dealing
                         with the substantive function connected with the grievance), maintaining necessary confidentiality, as the case may be.</p>
                   </div>
                : (current === 'login')
                    ?
                        <Login routeChange={this.routeChange}/>
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
