import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class Certification extends Component {
    state= {
      issueName: ''
    }
  
    async componentDidMount(){
      
        // const getReport = await this.props.reports.find( report => report._id === this.props.match.params.id);

    }
  
    render() {
      return ReactDOM.createPortal(
      <div className="Modal">
          <div className="modal-content">
           
          </div>
        </div>,
        document.querySelector('#modal')
      );
    }
  };
  
  export default Certification;