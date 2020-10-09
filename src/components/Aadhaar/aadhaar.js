import React , {Component} from 'react';
import aadhaar from "../../components/images/Aadhaar.jpg"

class Aadhaar extends React.Component{
    isDateBeforeToday = (date)=> {
        return new Date(date) < new Date(new Date().toDateString());
    }
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    validate =()=>{
        var letters = /^[A-Za-z]+$/;
        var numbers = /^[0-9]+$/;
        var a_no = document.getElementById("a_no").value;
        var a_error = document.getElementById("a_error");
        var dob = document.getElementById("dob").value;
        var dob_error = document.getElementById("dob_error");
        var address = document.getElementById("a_address").value;
        var add_error = document.getElementById("add_error");
        console.log(dob , typeof dob);
        if(a_no.trim().match(numbers)){
            if(a_no.length == 12 && this.isDateBeforeToday(dob)){
                alert("Successfully registered Aadhaar Information!")
                this.routeChange('login')
            }
        }
        else{
            if(a_no.length!=12){
                a_error.classList.remove("validation");
            }
            if(!this.isDateBeforeToday(dob)){
                dob_error.classList.remove("validation");
            }
            if(address.trim()===""){
                add_error.classList.remove("validation");
            }
            this.routeChange('aadhaar')
        }
    }
    render(){
        return(
            <div className='row d-flex align-items-center mx-auto min-vh-100 '>
            <div className='container col d-flex justify-content-center'>
                <div className='card px-1 py-1 shadow p-3 mb-5 bg-white rounded'>
                    <div class="card-header">
                        <img src={aadhaar} alt="logo"/>
                        <h3>Aadhaar Form</h3>
                    </div>
                <form>
                  <div className="form-group my-1 ">
                    <label for="a_no">Aadhaar Number</label>
                    <input type="text" className="form-control" id="a_no" placeholder="Enter Aadhar Number" id="a_no" required/>
                    <small class="validation" id="a_error" style={{color:'red'}}>Please recheck your Aadhaar Number.</small>
                  </div>
                  <div className="form-group my-1 ">
                    <label for="dob">DOB</label>
                    <input class="form-control" type="date" id="dob" required/>
                    <small class="validation" id="dob_error" style={{color:'red'}}>Please choose valid Date of Birth.</small>
                  </div>
                    <div className="form-group my-1">
                      <label for="a_address">Address</label>
                      <textarea className="form-control" id="a_address" rows="3" placeholder="Enter your address" required></textarea>
                      <small class="validation" id="add_error" style={{color:'red'}}>Please enter your address.</small>
                    </div>
                  <button type="button" className="btn btn-primary my-1" onClick={()=>this.validate()}>Submit</button>
                </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Aadhaar;
