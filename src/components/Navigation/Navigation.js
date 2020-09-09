import React, {Component} from 'react';

class Navigation extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
            {
                (this.props.current.current === 'home')
                 ?
                 <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto w-100">
                           <a className="navbar-brand" href="#">Grievance Redressal</a>
                               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                 <ul className="navbar-nav ml-auto ">
                                     <li className="nav-item">
                                         <a className="nav-link" href="#">Login</a>
                                     </li>
                                     <li className="nav-item">
                                         <a className="nav-link" href="#">Register</a>
                                     </li>
                                 </ul>
                                 </div>
                 </nav>
                  :
                  <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
                            <a className="navbar-brand" href="#">Grievance Redressal</a>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                  <ul className="navbar-nav ml-auto ">
                                      <li className="nav-item">
                                          <a className="nav-link" href="#" >Back</a>
                                      </li>
                                  </ul>
                                  </div>
                  </nav>

              }

            </div>
        );
    }
}

export default Navigation;
