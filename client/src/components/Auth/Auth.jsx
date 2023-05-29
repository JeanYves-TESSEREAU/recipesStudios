import { React, useState } from 'react';
import Register from './Register';
import Login from './Login';

import { connect } from 'react-redux';

const Home = (isAuthenticated) => {
  const [module, setModule] = useState('login');
  const connexionModule = (data) => {
    setModule(data);
  };

  return (
    <div className='account'>
      {module === 'login' ? (
        <Login connexionModule={connexionModule} />
      ) : module === 'register' ? (
        <Register connexionModule={connexionModule} />
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth,
});

export default connect(mapStateToProps)(Home);
