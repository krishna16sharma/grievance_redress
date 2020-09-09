import React, {Component} from 'react';

class Login extends React.Component{
    render(){
        return(
                    <div class="container" style={{marginTop:'20vh'}}>
                    	<div class="d-flex justify-content-center h-100">
                    		<div class="card shadow p-3 mb-5 bg-white rounded">
                    			<div class="card-header">
                    				<h3>Login</h3>
                    			</div>
                    			<div class="card-body">
                    				<form>
                    					<div class="input-group form-group">
                    						<input type="text" class="form-control" placeholder="username"/>
                    					</div>
                    					<div class="input-group form-group">
                    						<input type="password" class="form-control" placeholder="password"/>
                    					</div>
                    					<div class="form-group">
                    						<input type="submit" value="Login" class="btn btn-primary login_btn"/>
                    					</div>
                    				</form>
                    			</div>
                    			<div class="card-footer">
                    				<div class="d-flex justify-content-center links">
                    					Don't have an account?<a href="#" onClick=''>Register</a>
                    				</div>
                    			</div>
                    		</div>
                    	</div>
                    </div>

        );
    }
}

export default Login;
