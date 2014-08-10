/** @jsx React.DOM */
var React = require("react"),
	AppActions = require("../../actions/app-actions");

var TodayNoteComponent = React.createClass({
	handleTodayClick: function(){
		AppActions.getTodaysDateData();
	},
    render: function() {
        return (
            <div className="app-button app-btn-today app-transition" onClick={this.handleTodayClick}>
                <span>Today</span>
            </div>    
        );
    }
});

module.exports = TodayNoteComponent;