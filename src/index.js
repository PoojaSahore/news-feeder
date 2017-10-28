import React from 'react';
import ReactDOM from 'react-dom';
import {HelloWorld} from './components';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloWorld />, document.getElementById('root'));
registerServiceWorker();
