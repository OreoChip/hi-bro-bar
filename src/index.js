import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import RouterContainer from './router';
import 'bootstrap/dist/css/bootstrap-grid.css';

ReactDOM.render(<RouterContainer />, document.getElementById('root'));

serviceWorker.unregister();
