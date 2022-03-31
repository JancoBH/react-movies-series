import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { AppRouter } from './AppRouter';

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </React.StrictMode>
  );
}

export default App;
