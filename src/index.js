import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    FirebaseAppProvider
} from 'reactfire';
import firebaseConfig from './firebase-config';

/*
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'; // Archivo Javascript de Bootstrap 4 

*/

ReactDOM.render( 
<FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'conectando...'}>
          <App />
    </Suspense>
</FirebaseAppProvider>
,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
