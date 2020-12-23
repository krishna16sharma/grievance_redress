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
    onSubmitGrievance = (id, year, month, date, desc, gType, a_id, p_id) =>{
        fetch('http://localhost:3000/grievance_submit',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                g_id: id,
                year: year,
                month: month,
                day: date,
                g_body: desc,
                g_type: gType,
                a_id: a_id,
                p_id: p_id
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.grievance_id){
                console.log(data);
                alert("Your Grievance has been submitted!")
                this.routeChange('dashboard')

                //this.props.loadUser(user);
            }
            else{
                alert("Error submitting form!")
            }
        })

    }
    validate =()=>{
        var gType_redText = document.getElementById("gType_error");
        var dpt = document.getElementById("cbTxt").value;
        var dpt_error = document.getElementById("cb_error");
        var desc = document.getElementById("grievance_desc").value;
        var desc_error = document.getElementById("desc_error");
        var gtDrop = document.getElementById("g_type");

        var gType = 'Life essentials';
        var to ='';
        if(gtDrop.value == 1){
            gType = 'Life essentials';
        }
        else if (gtDrop.value == 2) {
            gType = 'Day to day needs';
        }
        else if (gtDrop.value == 3) {
            gType = 'Security issues';
        }
        else{
            gType = 'Management issues';
        }
        console.log(desc,desc.trim()==="" )
        var flag = 1
        if(dpt.trim()===""){
            dpt_error.classList.remove("validation");
            flag = 0;
        }
        else{
            //Assign department
            var drop = document.getElementById("dropdown1");
            if(drop.value==1){
                if(dpt.toLowerCase() == 'pipeline department'){
                    to = 'DP1_';
                }
                else if(dpt.toLowerCase() == 'police department'){
                    to = 'DP2_';
                }
                else if(dpt.toLowerCase() == 'road & buildings department'){
                    to = 'DP3_';
                }
                else if(dpt.toLowerCase() == 'railway department'){
                    to = 'DP4_';
                }
                else{
                    flag = 0;
                    dpt_error.classList.remove("validation");
                }
            }
            else if(drop.value==2){
                if(dpt.toLowerCase() == 'andhra pradesh'&& drop.value==2){
                    to = 'STAP_';
                }
                else if(dpt.toLowerCase() == 'arunachal pradesh' && drop.value==2){
                    to = 'STAR_';
                }
                else if(dpt.toLowerCase() == 'assam' && drop.value==2){
                    to = 'STAS_';
                }
                else if(dpt.toLowerCase() == 'bihar' && drop.value==2){
                    to = 'STBR_';
                }
                else if(dpt.toLowerCase() == 'chhattisgarh' && drop.value==2){
                    to = 'STCT_';
                }
                else if(dpt.toLowerCase() == 'goa' && drop.value==2){
                    to = 'STGA_';
                }
                else if(dpt.toLowerCase() == 'gujarat' && drop.value==2){
                    to = 'STGJ_';
                }
                else if(dpt.toLowerCase() == 'haryana' && drop.value==2){
                    to = 'STHR_';
                }
                else if(dpt.toLowerCase() == 'himachal pradesh' && drop.value==2){
                    to = 'STHP_';
                }
                else if(dpt.toLowerCase() == 'jharkhand'){
                    to = 'STJH_';
                }
                else if(dpt.toLowerCase() == 'karnataka'){
                    to = 'STKA_';
                }
                else if(dpt.toLowerCase() == 'kerala'){
                    to = 'STKL_';
                }
                else if(dpt.toLowerCase() == 'madhya pradesh'){
                    to = 'STMP_';
                }
                else if(dpt.toLowerCase() == 'maharashtra'){
                    to = 'STMH_';
                }
                else if(dpt.toLowerCase() == 'manipur'){
                    to = 'STMN_';
                }
                else if(dpt.toLowerCase() == 'meghalaya'){
                    to = 'STML_';
                }
                else if(dpt.toLowerCase() == 'mizoram'){
                    to = 'STMZ_';
                }
                else if(dpt.toLowerCase() == 'nagaland'){
                    to = 'STNL_';
                }
                else if(dpt.toLowerCase() == 'odisha'){
                    to = 'STOR_';
                }
                else if(dpt.toLowerCase() == 'punjab'){
                    to = 'STPB_';
                }
                else if(dpt.toLowerCase() == 'rajasthan'){
                    to = 'STRJ_';
                }
                else if(dpt.toLowerCase() == 'sikkim'){
                    to = 'STSK_';
                }
                else if(dpt.toLowerCase() == 'tamil nadu'){
                    to = 'STTN_';
                }
                else if(dpt.toLowerCase() == 'telangana'){
                    to = 'STTG_';
                }
                else if(dpt.toLowerCase() == 'tripura'){
                    to = 'STTR_';
                }
                else if(dpt.toLowerCase() == 'uttar pradesh'){
                    to = 'STUP_';
                }
                else if(dpt.toLowerCase() == 'uttarakhand'){
                    to = 'STUT_';
                }
                else if(dpt.toLowerCase() == 'west bengal'){
                    to = 'STWB_';
                }
                else{
                    flag = 0;
                    dpt_error.classList.remove("validation");
                }
            }
            else if(drop.value==3){
                if(dpt.toLowerCase() == 'andaman and nicobar islands'){
                    to = 'UTAN_';
                }
                else if(dpt.toLowerCase() == 'chandigarh'){
                    to = 'UTCH_';
                }
                else if(dpt.toLowerCase() == 'dadra and nagarhaveli and daman and diu'){
                    to = 'UTDD_';
                }
                else if(dpt.toLowerCase() == 'delhi'){
                    to = 'UTDH_';
                }
                else if(dpt.toLowerCase() == 'jammu and kashmir'){
                    to = 'UTJK_';
                }
                else if(dpt.toLowerCase() == 'ladakh'){
                    to = 'UTLH_';
                }
                else if(dpt.toLowerCase() == 'lakshadweep'){
                    to = 'UTLP_';
                }
                else if(dpt.toLowerCase() == 'puducherry'){
                    to = 'UTPY_';
                }
                else{
                    flag = 0;
                    dpt_error.classList.remove("validation");
                }
            }
            else{
                flag = 0;
                dpt_error.classList.remove("validation");
            }
        }

        if(desc.trim()===""){
            desc_error.classList.remove("validation");
            flag = 0;
        }
        if(flag === 1){
            var id = "GR"+to;
            var d = new Date();
            var date = d.getDate();
            var month = d.getMonth()+1;
            var year = d.getFullYear();
            var p_id = this.props.user.person_id;
            var num = Math.floor(Math.random()*2)+1;
            var a_id = 'ADM0'+num;
            this.onSubmitGrievance(id, year, month, date, desc, gType, a_id, p_id);

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
                    <select className="custom-select mr-sm-2" id="g_type">
                      <option value="1">Life essentials</option>
                      <option value="2">Day to day needs</option>
                      <option value="3">Security issues</option>
                      <option value="4">Management issues</option>
                    </select>
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
