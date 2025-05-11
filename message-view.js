import React from 'react';
import PropTypes from 'prop-types';
import {Container, Row, Col} from 'react-amazing-grid';

export default function MessageView({message}) {
  return (
    <div>
      <div >
        <h2>{message.billName}</h2> 
      </div>
      
      <div>
      <button>
          Completed
        </button>
        </div>

    </div>
  );
}

MessageView.propTypes = {
  message: PropTypes.object.isRequired
}
