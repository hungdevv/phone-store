import React, {Component} from 'react';
import {connect} from 'react-redux';
// import  * as message from '../constants/Message';
// import PropTypes from 'prop-types';
import Message from './../components/Message';
class MessageContainer extends Component {
  render() {
    var {message} = this.props;
    return (
      <Message message={message}/>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    message: state.message
  }
}
export default connect(mapStateToProps, null)(MessageContainer)
