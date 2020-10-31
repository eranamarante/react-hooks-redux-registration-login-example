import React from 'react';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';

import routes from './routes';

const App = () => {
  const alert = useSelector(state => state.alert);
  const user = localStorage.getItem('user');
  const routing = useRoutes(routes(user));

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="col-md-8 offset-md-2">
          {alert.message && (
            <div className={`alert ${alert.type}`}>{alert.message}</div>
          )}
          {routing}
        </div>
      </div>
    </div>
  );
};

export default App;
