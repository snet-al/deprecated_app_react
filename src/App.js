import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App bg-inactive h-full">
      <Provider store={store}>
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
