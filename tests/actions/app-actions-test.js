jest.dontMock("../../src/js/actions/app-actions.js");
jest.dontMock("../../src/js/constants/app-constants.js");
describe("app-date-field", function() {
  var AppActions;
  var AppDispatcher;
  var AppConstants;

  beforeEach(function(){
    AppActions = require("../../src/js/actions/app-actions.js");    
    AppDispatcher = require("../../src/js/dispatchers/app-dispatcher.js");
    AppConstants = require("../../src/js/constants/app-constants.js");
  });

  afterEach(function(){
    AppActions = undefined;    
    AppDispatcher = undefined;
    AppConstants = undefined;
  });  


  it("should call handleViewAction when getTodaysDateData is called",function(){
    AppActions.getTodaysDateData();
    expect(AppDispatcher.handleViewAction.mock.calls.length).toEqual(1);    
    expect(AppDispatcher.handleViewAction.mock.calls[0][0].actionType).toBe(AppConstants.GET_TODAYS_DATE_DATA);    
  });

  it("should call handleViewAction when getPreviousDateData is called",function(){
    AppActions.getPreviousDateData();
    expect(AppDispatcher.handleViewAction.mock.calls.length).toEqual(1);
    expect(AppDispatcher.handleViewAction.mock.calls[0][0].actionType).toBe(AppConstants.GET_PREVIOUS_DATE_DATA);
  });

  it("should call handleViewAction when getNextDateData is called",function(){
    AppActions.getNextDateData();
    expect(AppDispatcher.handleViewAction.mock.calls.length).toEqual(1);
    expect(AppDispatcher.handleViewAction.mock.calls[0][0].actionType).toBe(AppConstants.GET_NEXT_DATE_DATA);
  });

  it("should call handleViewAction when getStandUpDataByDate is called",function(){
    AppActions.getStandUpDataByDate("foo");
    expect(AppDispatcher.handleViewAction.mock.calls.length).toEqual(1);
    expect(AppDispatcher.handleViewAction.mock.calls[0][0].actionType).toBe(AppConstants.GET_DATA_BY_DATE);    
    expect(AppDispatcher.handleViewAction.mock.calls[0][0].date).toBe("foo");
  });

  it("should call handleViewAction when saveStandupData is called",function(){
    AppActions.saveStandupData("foo","bar");
    expect(AppDispatcher.handleViewAction.mock.calls.length).toEqual(1);
    expect(AppDispatcher.handleViewAction.mock.calls[0][0].actionType).toBe(AppConstants.SAVE_STANDUP_DATA);    
    expect(AppDispatcher.handleViewAction.mock.calls[0][0].date).toBe("foo");
    expect(AppDispatcher.handleViewAction.mock.calls[0][0].data).toBe("bar")
  });


});