import React from 'react';

class Login extends React.Component{
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    onSubmitSignIn = () =>{
        fetch('http://localhost:3000/login',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username: document.getElementById("username").value,//this.state.loginUsername,
                password: document.getElementById("password").value
            })
        })
        .then(response => response.json())
        .then(user => {
            if(user.person_id){
                alert("Hello! "+user.person_name);
                this.props.loadUser(user);
                if(user.type == 'users'){
                    this.routeChange('dashboard');
                }
                else if (user.type == 'department') {
                    this.routeChange('dept_user')
                }
                else if(user.type == 'admin'){
                    this.routeChange('adm_login')
                }
                console.log(user);
                //this.props.loadUser(user);
            }
            else{
                alert("Invalid credentials")
            }
        })

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
        else if (uname.toLowerCase().trim() == "road") {
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
                    						<input type="button" value="Login" className="btn btn-primary login_btn" onClick ={()=>this.onSubmitSignIn()}/>
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
