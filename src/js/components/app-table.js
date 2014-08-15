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
      <div className="row">
        <div className="col-md-12 app-date-field-container">
          <DateFieldComponent date={dateStr}/>
        </div>
        <div className="col-md-12">
          <NoteComponent data={data}/>
        </div>
      </div>
    );
  }
});

module.exports = TableComponent;