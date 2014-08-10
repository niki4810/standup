/** @jsx React.DOM */
jest.dontMock("../../../src/js/components/pagination/app-next-note.js");
describe("app-next-note", function() {
  var React;
  var NextNoteComp;
  var TestUtils;
  var nextNote;
  var div;
  var AppActions;

  beforeEach(function(){
    React = require("react/addons");
    NextNoteComp = require("../../../src/js/components/pagination/app-next-note.js");
    AppActions = require("../../../src/js/actions/app-actions");
    TestUtils = React.addons.TestUtils;
    nextNote = TestUtils.renderIntoDocument(
      <NextNoteComp/>
    );
    div = TestUtils.findRenderedDOMComponentWithTag(
      nextNote, "div");
  });

  afterEach(function(){
    React = undefined;
    NextNoteComp = undefined;
    TestUtils = undefined;
    nextNote = undefined;
    div = undefined;
    AppActions = undefined;
  });

  it("should have a correct classnames set", function() {
    expect(div.props.className).toEqual("app-button app-transition");
  });

  it("should call getNextDateData function on AppActions",function(){
    TestUtils.Simulate.click(div);
    expect(AppActions.getNextDateData.mock.calls.length).toEqual(1);
  });

});
