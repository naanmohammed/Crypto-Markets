import React from 'react';
import { Provider } from 'react-redux';
import HomeList from './homeList';
import './home.css';
import store from '../../Redux/store';

function HomeContainer() {
  return (
    <Provider store={store}>
      <div className="home">
        <HomeList />
      </div>
    </Provider>
  );
}

export default HomeContainer;
