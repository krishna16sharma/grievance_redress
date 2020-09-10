import React from 'react';

class Login extends React.Component{
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    render(){
        return(
                    <div className="container" style={{marginTop:'20vh'}}>
                    	<div className="d-flex justify-content-center h-100">
                    		<div className="card shadow p-3 mb-5 bg-white rounded">
                    			<div className="card-header">
                    				<h3>Login</h3>
                    			</div>
                    			<div className="card-body">
                    				<form>
                    					<div className="input-group form-group">
                    						<input type="text" className="form-control" placeholder="username"/>
                    					</div>
                    					<div className="input-group form-group">
                    						<input type="password" className="form-control" placeholder="password"/>
                    					</div>
                    					<div className="form-group">
                    						<input type="submit" value="Login" className="btn btn-primary login_btn"/>
                    					</div>
                    				</form>
                    			</div>
                    			<div className="card-footer">
                    				<div className="d-flex justify-content-center links">
                    					Don't have an account?<a href="#" onClick ={()=>this.routeChange('register')}>Register</a>
                    				</div>
                    			</div>
                    		</div>
                    	</div>
                    </div>

        );
    }
}

export default Login;
