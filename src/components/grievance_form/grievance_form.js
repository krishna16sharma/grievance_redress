import React , {Component} from 'react';

//var dropdown_opt = 1;

function changeDropdown(){
    var drop = document.getElementById("dropdown1");
    console.log(drop.value);
    var cb = document.getElementById("Concerned_body");
    var c_tb = document.getElementById("cbTxt");
    if(drop.value == 1){
        cb.innerHTML = "Department";
        c_tb.placeholder = "Enter Department Name";
    }
    else if (drop.value == 2) {
        cb.innerHTML = "State";
        c_tb.placeholder = "Enter State Name";
        console.log(c_tb.placeholder);
    }
    else if (drop.value == 3) {
        cb.innerHTML ="Union Territory";
        c_tb.placeholder = "Enter Union Territory Name";
    }
}

class Grievance extends React.Component{
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    validate =()=>{
        var gType =  document.getElementById("g_type").value;
        var gType_redText = document.getElementById("gType_error");
        var dpt = document.getElementById("cbTxt").value;
        var dpt_error = document.getElementById("cb_error");
        var desc = document.getElementById("grievance_desc").value;
        var desc_error = document.getElementById("desc_error");
        console.log(desc,desc.trim()==="" )
        var flag = 1
        if(gType!="Security issues"){
            gType_redText.classList.remove("validation");
            flag = 0;
        }
        if(dpt.trim()===""){
            dpt_error.classList.remove("validation");
            flag = 0;
        }
        if(desc.trim()===""){
            desc_error.classList.remove("validation");
            flag = 0;
        }
        if(flag === 1){
            alert("Your Grievance has been sent to "+dpt)
            this.routeChange('dashboard')
        }
    }
    render(){
        return(
            <div>
            <div class="my-2 d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn-lg" onClick ={()=>this.routeChange('dashboard')}>Back to Dashboard</button>
            </div>
            <div className='row d-flex align-items-center mx-auto min-vh-100 '>
            <div className='container col d-flex justify-content-center'>
                <div className='card px-1 py-1 shadow p-3 mb-5 bg-white rounded'>
                    <div class="card-header">
                        <h3>Grievance Form</h3>
                    </div>
                <form>
                <div className="form-group my-1">
                  <label className="mr-sm-2" for="dropdown1">To</label>
                  <select className="custom-select mr-sm-2" id="dropdown1" onClick={changeDropdown}>
                    <option value="1">Department</option>
                    <option value="2">State</option>
                    <option value="3">Union Territory</option>
                  </select>
                </div>
                  <div className="form-group my-1 ">
                    <label for="g_type">Type</label>
                    <input type="text" className="form-control" id="g_type" placeholder="Enter type of grievance" required/>
                    <small class="validation" id="gType_error" style={{color:'red'}}>Enter the type of grievance correctly. All invalid types shall be rejected.</small>
                  </div>

                    <div className="form-group my-1 ">
                      <label for="cbTxt" id="Concerned_body">Department</label>
                      <input type="text" className="form-control" id="cbTxt" placeholder="Enter Department Name" required/>
                      <small class="validation" id="cb_error" style={{color:'red'}}>Enter valid data.</small>
                    </div>
                    <div className="form-group my-1">
                      <label for="grievance_desc">Description</label>
                      <textarea className="form-control" id="grievance_desc" rows="3" placeholder="Enter the description of your grievance" required></textarea>
                      <small class="validation" id="desc_error" style={{color:'red'}}>Enter valid data.</small>
                    </div>
                  <button type="button" className="btn btn-primary my-1" onClick={()=>this.validate()}>Submit</button>
                </form>
                </div>
            </div>
            </div>
            </div>
        );
    }
}

export default Grievance;
