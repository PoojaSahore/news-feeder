import React from 'react';
import ReactDOM from 'react-dom';
import {Main} from './components';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
