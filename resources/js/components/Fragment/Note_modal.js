import React, { Component } from 'react'

class Note_modal extends Component {
  render() {
    return (
      <div>
        <div className="container">

          <div className="modal" id="myNotes">
            <div className="modal-dialog">
              <div className="modal-content">


                <div className="modal-header" style={{backgroundColor:"#abc7e4", color: "black" }}>
                  <h4 className="modal-title">Modal Heading</h4>
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>


                <div className="modal-body">
                  <form action="/action_page.php">
                    <div className="form-group">
                      <label for="email">Subject *</label>
                      <input type="email" className="form-control" id="email" placeholder=" ..." name="email" />
                    </div>
                    <div className="form-group">
                      <label for="email">Call Stage *</label>
                      <input type="email" className="form-control" id="email" placeholder=" ..." name="email" />
                    </div>

                    <div className="form-group">
                      <label for="email">Prospect Value *</label>
                      <input type="email" className="form-control" id="email" placeholder=" ..." name="email" />
                    </div>

                    <div className="form-group">
                      <label for="email">Activity *</label>
                      <input type="email" className="form-control" id="email" placeholder=" ..." name="email" />
                    </div>

                    <div className="form-group">
                      <label for="email">Phone Number</label>
                      <input type="email" className="form-control" id="email" placeholder=" ..." name="email" />
                    </div>
                    <div className="form-group">
                      <label for="comment">Call Details*</label><br />
                      <label className="radio-inline">
                        <input type="radio" name="optradio" checked />Current Call
    </label>
                      <label className="radio-inline">
                        <input type="radio" name="optradio" />Completed Call
    </label>
                      <label className="radio-inline">
                        <input type="radio" name="optradio" />Schedule Call
    </label>
                    </div>

                    <div className="form-group">
                      <label for="comment">Description:</label>
                      <textarea className="form-control" rows="3" name="description" id="comment"></textarea>
                    </div>


                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>

                </div>


                <div className="modal-footer">
                  <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Note_modal;