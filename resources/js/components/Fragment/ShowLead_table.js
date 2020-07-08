import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import ReactSearchBox from 'react-search-box';
import SearchField from 'react-search-field';
import { Link } from 'react-router-dom'
import { FaBeer, FaEye, FaChevronCircleRight } from 'react-icons/fa';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";

function serachingfor(term)
{
  return function(x){
    return x.first_name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}



class ShowLead_table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      all_leads:[],
      leads: [],
      lead_status:[],
      lead_owner:'',
      term:'',
      activePage:1,
      itemsCountPerPage:1,
      totalItemsCount:1,
      pageRangeDisplayed:3
    }
    this.serachHandeler= this.serachHandeler.bind(this);
    this.handlePageChange=this.handlePageChange.bind(this);
    this.inputChange= this.inputChange.bind(this);
    this.handelSearchSubmit = this.handelSearchSubmit.bind(this);
    this.refresh = this.refresh.bind(this);
   
  }
  refresh(){

    axios.get('api/leads')
    .then(response => {
      this.setState({
        leads: response.data.data,
        lead_status:'',
        lead_owner:'',
        itemsCountPerPage:response.data.per_page,
        totalItemsCount:response.data.total,
        activePage:response.data.current_page
      })
    }).catch(err => console.log(err));

  }


  handelSearchSubmit(event) {
    console.log("search working")
    event.preventDefault();
    axios.post('api/leadsByStatus', {
     lead_status: this.state.lead_status,
      
    }).then(response => {
      this.setState({
     
        lead_status: this.state.lead_status,
        leads: response.data
      
      })
      
    }).catch(err => console.log(err));

    axios.post('api/leadsByOwner', {
      lead_owner: this.state.lead_owner,
       
     }).then(response => {
      this.setState({
        lead_owner: this.state.lead_owner,
         leads: response.data
       
       })
       this.props.history.push('/');
     })
}

  serachHandeler(event){
    this.setState({term:event.target.value})

  }
 
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({activePage: pageNumber});
   
    axios.get('api/leads?page='+pageNumber)
    .then(response => {
      this.setState({
        leads: response.data.data,
        itemsCountPerPage:response.data.per_page,
        totalItemsCount:response.data.total,
        activePage:response.data.current_page
      })
  });
}
inputChange(e) {
  console.log("input type working");
  this.setState({
    [e.target.name]: e.target.value
  });
}

  componentDidMount() {
    console.log('callled leads ');
    axios.get('api/leads')
      .then(response => {
        this.setState({
          leads: response.data.data,
          itemsCountPerPage:response.data.per_page,
          totalItemsCount:response.data.total,
          activePage:response.data.current_page
        })
      }).catch(err => console.log(err));
  }

  data = [
    {
      key: 'john',
      value: 'John Doe',
    },
    {
      key: 'jane',
      value: 'Jane Doe',
    },
    {
      key: 'mary',
      value: 'Mary Phillips',
    },
    {
      key: 'robert',
      value: 'Robert',
    },
    {
      key: 'karius',
      value: 'Karius',
    },
  ]
  render() {
    const {term,leads}= this.state;
  
    return (
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="#" style={{ float: "right" }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#" style={{ float: "right" }}>
            Lead Management
         </Breadcrumb.Item>
          <Breadcrumb.Item active style={{ float: "right" }}>Leads</Breadcrumb.Item>
        </Breadcrumb>







        <div className="card">
          <div className="card-header">
          <form onSubmit={this.handelSearchSubmit}>
            <Row>

              <Col>
              <form>
              <input type="text" name="" className="form-control" 
              onChange={this.serachHandeler}
              placeholder="search..." value={term}/>
              </form>
                {/* <ReactSearchBox
                  placeholder="Search.."
                  data={this.data}
                  callback={record => console.log(record)}
                /> */}
              </Col>
         
             
              <Col>
           
             
                <select id="select" className="selectpicker form-control"  onChange={this.inputChange}
                    value={this.state.lead_status} name="lead_status">
                  <option style={{ width: "100%" }}>Lead Status</option>
                  <option style={{ width: "100%" }}>Unqualified</option>
                  <option style={{ width: "100%" }}>new</option>
                  <option style={{ width: "100%" }}>working</option>
                  <option style={{ width: "100%" }}>Nurturing</option>
                  <option style={{ width: "100%" }}>qualified</option>
                </select>
               
              </Col>
              <Col>
                <select className="selectpicker form-control" >
                  <option style={{ width: "100%" }}>Lead Assign</option>
                  <option style={{ width: "100%" }}>Sumant</option>
                  <option style={{ width: "100%" }}>Arun Kumar Giri</option>
                  	


                </select>
              </Col>
              <Col>
                <select className="selectpicker form-control" onChange={this.inputChange}
                    value={this.state.lead_owner} name="lead_owner">
                  <option style={{ width: "100%" }}>Lead Owner</option>
                  <option style={{ width: "100%" }}>Sumant</option>
                  <option style={{ width: "100%" }}>Arun Kumar Giri</option>
                  <option style={{ width: "100%" }}>Himanshu Singh</option>
             

                </select>
              </Col>
              <Col>
                <Row>

                  <Col><button type="submit" className="btn btn-primary" style={{paddingRight:"6px"}}>Search</button></Col>
                  <Col><button type="reset" className="btn btn-primary" onClick={this.refresh}>Reset</button></Col>
                  <Col>
           <Link to="/add-lead" className="btn btn-primary">Add</Link></Col>
                </Row>
              
              
              </Col>
              
            </Row>
</form>

          </div>

          <div className="card-body">
            <table className="table">
              <thead>
                <tr>

                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Website</th>
                  <th>District</th>
                  <th>Status</th>
                  <th>Assign</th>
                  <th>Owner</th>
                  <th>Created Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {leads !== null
                  ? leads.filter(serachingfor(term)).map(lead => (
                    <tr key={lead.id}>
                      <td style={{ color: '#007bff' }} >{lead.first_name}</td>
                      <td>{lead.email}</td>
                      <td>{lead.mobile}</td>
                      <td>{lead.website}</td>
                      <td>{lead.state_province}</td>
                      <td style={{ color: '#007bff' }}>{lead.lead_status}</td>
                      <td> {lead.lead_owner}</td>
                      <td>me</td>
                      <td>{lead.created_at}</td>
                      <td>
                        <div className="row">
                          <div className="col-md-6">
                            <Link to={`/leads/${lead.id}/view`} style={{ color: "#007bff", fontSize: "15px",scrollMarginBottom:"10px" }}><FaEye /></Link>
                          </div>
                          <div className="col-md-6">
                            <Link to="" style={{ color: "#007bff", fontSize: "15px",scrollMarginBottom:"10px" }}><FaChevronCircleRight /></Link>
                          </div>

                        </div>
                      </td>
                    </tr>

                  ))
                  :
                  null
                }


              </tbody>
            </table>

            <div className="pagination justify-content-center">
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange}
          itemClass='page-item'
          linkClass='page-link'
        />
      </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ShowLead_table;