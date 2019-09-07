/*
From mapStateToProps(state, ownProps):
errors (array) - list of errors from the state
formType (string): 'login' or 'signup', for each respective container
From mapDispatchToProps(dispatch, ownProps):
processForm (function): dispatching action creators login or signup, again depending on the container
*/

import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => ({
    errors: state.errors,
    formType: 'login'
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user))
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(SessionForm);