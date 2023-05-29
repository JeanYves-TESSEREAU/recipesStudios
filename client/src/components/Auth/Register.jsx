import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './auth.css';
// import setAuthToken from '../../utils/setAuthToken';
// import jwt_decode from 'jwt-decode';
import { connect } from 'react-redux';

import { register } from '../../redux/actions/auth';

const Register = ({ register, connexionModule }) => {
  localStorage.clear();
  // Hook for state: useState
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
    password2: '',
  });
  const switchToLogin = (e) => {
    e.preventDefault();
    connexionModule('login');
  };
  const { userName, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      // setAlert('Wrong password', 'error');
    } else {
      register({
        userName,
        email,
        password,
      });
      switchToLogin();
    }
  };

  // const token = localStorage.getItem('jwtToken', 'token');
  // setAuthToken(token);
  // const decoded = jwt_decode(token);

  return (
    <form className='connexionForm' onSubmit={(e) => onSubmit(e)}>
      <fieldset>
        <legend>Enregistrement</legend>
        <fieldset>
          <legend>Username</legend>
          <label>
            <input
              type='text'
              name='userName'
              value={userName}
              required
              placeholder='UserName'
              minLength='1'
              maxLength='10'
              size='10'
              onChange={(e) => onChange(e)}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <label>
            <input
              type='email'
              required
              placeholder='Email Address'
              name='email'
              value={email}
              onChange={(e) => onChange(e)}
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Mot de passe</legend>
          <label>
            <input
              type='password'
              required
              placeholder='Password'
              autoComplete='new-password'
              name='password'
              value={password}
              onChange={(e) => onChange(e)}
              minLength='8'
            />
          </label>
        </fieldset>
        <fieldset>
          <legend>Confirmation</legend>
          <label>
            <input
              type='password'
              required
              placeholder='Confirm Password'
              autoComplete='new-password'
              name='password2'
              value={password2}
              onChange={(e) => onChange(e)}
              minLength='8'
            />
          </label>
        </fieldset>

        <input className='connexionValidation' type='submit' value='Go !' />
      </fieldset>
      <button onClick={switchToLogin}>Déjà enregistré ? Se connecter </button>
    </form>
  );
};

Register.propTypes = {
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth,
});

export default connect(mapStateToProps, { register })(Register);
