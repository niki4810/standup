/** @jsx React.DOM */
jest.dontMock("../../../src/js/components/notes/app-note-section.js");
describe("app-note-section", function() {
  var React;
  var NoteSectionComponent;
  var TestUtils;
  var whatIDidComp;

  beforeEach(function() {
    React = require("react/addons");
    NoteSectionComponent = require("../../../src/js/components/notes/app-note-section.js");
    TestUtils = React.addons.TestUtils;    
    whatIDidComp = TestUtils.renderIntoDocument(
        <NoteSectionComponent data="Foo" 
                    noteSectionClass="what-i-worked-on" 
                    noteSectionNumber="note-section-1"
                    noteSectionLabel="What I worked on"/>
      );    
  });

  afterEach(function() {
    React = undefined;
    NoteSectionComponent = undefined;
    TestUtils = undefined;
    whatIDidComp = undefined;
  });

  it("should show the correct label and className in the heading",function(){      
    var heading = TestUtils.findRenderedDOMComponentWithTag(
    whatIDidComp, 'h5');
    expect(heading.getDOMNode().textContent).toEqual("What I worked on:"); 
    expect(heading.props.className).toEqual("what-i-worked-on");
  });

  it("should set the correct className in the container div",function(){      
    var div = TestUtils.findRenderedDOMComponentWithTag(whatIDidComp,"div");
    expect(div.props.className).toEqual("note-section note-section-1");
  });

  it("should set the correct data in the container pre",function(){      
    var pre = TestUtils.findRenderedDOMComponentWithTag(whatIDidComp,"pre");
    expect(pre.getDOMNode().textContent).toEqual("Foo");
  });

});