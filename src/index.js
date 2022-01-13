import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import store from './store/store';
import App from './App';

const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <CssBaseline />
        <App />
      </Router>
    </Provider>
  </StrictMode>,
  rootElement
);
