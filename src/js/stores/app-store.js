
var AppDispatcher = require("../dispatchers/app-dispatcher"),
merge = require("react/lib/merge"),
AppConstants = require("../constants/app-constants"),
EventEmitter = require("events").EventEmitter,
moment = require("moment");

var CHANGE_EVENT = "change";

var _currentDate = moment().calendar("MMMM Do YYYY");
var _currentDateData = {};

//stub this can come from server, currently coming from local storage.
var _getStandupData = function(){
	if (!localStorage.getItem("standup-app")){
	  var dateData = {};
	  var dateDataStringified = JSON.stringify(dateData);
	  localStorage.setItem("standup-app", dateDataStringified);
	}
	return localStorage.getItem("standup-app");
};

var _getStandupDataByDate = function(date){
	var _stanupData = _getStandupData();
	var _stanupDataObj = null;
	if (_stanupData && _stanupData !== ""){
		_stanupDataObj = JSON.parse(_stanupData);
	}
	_currentDateData = _stanupDataObj ? _stanupDataObj[date] : {};
	return _currentDateData;
};

	var _saveStanupData = function(date, data) {
	var currentData = JSON.parse(_getStandupData());
	var newData = merge({},currentData);
	newData[date] = data;
	localStorage.setItem("standup-app",JSON.stringify(newData));
};

var _getTodaysDateData = function(){
	var today = moment().calendar("MMMM Do YYYY");
	_currentDate = today;
	return _getStandupDataByDate(today);
};

var _getPreviousDateData = function(){
	var previousDate =   moment(_currentDate).subtract('days', 1).calendar("MMMM Do YYYY");
	_currentDate = previousDate;
	return _getStandupDataByDate(previousDate);
};

var _getNextDateData = function(){
	var nextDate =   moment(_currentDate).add('days', 1).calendar("MMMM Do YYYY");
	_currentDate = nextDate;
	return _getStandupDataByDate(nextDate);
};

var AppStore = merge(EventEmitter.prototype,{
	emitChange: function(){
		this.emit(CHANGE_EVENT);
	},
	addChangeListener:function(callback){
		this.on(CHANGE_EVENT,callback);
	},
	removeChangeListener:function(callback){
		this.removeListener(CHANGE_EVENT,callback);
	},
	getCurrentDate: function(){
		return _currentDate;
	},
	getCurrentData: function(){
		return _currentDateData;
	},
	getCurrentDateAndData : function(){
		var data = _getStandupDataByDate(_currentDate);
		var date = _currentDate;
		return {
			date: date,
			data: data
		};
	},
	getStandupDataByDate : function(date){
	return _getStandupDataByDate(date);
	},

	dispatcherIndex:AppDispatcher.register(function(payload){
	   // this is our action from handleViewAction
	   var action = payload.action; 
	   switch (action.actionType){
	     case AppConstants.GET_TODAYS_DATE_DATA: 
	     	_getTodaysDateData();      
	     	break;
	     case AppConstants.GET_PREVIOUS_DATE_DATA:
	     	_getPreviousDateData();
	     	break;
	     case AppConstants.GET_NEXT_DATE_DATA: 
	     	_getNextDateData();
	     	break;
	     case AppConstants.SAVE_STANDUP_DATA:
	     	_saveStanupData(action.date ,action.data);	        
	       break;
	     case AppConstants.GET_DATA_BY_DATE:
	     	_getStandupDataByDate(payload.date); 
	     	break;
	   }
	    AppStore.emitChange();
	    return true;
	  })
});

module.exports = AppStore;