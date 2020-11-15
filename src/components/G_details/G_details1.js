import React , {Component} from 'react';

class G_details extends React.Component{
    routeChange = ( route ) =>{
        this.props.routeChange(route);
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
            var r_body = document.getElementById("r_body");

            g_type.innerHTML = data.grievance_type;
            g_body.innerHTML = data.grievance_body;
            adm_id.innerHTML = data.admin_id;
            status.innerHTML = data.status;
            r_id.innerHTML = data.response_id;
            r_body.innerHTML = data.response_body;
        })
    }
    render(){
        return(
            <div>
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
                                        <p><strong>Status:</strong><div id="status"> Pending</div></p>
                                        <p><strong>ResponseID:</strong><div id="r_id"> R3</div></p>
                                    </div>
                                    <hr/>
                                        <strong>Response:</strong><div id="r_body">Your grievance will be forwarded to the police department.</div>
                                    </div>

                                  </div>
                            </div>
                    </div>
            </div>

                <div class="my-2 d-flex justify-content-center">
                    <button type="button" class="btn btn-primary btn-lg" onClick ={()=>this.routeChange('response')}>New Response</button>
                </div>
            </div>
        );
    }
}

export default G_details;
