import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation/Navigation';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Grievance from './components/grievance_form/grievance_form';
import Aadhaar from './components/Aadhaar/aadhaar';
import Dashboard from './components/Dashboard/dashboard';
import Adm_Dashboard from './components/Dashboard/adm_dashboard';
import Dept_user from './components/Dashboard/dept_user';
import G_details from './components/G_details/G_details';
import G_details1 from './components/G_details/G_details1';
import G_details2 from './components/G_details/G_details2';
import WebTraffic from './components/WebTraffic/webtraffic';
import grievance1 from "./components/images/Grievance1.png";
import Response from './components/Response_form/Response';
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
    current: 'g_details1',
    logged: 1
}
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = initialState;
    }
    routeChange = (current) =>{
        this.setState({current: current})
        console.log(current)
    }
  render(){
      const {current,logged} = this.state;
      return (
          <div>
          <Particles className='particles'
            params={particlesOptions}
            />
            <Navigation current={{current}} logged={{logged}} routeChange={this.routeChange}/>
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
                            <Register routeChange={this.routeChange}/>
                        :
                        (current === 'aadhaar')
                            ?
                            <Aadhaar routeChange={this.routeChange}/>
                            :
                            (current === 'adm_login')
                                ?
                                    <Adm_Dashboard routeChange={this.routeChange}/>
                                :
                                (current === 'grievance_form')
                                    ?
                                        <Grievance routeChange={this.routeChange}/>
                                    :
                                    (current === 'g_details')
                                        ?
                                        <G_details routeChange={this.routeChange}/>
                                        :
                                    (current === 'webtraffic')
                                        ?
                                        <WebTraffic routeChange={this.routeChange}/>
                                        :
                                        (current === 'dashboard')
                                            ?
                                            <Dashboard routeChange={this.routeChange}/>
                                            :
                                            (current === 'g_details1')
                                                ?
                                                <G_details1 routeChange={this.routeChange}/>
                                                :
                                                (current === 'g_details2')
                                                    ?
                                                    <G_details2 routeChange={this.routeChange}/>
                                                    :
                                                    (current === 'response')
                                                        ?
                                                        <Response routeChange={this.routeChange}/>
                                                        :
                                                        <Dept_user routeChange={this.routeChange}/>

            }
            </div>
      );
    }
}

export default App;
