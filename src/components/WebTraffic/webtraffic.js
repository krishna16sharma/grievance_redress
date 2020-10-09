import React , {Component} from 'react';

class WebTraffic extends React.Component{
    routeChange = ( route ) =>{
        this.props.routeChange(route);
        console.log(route)
    }
    render(){
        return(
            <div className="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    <div class="my-2 d-flex justify-content-end">
                        <button type="button" class="btn btn-primary btn-lg" onClick ={()=>this.routeChange('adm_login')}>Grievances</button>
                    </div>
                  </div>
            <div class="card shadow mb-4">
              <div class="card-header py-3">
                <h6 class="m-0 font-weight-bold text-primary">Web Traffic</h6>
              </div>
              <div class="card-body">
                <div class="table-responsive">
                  <div id="dataTable_wrapper" class="dataTables_wrapper dt-bootstrap4"><div class="row"><div class="col-sm-12"><table class="table table-bordered dataTable" id="dataTable" width="100%" cellspacing="0" role="grid" aria-describedby="dataTable_info" style={{width: "100%"}}>
                    <thead>
                      <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  style={{width: "83.4px"}} aria-sort="ascending">User ID</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "136.2px"}}>log ID</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "61px"}}>IP</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "30.6px"}}>Activity</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "68.2px"}}>Timestamp</th></tr>
                    </thead>
                    <tfoot>
                      <tr><th rowspan="1" colspan="1">User ID</th><th rowspan="1" colspan="1">log ID</th><th rowspan="1" colspan="1">IP</th><th rowspan="1" colspan="1">Activity</th><th rowspan="1" colspan="1">Timestamp</th></tr>
                    </tfoot>
                    <tbody>

                    <tr role="row" class="odd">
                            <td class="sorting_1">US02</td>
                            <td class="">L1</td>
                            <td>216.3.128.12</td>
                            <td>Submitted Grievance</td>
                            <td>2020-07-11 20:01:40</td>
                          </tr><tr role="row" class="even">
                              <td class="sorting_1">US02</td>
                              <td class="">L2</td>
                              <td>216.3.128.12</td>
                              <td>Checked Grievance status</td>
                              <td>2020-07-11 21:30:45</td>
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

export default WebTraffic;
