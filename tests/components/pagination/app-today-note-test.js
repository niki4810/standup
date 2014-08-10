/** @jsx React.DOM */
jest.dontMock("../../../src/js/components/pagination/app-today-note.js");
describe("app-today-note", function() {
  var React;
  var TodayNoteComp;
  var TestUtils;
  var todayNote;
  var div;
  var AppActions;

  beforeEach(function(){
    React = require("react/addons");
    TodayNoteComp = require("../../../src/js/components/pagination/app-today-note.js");
    AppActions = require("../../../src/js/actions/app-actions");
    TestUtils = React.addons.TestUtils;
    todayNote = TestUtils.renderIntoDocument(
      <TodayNoteComp/>
    );
    div = TestUtils.findRenderedDOMComponentWithTag(
      todayNote, "div");
  });

  afterEach(function(){
    React = undefined;
    TodayNoteComp = undefined;
    TestUtils = undefined;
    todayNote = undefined;
    div = undefined;
    AppActions = undefined;
  });

  it("should have a correct classnames set", function() {
    expect(div.props.className).toEqual("app-button app-btn-today app-transition");
  });

  it("should call getTodayDateData function on AppActions",function(){
    TestUtils.Simulate.click(div);
    expect(AppActions.getTodaysDateData.mock.calls.length).toEqual(1);
  });

});
