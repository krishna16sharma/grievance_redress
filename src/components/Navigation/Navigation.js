import React from 'react';

class Navigation extends React.Component{
    constructor(props){
        super(props);
    }
    routeChange = ( route ) =>{
        this.props.routeChange(route);
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
                                         <a className="nav-link" onClick = {()=> this.routeChange('login')}>Login</a>
                                     </li>
                                     <li className="nav-item">
                                         <a className="nav-link" onClick ={()=>this.routeChange('register')}>Register</a>
                                     </li>
                                 </ul>
                                 </div>
                 </nav>
                  :
                  (this.props.current.current === 'login' || this.props.current.current === 'register' || this.props.current.current === 'aadhaar')
                   ?
                   <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
                             <a className="navbar-brand" href="#">Grievance Redressal</a>
                                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                   <ul className="navbar-nav ml-auto ">
                                       <li className="nav-item">
                                           <a className="nav-link" onClick ={()=>this.routeChange('home')} >Back</a>
                                       </li>
                                   </ul>
                                   </div>
                   </nav>
                    :
                    (this.props.current.current === 'g_details')
                     ?
                     <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
                               <a className="navbar-brand" href="#">Grievance Redressal</a>
                                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                     <ul className="navbar-nav ml-auto ">
                                         <li className="nav-item">
                                             <a className="nav-link" onClick ={()=>this.routeChange('dashboard')} >Back</a>
                                         </li>
                                     </ul>
                                     </div>
                     </nav>
                      :
                      (this.props.current.current === 'g_details1')
                       ?
                       <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
                                 <a className="navbar-brand" href="#">Grievance Redressal</a>
                                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                       <ul className="navbar-nav ml-auto ">
                                           <li className="nav-item">
                                               <a className="nav-link" onClick ={()=>this.routeChange('dept_user')} >Back</a>
                                           </li>
                                       </ul>
                                       </div>
                       </nav>
                        :
                        (this.props.current.current === 'g_details2')
                         ?
                         <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto">
                                   <a className="navbar-brand" href="#">Grievance Redressal</a>
                                       <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                         <ul className="navbar-nav ml-auto ">
                                             <li className="nav-item">
                                                 <a className="nav-link" onClick ={()=>this.routeChange('adm_login')} >Back</a>
                                             </li>
                                         </ul>
                                         </div>
                         </nav>
                          :
                          <nav className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto w-100">
                                    <a className="navbar-brand" href="#">Grievance Redressal</a>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                          <ul className="navbar-nav ml-auto ">
                                              <li className="nav-item">
                                                  <a className="nav-link" onClick = {()=> this.routeChange('login')}>Logout</a>
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
