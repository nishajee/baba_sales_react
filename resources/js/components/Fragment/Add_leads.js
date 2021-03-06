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
import Form from 'react-bootstrap/Form';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import Header from './../Header';
import SuccessAlert from './SuccessAlert';




class Add_leads extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      region: '',
      mobile: '',
      lead_status: '',
      lead_owner: '', title: '', first_name: '', last_name: '',
      address1: '', company_name: '', website: '', head_quater: '',
      apperance_in_country: '', email: '', fax: '', city_distt: '',
      state_province: '', pincode: '', country: '', n_o_employee: ''
      , lead_source: '', description: '', annual_revenue: '', rating: '', phone: '', industry: ''
    }
    this.inputChange = this.inputChange.bind(this);
    this.handelFormSubmit = this.handelFormSubmit.bind(this);
  }

  inputChange(e) {
    console.log("input type working");
    this.setState({
      [e.target.name]: e.target.value
    });

  }
  handelFormSubmit(event) {
    event.preventDefault();
    axios.post('http://localhost/baba_sales_react/api/leads', {

      lead_status: this.state.lead_status,
      lead_owner: this.state.lead_owner,
      title: this.state.title, first_name: this.state.first_name,
      last_name: this.state.last_name,
      address1: this.state.address1,
      company_name: this.state.company_name,
      website: this.state.website,
      fax: this.state.fax,
      city_distt: this.state.city_distt,
      state_province: this.state.state_province,
      // is_customer:this.state.is_customer,
      pincode: this.state.pincode,
      country: this.state.country, n_o_employee: this.state.n_o_employee,
      lead_source: this.state.lead_source, description: this.state.description,
      annual_revenue: this.state.annual_revenue, rating: this.state.rating,
      email: this.state.email,
      mobile: this.state.mobile,
      phone: this.state.phone,
      industry: this.state.industry,
      head_quater: this.state.head_quater,
      apperance_in_country: this.state.apperance_in_country,





      // name: this.state.name,
      // tel: this.state.tel
    }).then(response => {
      this.setState({
        alert_message:"success"
        // region: '',
        // lead_status: '',
        // lead_owner: '', title: '', first_name: '', last_name: '',
        // address1: '', company_name: '', website: '', head_quater: '',
        // apperance_in_country: '', email: '', fax: '', city_distt: '',
        // state_province: '', pincode: '', country: '', n_o_employee: ''
        // , lead_source: '', description: '', annual_revenue: '', rating: '', mobile: '', phone: '',
        // industry: '', head_quater: '', apperance_in_country: '',
        // // name: '',
        // tel: ''
      })
      this.props.history.push('/');
    }).catch(err => console.log(err));


  }


  componentDidMount() {
    console.log('callled user api');
    axios.get('http://localhost/baba_sales/api/users')
      .then(response => {
        this.setState({
          users: response.data
        })
      }).catch(err => console.log(err));
  }

  selectCountry(val) {
    this.setState({ country: val });
  }


  render() {
    const { country, region } = this.state;
    return (
      <div>
  {this.state.alert_message=="success"?<SuccessAlert message={"Lead data Inserted Successfully"}/>:null}
        <Breadcrumb>
          <Breadcrumb.Item href="#" style={{ float: "right" }}>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="#" style={{ float: "right" }}>
            Leads
            </Breadcrumb.Item>
          <Breadcrumb.Item active style={{ float: "right" }}>Create Lead</Breadcrumb.Item>
        </Breadcrumb>
        <Card>
          <Card.Header className="alert alert-primary" style={{ color: "black"}}>
            LEAD DETAILS
                    </Card.Header>
          <Card.Body style={{marginTop:"-2em"}}>

            <Form onSubmit={this.handelFormSubmit}>
              <label style={{ marginTop: "5px" }}>Lead Status</label><br />
              <label className="radio-inline" style={{ marginRight: "10px" }}>
                <input type="radio" required
                  name="lead_status" style={{ marginRight: "10px" }}
                  value={this.state.lead_status}
                  onChange={this.inputChange}
                  label="Unqualified"
                  value="Unqualified" />Unqualified
    </label>
              <label className="radio-inline" style={{ marginRight: "10px" }}>
                <input type="radio"
                  name="lead_status" style={{ marginRight: "10px" }}
                  required
                  value={this.state.lead_status}
                  onChange={this.inputChange}
                  label="New"
                  value="new" />New
    </label>
              <label className="radio-inline" style={{ marginRight: "10px" }}>
                <input type="radio"
                  name="lead_status" style={{ marginRight: "10px" }}
                  required
                  value={this.state.lead_status}
                  onChange={this.inputChange}
                  label="Working"
                  value="Working" />Working
    </label>
              <label className="radio-inline" style={{ marginRight: "10px" }}>
                <input type="radio"
                  name="lead_status" style={{ marginRight: "10px" }}
                  type="radio"
                  required
                  value={this.state.lead_status}
                  onChange={this.inputChange}
                  label="Nurturing"
                  value={this.state.nurturing} />Nurturing
    </label>
              <label className="radio-inline" style={{ marginRight: "10px" }}>
                <input type="radio"
                  name="lead_status"
                  style={{ marginRight: "10px" }}
                  required
                  value={this.state.lead_status}
                  onChange={this.inputChange}
                  label="Qualified"
                  value="qualified" />Qualified
    </label>

              <Row>
                <Col>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Assign To*</Form.Label>

                    <Form.Control
                      required
                      onChange={this.inputChange}
                      value={this.state.lead_owner}
                      as="select"
                      name="lead_owner"

                      custom>

                      <option value=" " >--Select--</option>
                      {this.state.users !== null
                        ? this.state.users.map(user => (
                          <option key={user.id}>{user.name}</option>
                        ))
                        :
                        null
                      }
                    </Form.Control>

                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="exampleForm.SelectCustom">
                    <Form.Label>Customer Title</Form.Label>
                    <Form.Control
                      required
                      onChange={this.inputChange}
                      value={this.state.title}
                      name="title" as="select" custom>
                      <option value=" " >-Select-</option>
                      <option value="CEO" >CEO-</option>
                      <option value="VP">VP</option>
                      <option value="Manager">Manager</option>
                      <option value="Sales Manager" >Sales Manager</option>
                      <option value="Principle">Principle</option>
                      <option value="Teacher">Teacher</option>
                      <option value="clerk">clerk</option>
                      <option value="Receptionist">Receptionist</option>
                      <option value="Managing Director">Managing Director</option>
                      <option value="Founder">Founder</option>
                    </Form.Control>
                  </Form.Group></Col>
              </Row>
             
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="validationFormik03">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    value={this.state.first_name}
                    type="text"
                    placeholder="First Name"
                    name="first_name"

                  />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="validationFormik03">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    type="text"
                    placeholder="Last Name"
                    name="last_name"
                    value={this.state.last_name}
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>
                </Form.Row>
                <Form.Row>
                <Form.Group

                  as={Col} md="12" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    value={this.state.address1}
                    as="textarea" rows="3"
                    name="address1" />
                </Form.Group>
                </Form.Row>
              <Form.Row>
                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    type="text"
                    placeholder="Company Name"
                    value={this.state.company_name}
                    name="company_name"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>
                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Website</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={this.inputChange}
                    placeholder="www.google.com"
                    value={this.state.website}
                    name="website"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>
                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Headquarter</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={this.inputChange}
                    value={this.state.head_quater}
                    placeholder="Headquarter"
                    name="head_quater"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>
                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Appearance in country</Form.Label>
                  <Form.Control
                    type="text"
                    required
                    onChange={this.inputChange}
                    placeholder="Appearance in country"
                    name="apperance_in_country"
                    value={this.state.apperance_in_country}
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    value={this.state.email}
                    type="email"
                    placeholder="abc@gmail.com"
                    name="email"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>

                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Fax</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    value={this.state.fax}
                    type="text"
                    placeholder="Fax No."
                    name="fax"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>

                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    type="text"
                    value={this.state.city_distt}
                    placeholder="City/District"
                    name="city_distt"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>

                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    value={this.state.state_province}
                    type="text"
                    placeholder="State/Province"
                    name="state_province"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>


              </Form.Row>
              <Form.Row>
                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Mobile Number</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    value={this.state.mobile}
                    type="text"
                    placeholder="Mobile Number"
                    name="mobile"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>

                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    value={this.state.phone}
                    type="text"
                    placeholder="Phone No."
                    name="phone"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>

                <Form.Group
                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Pin Code</Form.Label>
                  <Form.Control
                    required
                    value={this.state.pincode}
                    onChange={this.inputChange}
                    type="text"
                    placeholder="Pincode."
                    name="pincode"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />

                </Form.Group>

                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Country</Form.Label>
                  <Form.Control name="country" required
                    onChange={this.inputChange}
                    value={this.state.country} as="select" custom>
                    <option value=" " >-Select-</option>
                    <option value="India" >India-</option>
                    <option value="U.S">U.S"</option>
                    <option value="China">China</option>
                  </Form.Control>
                </Form.Group>


              </Form.Row>

              <Form.Row>
                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>No. of Employee</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    value={this.state.n_o_employee}
                    type="number"
                    placeholder="NOP"
                    name="n_o_employee"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>

                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Lead Source</Form.Label>
                  <Form.Control required
                    onChange={this.inputChange}
                    value={this.state.lead_source} name="lead_source" as="select" custom>
                    <option value="">Choose</option>
                    <option value="LinkedIn Id">LinkedIn Id</option>
                    <option value="Google adword">Google adword</option>
                    <option value="Partner">Partner</option>
                    <option value="Employee">Employee</option>
                    <option value="other">other</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group

                  as={Col} md="6" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Description</Form.Label>
                  <Form.Control required
                    onChange={this.inputChange}
                    value={this.state.description} name="description" as="textarea" rows="3" placeholder="Description" />
                </Form.Group>

              </Form.Row>
            <div className="row">
                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Industry / Domain</Form.Label>
                  <Form.Control required
                    onChange={this.inputChange}
                    value={this.state.industry} name="industry" as="select" custom>
                    <option value="">Choose</option>
                    <option value="LinkedIn Id">Education</option>
                    <option value="Google adword">Retail</option>
                    <option value="Partner">Health care</option>
                    <option value="Employee">Banking</option>
                    <option value="other">Steel</option>
                    <option value="other">Finance</option>
                    <option value="other">Telecommunication</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group

                  as={Col} md="3" controlId="validationFormik03">
                  <Form.Label>Annual Revenue</Form.Label>
                  <Form.Control
                    required
                    onChange={this.inputChange}
                    value={this.state.annual_revenue}
                    type="text"
                    placeholder="abc@gmail.com"
                    name="annual_revenue"
                  // value={values.city}
                  // onChange={handleChange}
                  // isInvalid={!!errors.city}
                  />
                </Form.Group>
                <div className="col-md-6">
              

                    <label>Rating</label><br/>
                    <label className="radio-inline" style={{ marginRight: "10px" }}>
                      <input type="radio"
                        style={{ marginRight: "10px" }}
                        required
                        onChange={this.inputChange}
                        value={this.state.rating}
                        type="radio"

                        name="rating"
                        value="Cold" />Cold
    </label>
                    <label className="radio-inline" style={{ marginRight: "10px" }}>
                      <input type="radio"
                        style={{ marginRight: "10px" }}
                        required
                        onChange={this.inputChange}
                        value={this.state.rating}
                        type="radio"

                        name="rating"
                        value="Hot" />Hot
    </label>
                    <label className="radio-inline" style={{ marginRight: "10px" }}>
                      <input type="radio"
                        style={{ marginRight: "10px" }}
                        required
                        value={this.state.rating}
                        onChange={this.inputChange}
                        type="radio"

                        name="rating"
                        value="warm" />Warm
    </label>

</div></div>

      
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Save User Info as a Custommer" />
              </Form.Group>
              <hr />
              <Form.Row>
                <Col md="10" >

                </Col>
                <Col md="1">
                  <Button variant="primary"
                    type="submit">
                    Submit
            </Button>
                </Col>
                <Col md="1">
                  <Button variant="danger" type="reset">
                    Reset
  </Button>
                </Col>
              </Form.Row>

            </Form>


          </Card.Body>
        </Card>

      </div>
    )
  }
}
export default Add_leads;
