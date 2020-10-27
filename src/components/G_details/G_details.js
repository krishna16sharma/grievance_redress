import React , {Component} from 'react';

class G_details extends React.Component{
    render(){
        return(
            <div class="container d-flex h-100">
                <div class="row align-self-center w-100 my-4">
                    <div class="col-6 mx-auto">
                                <div class="card mb-4">
                                    <div class="card-header">
                                        <p>
                                            <strong>Type:</strong> Security issues
                                        </p>
                                    </div>
                                    <div class="card-body">
                                     Hello, I need the help of police,robberies have increased in my area.
                                     <hr/>
                                    <div class="d-flex justify-content-between">
                                        <p><strong>Assigned to:</strong> ADM01</p>
                                        <p><strong>Status:</strong> Pending</p>
                                        <p><strong>ResponseID:</strong> R3</p>
                                    </div>
                                    <hr/>
                                        <strong>Response:</strong> Your grievance will be forwarded to the police department.
                                    </div>

                                  </div>
                            </div>
                    </div>
            </div>
        );
    }
}

export default G_details;
