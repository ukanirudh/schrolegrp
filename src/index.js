import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import { Router, browserHistory } from 'react-router'
import routes from './Routes';
import './global.js'

ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.getElementById('root'));
registerServiceWorker();
