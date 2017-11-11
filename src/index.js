import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import registerServiceWorker from './registerServiceWorker';

const MaterialisedApp = () => (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );
  

ReactDOM.render(<MaterialisedApp />, document.getElementById('root'));
registerServiceWorker();
