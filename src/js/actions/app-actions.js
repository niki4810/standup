var AppConstants = require("../constants/app-constants.js"),
	AppDispatcher = require("../dispatchers/app-dispatcher.js");

var AppActions = {
	getTodaysDateData: function(){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.GET_TODAYS_DATE_DATA
		});
	},
	getPreviousDateData: function(){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.GET_PREVIOUS_DATE_DATA
		});
	},
	getNextDateData: function(){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.GET_NEXT_DATE_DATA
		});
	},
	saveStandupData: function(date, data){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SAVE_STANDUP_DATA,
			date: date,
			data: data
		});
	},
	getStandUpDataByDate : function(date){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.GET_DATA_BY_DATE,
			date: date
		});
	}
};

module.exports = AppActions;