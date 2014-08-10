/** @jsx React.DOM */
var React = require("react"),
	AppActions = require("../../actions/app-actions");

var NextNoteComponent = React.createClass({
  handleNextDateClick: function(){
  	AppActions.getNextDateData();
  },		
  render : function() {      
      return (
      <div className="app-button app-transition" onClick={this.handleNextDateClick}>
        <span> &gt; </span>
      </div>
      );
  }
});

module.exports = NextNoteComponent;