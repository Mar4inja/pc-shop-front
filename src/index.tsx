import React from 'react';
import ReactDOM from 'react-dom/client'; // Mainīts uz 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './app/store/store';
import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
