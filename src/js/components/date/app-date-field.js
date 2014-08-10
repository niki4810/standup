/** @jsx React.DOM */
var React = require("react");

var DateFieldComponent = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
      return nextProps.date !== this.props.date;
  },
  render: function() {
     return (
         <h2 className="app-date">{this.props.date}</h2>
     );
  }
});

module.exports = DateFieldComponent;