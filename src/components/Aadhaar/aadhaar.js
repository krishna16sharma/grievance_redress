import React , {Component} from 'react';
import aadhaar from "../../components/images/Aadhaar.jpg"

class Aadhaar extends React.Component{
    isDateBeforeToday = (date)=> {
        return new Date(date) < new Date(new Date().toDateString());
    }
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    onSubmitSignIn = (date,month,year,door,street,area,city,state) =>{
        console.log(date, month, document.getElementById("a_no").value, this.props.user.email)
        fetch('http://localhost:3000/aadhaar',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.props.user.email,
                password: this.props.user.password,
                person_id: this.props.user.person_id,
                person_name: this.props.user.person_name,
                person_ph_number: this.props.user.person_ph_number,
                ph2: this.props.user.ph2,
                username: this.props.user.username,
                a_no: document.getElementById("a_no").value,
                day: date,
                month: month,
                year: year,
                door_no: door,
                street: street,
                area: area,
                city: city,
                state: state
            })
        })
        .then(response => response.json())
        .then(user =>{
            console.log(user)
            if(user.person_id){
                //console.log(user);
                //this.props.loadUser(user);
                this.routeChange('login')
            }
            else{
                alert("Invalid Input. Please enter again")
                this.routeChange('register')
            }
        })
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
        if(a_no.trim().match(numbers) && a_no.length == 12 && this.isDateBeforeToday(dob) && address.trim()!==""){
                var date = new Date(dob).getDate();
                var month = new Date(dob).getMonth()+1;
                var year = new Date(dob).getFullYear();
                var split_address = address.split(',');
                var door = split_address[0].trim();
                var street = split_address[1].trim();
                var area = split_address[2].trim();
                var city = split_address[3].trim();
                var state = split_address[4].trim();
                console.log(date,month,year,door,street,area,city,state);
                this.onSubmitSignIn(date,month,year,door,street,area,city,state);
                alert("Successfully registered Aadhaar Information!")
                //this.routeChange('login')
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
        console.log(this.props.user)
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
                      <textarea className="form-control" id="a_address" rows="3" placeholder="Door No, Street, Area, City, State" required></textarea>
                      <small class="validation" id="add_error" style={{color:'red'}}>Please enter your address: Door No, Street, Area, City, State </small>
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
