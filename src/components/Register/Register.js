import React, {Component} from 'react';
//import './Register.css';

class Register extends React.Component{
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    onRegister = () =>{
        var numbers = /^[0-9]+$/;
        var ph = document.getElementById("ph_reg").value;
        var ph2 = document.getElementById("ph2_reg").value;
        if(ph.length == 10 && (ph2.length==0 || ph2.length==10)){
            fetch('http://localhost:3000/register',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: document.getElementById("email_reg").value,
                    pwd: document.getElementById("pwd_reg").value,
                    name: document.getElementById("name").value,
                    ph:document.getElementById("ph_reg").value,
                    ph2:document.getElementById("ph2_reg").value,
                    u_name:document.getElementById("u_name").value
                })
            })
            .then(response => response.json())
            .then(user =>{
                console.log(user)
                if(user.person_id){
                    console.log(user);
                    this.props.loadUser(user);
                    this.routeChange('aadhaar')
                }
                else{
                    alert("Invalid Input. Please enter again")
                    this.routeChange('register')
                }
            })
        }
        else{
            alert("Please recheck input.")
        }
    }
    /*validate =()=>{
        var letters = /^[A-Za-z]+$/;
        var numbers = /^[0-9]+$/;
        var letterNumber = /^[0-9a-zA-Z]+$/;
        var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var name =  document.getElementById("name").value;
        var pwd =  document.getElementById("pwd_reg").value;
        var ph = document.getElementById("ph_reg").value;
        var email =  document.getElementById("email_reg").value;
        if(name.trim().match(letters) && email.trim().match(mail) && ph.trim().match(numbers)){
            if(ph.length == 10){
                this.routeChange('aadhaar')
            }
        }
        else{
            alert("Invalid Input. Please enter again")
            this.routeChange('register')
        }
    }*/
    render(){
        return(
            <div class="container my-3">
                <div class="d-flex justify-content-center">
                    <div class="card shadow p-3 mb-5 bg-white rounded" style={{padding:'2px'}}>
                        <div class="card-header">
                            <h3>Register</h3>
                        </div>
                        <div class="col-lg-12">
                            <div class="row">
                                        <form>
                                            <div class="col-sm-12">
                                                    <div class="form-group">
                                                        <label>Name</label>
                                                        <input type="text" placeholder="Enter Name" class="form-control" id="name"required/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Username</label>
                                                        <input type="text" placeholder="Enter Username" class="form-control" id="u_name"required/>
                                                    </div>
                                                    <div class="form-group pass_show">
                                                        <label>Password</label>
                                                        <input type="password" class="form-control" placeholder="Password" id="pwd_reg" required/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Phone Number</label>
                                                        <input type="text" placeholder="Enter Phone Number" class="form-control" id="ph_reg"required/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Second Phone Number (Optional)</label>
                                                        <input type="text" placeholder="(Optional)" class="form-control" id="ph2_reg"/>
                                                    </div>
                                                    <div class="form-group">
                                                        <label>Email Address</label>
                                                        <input type="text" placeholder="Enter Email Address" class="form-control" id="email_reg" required/>
                                                    </div>
                                                    <div class="d-flex justify-content-center">
                                                        <button type="button" class="btn btn-primary btn-info py-1 my-2" onClick ={()=>this.onRegister()}>Register</button>
                                                    </div>
                                            </div>
                                        </form>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Register;
