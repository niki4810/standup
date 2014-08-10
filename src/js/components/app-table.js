/** @jsx React.DOM */
var React = require("react"),
  DateFieldComponent = require("./date/app-date-field"),  
  NoteComponent = require("./containers/app-note"),
  moment = require("moment"),
  AppStore = require("../stores/app-store"),
  DataWatchMixin = require("../mixins/DataWatchMixin");

var getCurrentDateAndData = function(){
  return {
    currentData: AppStore.getCurrentDateAndData()
  };
};

var TableComponent = React.createClass({
  mixins: [DataWatchMixin(getCurrentDateAndData)],  
  render: function() {
    var date = this.state.currentData.date;
    var data = this.state.currentData.data;
    var dateStr = moment(date).format('dddd, MMMM Do YYYY');
    return (
      <table cellSpacing="5px">
        <tr>          
          <td className="app-date-field-container">
              <DateFieldComponent date={dateStr}/>
          </td>          
        </tr>
        <tr>
          <td className="app-note-container">
              <NoteComponent data={data}/>
          </td>          
        </tr>
      </table>
    );
  }
});

module.exports = TableComponent;