import React, {Component} from 'react';
//import './Register.css';

class Register extends React.Component{
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
                                                        <input type="text" placeholder="Enter Name" class="form-control"/>
                                                    </div>
                                                    <div class="form-group pass_show">
                                                        <label>Password</label>
                                                        <input type="password" class="form-control" placeholder="Password"/>
                                                    </div>
                                            <div class="form-group">
                                                <label>Phone Number</label>
                                                <input type="text" placeholder="Enter Phone Number" class="form-control"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Aadhar Number</label>
                                                <input type="text" placeholder="Enter Aadhar Number" class="form-control"/>
                                            </div>
                                            <div class="form-group">
                                                <label>Email Address</label>
                                                <input type="text" placeholder="Enter Email Address" class="form-control"/>
                                            </div>
                                                <div class="d-flex justify-content-center">
                                                    <button type="button" class="btn btn-primary btn-info py-1 my-2">Register</button>
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
