/** @jsx React.DOM */
var React = require("react"),
  ModalTrigger = require("react-bootstrap").ModalTrigger,
  OverlayTrigger = require("react-bootstrap").OverlayTrigger,
  Tooltip = require("react-bootstrap").Tooltip,
  EditNoteModal = require("../modal/app-edit-note-modal"),
  AppActions = require("../../actions/app-actions");

var NoteSettingsComponent = React.createClass({
    getInitialState: function() {
        return {show : true};
    },
    onFlipBtnClick: function(ev) {
        // first toggle show
        this.setState({show: !this.state.show});
        var self = this;
        // set timeout to revert show
        setTimeout(function(){
            self.setState({show: !self.state.show});
        },500);
        // call parent flip
        this.props.onFlip(ev);
    },
    handleNextClick: function(){
        AppActions.getNextDateData();
    },
    handlePreviousClick: function(){
        AppActions.getPreviousDateData();
    },
    handleTodayClick: function(){
        AppActions.getTodaysDateData();
    },
    render: function(){
        var show =  this.state.show ? 'note-settings app-transition' :
        'note-settings app-transition app-hide-content';
        return (
          <div className={show}>  
                <span className="note-settings-section note-settings-section-1">
                    <OverlayTrigger placement="top" overlay={<Tooltip>Previous note</Tooltip>}>
                        <span className="note-previous-btn" onClick={this.handlePreviousClick}><i className="fa fa-chevron-left"></i></span>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip>Next note</Tooltip>}>
                        <span className="note-next-btn" onClick={this.handleNextClick}><i className="fa fa-chevron-right"></i></span>
                    </OverlayTrigger>
                </span>
                <span className="note-settings-section note-settings-section-2">
                    <span className="note-today-btn" onClick={this.handleTodayClick}>Today</span>
                </span>
                <span className="note-settings-section note-settings-section-3">
                    <ModalTrigger modal={<EditNoteModal />}>
                        <span className="note-edit-btn">
                            <OverlayTrigger placement="top" overlay={<Tooltip>Edit note</Tooltip>}>
                                <i className="fa fa-pencil"></i>
                            </OverlayTrigger>
                        </span>
                    </ModalTrigger>            
                    <OverlayTrigger placement="top" overlay={<Tooltip>Flip note</Tooltip>}>
                        <span className="note-flip-btn" onClick={this.onFlipBtnClick}><i className="fa fa-exchange"></i></span>
                    </OverlayTrigger>
                </span>                                               
          </div>
        );
    }
});

module.exports = NoteSettingsComponent;
