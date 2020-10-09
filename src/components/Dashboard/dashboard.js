import React , {Component} from 'react';

class Dashboard extends React.Component{
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    render(){
        return(
            <div className="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    <div class="my-2 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary btn-lg" onClick ={()=>this.routeChange('grievance_form')}>New Grievance</button>
                    </div>
                  </div>
                  <div class="row">


            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-primary shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Grievance Submitted</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">2</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Grievance Solved</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-warning shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Grievance Pending</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800">1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card shadow mb-4">
            <div class="card-header py-3">
              <h6 class="m-0 font-weight-bold text-primary">Grievances</h6>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4"><div class="row"><div class="col-sm-12"><table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style={{width: "100%"}}>
                  <thead>
                    <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  style={{width: "83.4px"}} aria-sort="ascending">ID</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "136.2px"}}>Type</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "61px"}}>Date</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "30.6px"}}>Status</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "68.2px"}}>View</th></tr>
                  </thead>
                  <tfoot>
                    <tr><th rowspan="1" colspan="1">ID</th><th rowspan="1" colspan="1">Type</th><th rowspan="1" colspan="1">Date</th><th rowspan="1" colspan="1">Status</th><th rowspan="1" colspan="1">View</th></tr>
                  </tfoot>
                  <tbody>

                  <tr role="row" class="odd">
                          <td class="sorting_1">GRDP2_1</td>
                          <td class="">Security issues</td>
                          <td>12/04/2020</td>
                          <td>Pending</td>
                          <td><a href="#" onClick={()=>this.routeChange('g_details')}>Click to View</a></td>
                        </tr><tr role="row" class="even">
                            <td class="sorting_1">GRDP3_1</td>
                            <td class="">Day to day needs</td>
                            <td>11/07/2020</td>
                            <td>Solved</td>
                            <td><a href="#" onClick={()=>this.routeChange('g_details')}>Click to View</a></td>
                          </tr>
                        </tbody>
                    </table>
                </div></div></div>
              </div>
            </div>
          </div>
        </div>
        );
    }
}

export default Dashboard;
