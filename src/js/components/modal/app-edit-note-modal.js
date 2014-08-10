/** @jsx React.DOM */
var React = require("react"),
	Modal = require("react-bootstrap").Modal,
	Button = require("react-bootstrap").Button,
  DataWatchMixin = require("../../mixins/DataWatchMixin"),
  AppStore = require("../../stores/app-store"),
  AppActions = require("../../actions/app-actions"),
  _ = require('lodash');

var getCurrentDateAndData = function(){
  return {
    currentData: AppStore.getCurrentDateAndData()
  };
};

var getValue = function(data,key){
    if (data && data.hasOwnProperty(key)){
        return data[key];
    }
    return "";
};

var EditNotesModal = React.createClass({ 
  mixins: [DataWatchMixin(getCurrentDateAndData)],
  handleSaveClick: function(){
      var data = {
       whatIWorkedOn : this.refs.txtWhatIWorkedOn.getDOMNode().value,
       whatIWillWorkOn : this.refs.txtWhatIWillWorkOn.getDOMNode().value,
       blockers : this.refs.txtBlockers.getDOMNode().value,
       additionalNotes: this.refs.txtAdditionalNotes.getDOMNode().value
    };
    var date = this.state.currentData.date;
    
    // save data
    AppActions.saveStandupData(date, data);

    //close the model
    this.props.onRequestHide();

  },  
  render: function() {  	
    var date = this.state.currentData.date;
    var data = this.state.currentData.data;

    var whatIWorkedOn = getValue(data,"whatIWorkedOn");
    var whatIWillWorkOn = getValue(data,"whatIWillWorkOn");
    var blockers = getValue(data,"blockers");
    var additionalNotes = getValue(data,"additionalNotes");
    return this.transferPropsTo(
        <Modal animation={false}>
          <div className="modal-body">
          	<form role="form">
  				<div className="form-group">
    				<label>What I did:</label>
    				<textarea ref="txtWhatIWorkedOn" className="form-control" rows="3" defaultValue={whatIWorkedOn}></textarea>
  				</div>
  				<div className="form-group">
    				<label>What I will do:</label>
    				<textarea ref="txtWhatIWillWorkOn" className="form-control" rows="3" defaultValue={whatIWillWorkOn}></textarea>
  				</div>
  				<div className="form-group">
    				<label>Blockers:</label>
    				<textarea ref="txtBlockers" className="form-control" rows="3" defaultValue={blockers}></textarea>
  				</div>
  				<div className="form-group">
    				<label>Additional notes:</label>
    				<textarea ref="txtAdditionalNotes" className="form-control" rows="3" defaultValue={additionalNotes}></textarea>
  				</div>
			</form>           
          </div>  
          <div className="modal-footer">
        	<Button onClick={this.props.onRequestHide}>Close</Button>
        	<Button bsStyle="primary" onClick={this.handleSaveClick}>Save</Button>
      	  </div>        
        </Modal>
      );
  }
});

module.exports = EditNotesModal;