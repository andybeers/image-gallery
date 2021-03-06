import angular from 'angular';
import './scss/main.scss';
import components from './components';
import services from './services';

import uiRouter from 'angular-ui-router';
import routes from './routes';

const app = angular.module('myApp', [components, services, uiRouter]);

const dev = 'http://localhost:3000/api';

app.config(routes);
app.value('apiUrl', dev);
