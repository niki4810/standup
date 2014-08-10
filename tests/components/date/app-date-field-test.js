/** @jsx React.DOM */
jest.dontMock("../../../src/js/components/date/app-date-field.js");
describe("app-date-field", function() {
  it("should show the date passed in the props", function() {
    var React = require("react/addons");
    var DateFieldComponent = require("../../../src/js/components/date/app-date-field.js");
    var TestUtils = React.addons.TestUtils;

    // Render a date field component in the document
    var dateField = TestUtils.renderIntoDocument(
      <DateFieldComponent date="Saturday, August 9th 2014"/>
    );

    // Verify that current date is set
    var heading = TestUtils.findRenderedDOMComponentWithTag(
      dateField, "h2");
    expect(heading.getDOMNode().textContent).toEqual("Saturday, August 9th 2014");
  });
});