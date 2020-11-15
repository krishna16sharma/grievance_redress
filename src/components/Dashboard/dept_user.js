import React , {Component} from 'react';

class Dept_user extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            entries: []
        }
    }
    routeChange = ( route ) =>{
        this.props.routeChange(route);
    }
    viewDetails = (g_id)=>{
        this.props.loadGrievance(g_id);
        this.props.routeChange('g_details1');
    }
    componentDidMount(){
        fetch('http://localhost:3000/dept_user',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                user: this.props.user
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var pending = 0;
            var solved = 0;
            for(var item in data){
                var curr_item = data[item];
                if(curr_item.status == 'pending'){
                    pending+=1
                }
                else if( curr_item.status == 'solved'){
                    solved+=1
                }
            }
            //document.getElementById('g_submitted').innerHTML = data.length;
            document.getElementById('g_pending').innerHTML = pending;
            document.getElementById('g_solved').innerHTML = solved;
            console.log(pending,solved, data.length);
            console.log(data)
            this.setState({entries: data})
        })
    }
    render(){
        return(
            <div className="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                  </div>
                  <div class="row">

            <div class="col-xl-3 col-md-6 mb-4">
              <div class="card border-left-success shadow h-100 py-2">
                <div class="card-body">
                  <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                      <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Grievance Solved</div>
                      <div class="h5 mb-0 font-weight-bold text-gray-800" id="g_solved">1</div>
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
                      <div class="h5 mb-0 font-weight-bold text-gray-800" id="g_pending">0</div>
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
                    <tr role="row"><th class="sorting_asc" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1"  style={{width: "83.4px"}} aria-sort="ascending">ID</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "136.2px"}}>User ID</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "61px"}}>Date</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "30.6px"}}>Status</th><th class="sorting" tabindex="0" aria-controls="dataTable" rowspan="1" colspan="1" style={{width: "68.2px"}}>View</th></tr>
                  </thead>
                  <tfoot>
                    <tr><th rowspan="1" colspan="1">ID</th><th rowspan="1" colspan="1">User ID</th><th rowspan="1" colspan="1">Date</th><th rowspan="1" colspan="1">Status</th><th rowspan="1" colspan="1">View</th></tr>
                  </tfoot>
                  <tbody>
                  {this.state.entries.map((data, key)=>{
                      return(
                          <tr key={key}>
                          <td>{data.grievance_id}</td>
                          <td>{data.grievance_type}</td>
                          <td>{data.day}/{data.month}/{data.year}</td>
                          <td>{data.status}</td>
                          <td><a href="#" onClick={()=>this.viewDetails(data.grievance_id)}>Click to View</a></td>
                          </tr>
                      )
                  })
                  }
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

export default Dept_user;
