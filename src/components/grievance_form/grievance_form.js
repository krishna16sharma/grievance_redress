import React , {Component} from 'react';

//var dropdown_opt = 1;

function changeDropdown(){
    var drop = document.getElementById("dropdown1");
    console.log(drop);
    //var selectElement =  document.querySelector('#dropdown');
//    var output = selectElement.value;
    //ocument.querySelector('.output').textContent = output;
    //dropdown_opt = value;
//    console.log(output);
}

class Grievance extends React.Component{
    render(){
        return(
            <div className='row d-flex align-items-center mx-auto min-vh-100 '>
            <div className='container col d-flex justify-content-center'>
                <div className='card px-1 py-1 shadow p-3 mb-5 bg-white rounded'>
                    <div class="card-header">
                        <h3>Grievance Form</h3>
                    </div>
                <form>
                <div className="form-group my-1">
                  <label className="mr-sm-2" for="dropdown1">To</label>
                  <select className="custom-select mr-sm-2" id="dropdown1" onClick={changeDropdown()}>
                    <option value="1">Department</option>
                    <option value="2">State</option>
                    <option value="3">Union Territory</option>
                  </select>
                </div>
                  <div className="form-group my-1 ">
                    <label for="g_type">Type</label>
                    <input type="text" className="form-control" id="g_type" placeholder="Enter type of grievance"/>
                    <small style={{color:'red'}}>Enter the type of grievance correctly. All invalid types shall be rejected.</small>
                  </div>

                    <div className="form-group my-1 ">
                      <label for="g_type">Department</label>
                      <input type="text" className="form-control" id="g_type" placeholder="Enter Department Name"/>
                    </div>
                    <div className="form-group my-1">
                      <label for="grievance_desc">Description</label>
                      <textarea className="form-control" id="grievance_desc" rows="3" placeholder="Enter the description of your grievance"></textarea>
                    </div>
                  <button type="submit" className="btn btn-primary my-1">Submit</button>
                </form>
                </div>
            </div>
            </div>
        );
    }
}

export default Grievance;
