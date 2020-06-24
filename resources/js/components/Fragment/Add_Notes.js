import React, { Component } from 'react'

class Add_Notes extends Component {
    constructor(props){
        super(props)
        this.state={
            title:'', note:'', created_at:'',cust_id:'',
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
        console.log(this.props.cust_id);
        axios.post('http://localhost/baba_sales/api/notes', {
            title:this.state.title, note:this.state.note, created_at:this.state.created_at,
            cust_id: this.props.cust_id,
            }).then(response => {
          this.setState({
            title:'', note:'', created_at:'', cust_id: '',
                    })
          this.props.history.push(`/leads/${id}/view`);
        }).catch(err => console.log(err));
    
    
      }

  render() {
    return (
      <div>
        <div className="container">

          <div className="modal" id="myNotes">
            <div className="modal-dialog">
              <div className="modal-content">


                <div className="modal-header" style={{backgroundColor:"#abc7e4", color: "black" }}>
                  <h5 className="modal-title">Create NOTES</h5>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>


                <div className="modal-body">
                  <form onSubmit={this.handelFormSubmit}>

                  <div className="form-group">
                     
                     <input type="text"
                       className="form-control" id="email" 
                       name="cust_id"
                       value={this.props.cust_id}
                       onChange={this.inputChange} />
                   </div>

                    <div className="form-group">
                      <label>Title<span style={{color:"red"}}>*</span></label>
                      <input type="text"
                       value={this.state.title}
                        onChange={this.inputChange} name="title" className="form-control" id="email" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                      <label>Notes<span style={{color:"red"}}>*</span></label>
                      <input type="text"value={this.state.note}
                        onChange={this.inputChange} name="note" className="form-control" id="email" placeholder="Notes"/>
                    </div>
                    <div className="form-group">
                      <label>Create NOTES Date<span style={{color:"red"}}>*</span></label>
                      <input type="date" value={this.state.created_at}
                        onChange={this.inputChange} name="created_at" className="form-control" id="email"/>
                    </div>
                   
                    <div className="modal-footer">
                    <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

                  
                  </form>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Add_Notes;