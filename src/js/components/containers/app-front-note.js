/** @jsx React.DOM */
var React = require("react"),
    NoteSectionComponent = require("../notes/app-note-section");

var getValue = function(data,key){
    if (data && data.hasOwnProperty(key)){
        return data[key];
    }
    return "";
};

var FrontNoteComponent = React.createClass({
    render : function(){   
        var whatIWorkedOn = getValue(this.props.data,"whatIWorkedOn");
        var whatIWillWorkOn = getValue(this.props.data,"whatIWillWorkOn");
        var blockers = getValue(this.props.data,"blockers");                
        return (
            <div className="front app-transition">
                <NoteSectionComponent data={whatIWorkedOn} 
                    noteSectionClass="what-i-worked-on" 
                    noteSectionNumber="note-section-1"
                    noteSectionLabel="What I worked on"/>
                <NoteSectionComponent data={whatIWillWorkOn} 
                    noteSectionClass="what-i-will-work-on" 
                    noteSectionNumber="note-section-2"
                    noteSectionLabel="What I will work on"/>
                <NoteSectionComponent data={blockers} 
                    noteSectionClass="blockers" 
                    noteSectionNumber="note-section-3"
                    noteSectionLabel="Blockers"/>
            </div>
        );
    }
});

module.exports = FrontNoteComponent;