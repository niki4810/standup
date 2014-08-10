/** @jsx React.DOM */
var React = require("react"),
	NoteSectionComponent = require("../notes/app-note-section");

var getValue = function(data,key){
    if (data && data.hasOwnProperty(key)){
        return data[key];
    }
    return "";
};

var BackNoteComponent = React.createClass({	       
    render : function(){
    	var additionalNotes = getValue(this.props.data,"additionalNotes"); 
        return (
            <div className="back app-transition">
                <NoteSectionComponent data={additionalNotes} 
                    noteSectionClass="additional-notes" 
                    noteSectionNumber="note-section-4"
                    noteSectionLabel="Additional notes"/>                
            </div>
        );
    }
});

module.exports = BackNoteComponent;