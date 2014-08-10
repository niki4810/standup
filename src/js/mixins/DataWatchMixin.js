/** @jsx React.DOM */
var React = require("react"),
	AppStore = require("../stores/app-store");

var DataWatchMixin = function(cb){
	return {
		getInitialState: function(){
			return cb();
		},
		componentWillMount: function(){
			AppStore.addChangeListener(this._onChange);
		},
		componentWillUnmount: function(){
			AppStore.removeChangeListener(this._onChange);
		},
		_onChange: function(){
			this.setState(cb());
		}
	};	
};

module.exports = DataWatchMixin;	