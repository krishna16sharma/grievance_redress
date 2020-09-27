import React , {Component} from 'react';
import aadhaar from "../../components/images/Aadhaar.jpg"

class Aadhaar extends React.Component{
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
                    <input type="text" className="form-control" id="a_no" placeholder="Enter Aadhar Number"/>
                  </div>
                  <div className="form-group my-1 ">
                    <label for="dob">DOB</label>
                    <input class="form-control" type="date" id="dob"/>
                  </div>
                    <div className="form-group my-1">
                      <label for="a_address">Description</label>
                      <textarea className="form-control" id="a_address" rows="3" placeholder="Enter your address"></textarea>
                    </div>
                  <button type="submit" className="btn btn-primary my-1">Submit</button>
                </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Aadhaar;
