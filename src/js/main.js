/** @jsx React.DOM */

var TableComponent = require("./components/app-table"),
	React = require("react");

React.renderComponent(<TableComponent/>,
	document.getElementById("app-shell"));	