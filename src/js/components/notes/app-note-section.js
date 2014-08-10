/** @jsx React.DOM */
var React = require("react");

var NoteSectionComp = React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
      return nextProps.data !== this.props.data;
  },  
  render : function(){
    var noteSectionNumber = "note-section " + this.props.noteSectionNumber;
      return (
        <div className={noteSectionNumber}>
          <h5 className={this.props.noteSectionClass}>{this.props.noteSectionLabel}:</h5>
          <pre>
            {this.props.data}
          </pre>
        </div>
      );
  }
});

module.exports = NoteSectionComp;