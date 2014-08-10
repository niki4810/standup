/** @jsx React.DOM */
var React = require("react"),
  NoteSettingsComponent = require("../settings/app-note-settings"),
  FrontNoteComponent = require("./app-front-note"),
  BackNoteComponent = require("./app-back-note");

var NoteComponent = React.createClass({
  getInitialState: function() {
      return {
          flip : false
      };
  },    
  onFlip: function(ev) {  
    // first toggle show
    this.setState({flip: !this.state.flip});    
  },
  render: function(){
      var defaultClassName = "note";
      var className = "";
      className =  this.state.flip ? defaultClassName + ' flip' : defaultClassName;            
      var currentDateData = this.props.data;
             
      return (
                <div className={className}>
                    <NoteSettingsComponent onFlip={this.onFlip}/>
                    <FrontNoteComponent data={currentDateData}/>
                    <BackNoteComponent data={currentDateData}/>
                </div>    
      );
  }
});

module.exports = NoteComponent;