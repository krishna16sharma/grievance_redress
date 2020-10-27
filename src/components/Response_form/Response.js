import React , {Component} from 'react';

class Response extends React.Component{
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    validate =()=>{
        var r_body = document.getElementById("r_body").value;
        console.log(r_body);
        var body_error = document.getElementById("body_error");
        var flag = 1
        if(r_body.trim()===""){
            body_error.classList.remove("validation");
            flag = 0;
        }
        if(flag === 1){
            alert("Your Response was saved!");
            this.routeChange('g_details1');
        }
    }
    render(){
        return(
            <div>
            <div class="my-2 d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn-lg" onClick ={()=>this.routeChange('g_details1')}>Back to Grievance Details</button>
            </div>
            <div className='row d-flex align-items-center mx-auto min-vh-100 '>
            <div className='container col d-flex justify-content-center'>
                <div class='card px-1 py-1 shadow p-3 mb-5 bg-white rounded' style={{width: "18rem"}}>
                    <div class="card-header">
                        <h3>Response</h3>
                    </div>
                <form>
                  <div className="form-group my-1 ">
                    <label className="mr-sm-2" for="r_type">Type</label>
                    <input type="text" className="form-control" id="r_type" value="Sample" readonly/>
                  </div>
                  <div className="form-group my-1">
                    <label for="grievance_desc_r">Grievance Description</label>
                    <textarea className="form-control" id="grievance_desc_r" rows="3" value="Sample" readonly></textarea>
                  </div>
                  <div className="form-group my-1 ">
                    <label className="mr-sm-2" for="assinged">Assigned to</label>
                    <input type="text" className="form-control" id="assinged" value="Sample" readonly/>
                  </div>
                  <div className="form-group my-1 ">
                    <label className="mr-sm-2" for="r_status">Status</label>
                    <input type="text" className="form-control" id="r_status" value="Sample" readonly/>
                  </div>
                  <div className="form-group my-1 ">
                    <label className="mr-sm-2" for="r_id">Sample</label>
                    <input type="text" className="form-control" id="r_id" value="Sample" readonly/>
                  </div>
                    <div className="form-group my-1">
                      <label for="r_body">Response Body</label>
                      <textarea className="form-control" id="r_body" rows="3" placeholder="Enter your response" required></textarea>
                      <small class="validation" id="body_error" style={{color:'red'}}>Enter valid data.</small>
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

export default Response;
