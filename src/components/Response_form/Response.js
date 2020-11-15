import React , {Component} from 'react';

class Response extends React.Component{
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    validate =()=>{
        var r_body = document.getElementById("r_body").value;
        var s_drop = document.getElementById("s_drop").value;
        console.log(r_body,s_drop);
        var body_error = document.getElementById("body_error");
        var flag = 1
        if(r_body.trim()===""){
            body_error.classList.remove("validation");
            flag = 0;
        }
        if(flag === 1){
            console.log('All fine!')
            fetch('http://localhost:3000/new_response',{
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    grievance_id: this.props.grievance_id,
                    response_body: r_body,
                    status: s_drop
                })
            })
            .then(response => response.json())
            .then(data=>{
                console.log(data,"Hmmm")
                if(data[0].grievance_id){
                    alert("Your Response was saved!");
                    this.routeChange('g_details1');
                }
                else{
                    alert("Couldn't submit. Try again.")
                }
            })
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/response',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                grievance_id: this.props.grievance_id
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var g_type = document.getElementById("gType");
            var g_body = document.getElementById("g_body");
            var adm_id = document.getElementById("adm_id");
            var status = document.getElementById("status");
            var r_id = document.getElementById("r_id");
            //var r_body = document.getElementById("r_body");

            g_type.innerHTML = data.grievance_type;
            g_body.innerHTML = data.grievance_body;
            adm_id.innerHTML = data.admin_id;
            status.innerHTML = data.status;
            r_id.innerHTML = data.response_id;

        })
    }
    render(){
        return(
            <div>
            <div class="my-2 d-flex justify-content-end">
                <button type="button" class="btn btn-primary btn-lg" onClick ={()=>this.routeChange('g_details1')}>Back to Grievance Details</button>
            </div>
            <div class="container d-flex h-100">
                <div class="row align-self-center w-100 my-4">
                    <div class="col-6 mx-auto">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <p>
                                            <strong>Type:</strong><div id="gType"> Security issues</div>
                                        </p>
                                    </div>
                                    <div class="card-body">
                                     <div id="g_body">Hello, I need the help of police,robberies have increased in my area.</div>
                                     <hr/>
                                    <div class="d-flex justify-content-between">
                                        <p><strong>Assigned to:</strong><div id="adm_id"> ADM01</div></p>
                                        <p><strong>Status:</strong><div id="status"> pending</div></p>
                                        <p><strong>ResponseID:</strong><div id="r_id"> R3</div></p>
                                    </div>
                                    <hr/>

                                        <form>
                                          {/*<div className="form-group my-1 ">
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
                                          </div>*/}
                                          <div className="form-group my-1">
                                            <strong>Status</strong>
                                            <select className="custom-select mr-sm-2" id="s_drop" >
                                              <option value="pending">pending</option>
                                              <option value="solved">solved</option>
                                              <option value="rejected">rejected</option>
                                            </select>
                                          </div>
                                            <div className="form-group my-1">
                                              <strong>Response:</strong>
                                              <textarea className="form-control" id="r_body" rows="3" placeholder="Enter your response" required></textarea>
                                              <small class="validation" id="body_error" style={{color:'red'}}>Enter valid data.</small>
                                            </div>
                                          <button type="button" className="btn btn-primary my-1" onClick={()=>this.validate()}>Submit</button>
                                        </form>
                                    </div>
                                  </div>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Response;
