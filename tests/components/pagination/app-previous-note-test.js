/** @jsx React.DOM */
jest.dontMock("../../../src/js/components/pagination/app-previous-note.js");
describe("app-previous-note", function() {
  var React;
  var PreviousNoteComp;
  var TestUtils;
  var previousNote;
  var div;
  var AppActions;

  beforeEach(function(){
    React = require("react/addons");
    PreviousNoteComp = require("../../../src/js/components/pagination/app-previous-note.js");
    AppActions = require("../../../src/js/actions/app-actions");
    TestUtils = React.addons.TestUtils;
    previousNote = TestUtils.renderIntoDocument(
      <PreviousNoteComp/>
    );
    div = TestUtils.findRenderedDOMComponentWithTag(
      previousNote, "div");
  });

  afterEach(function(){
    React = undefined;
    PreviousNoteComp = undefined;
    TestUtils = undefined;
    previousNote = undefined;
    div = undefined;
    AppActions = undefined;
  });

  it("should have a correct classnames set", function() {
    expect(div.props.className).toEqual("app-button app-transition");
  });

  it("should call getPreviousDateData function on AppActions",function(){
    TestUtils.Simulate.click(div);
    expect(AppActions.getPreviousDateData.mock.calls.length).toEqual(1);
  });

});
