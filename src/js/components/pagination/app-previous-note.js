/** @jsx React.DOM */
var React = require("react"),
	AppActions = require("../../actions/app-actions");

var PreviousNoteComponent = React.createClass({
  handlePreviousDateClick: function(){
  	AppActions.getPreviousDateData();
  },	
  render : function() {
      return (
      <div className="app-button app-transition" onClick={this.handlePreviousDateClick}>
        <span> &lt; </span>
      </div>
      );
  }
});

module.exports = PreviousNoteComponent;