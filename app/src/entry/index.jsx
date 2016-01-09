import '../common/lib';
import '../../stylesheets/app.less';
import ReactDOM from 'react-dom';
import React from 'react';
import Routes from '../component/Routes';

window.toastr = require( 'toastr');
require("toastr/toastr.less");

ReactDOM.render(<Routes />, document.getElementById('react-content'));
