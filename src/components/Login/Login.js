import React from 'react';

class Login extends React.Component{
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    validate =()=>{
        var uname =  document.getElementById("username").value;
        var pwd =  document.getElementById("password").value;
        console.log(pwd.trim())
        if(uname.trim() === "" || pwd.trim() === ""){
            alert("Invalid Input. Please enter again")
            this.routeChange('login')
        }
        else if (uname.toLowerCase().trim() == "krishna") {
            this.routeChange('adm_login')
        }
        else if (uname.toLowerCase().trim() == "water") {
            this.routeChange('dept_user')
        }
        else{
            this.routeChange('dashboard')
        }
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
                    						<input type="text" className="form-control" placeholder="username" id="username" required/>
                    					</div>
                    					<div className="input-group form-group">
                    						<input type="password" className="form-control" placeholder="password" id="password" required/>
                    					</div>
                    					<div className="form-group">
                    						<input type="submit" value="Login" className="btn btn-primary login_btn" onClick ={()=>this.validate()}/>
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
