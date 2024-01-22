import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
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
const container = document.getElementById('root');
const root = createRoot(container);
root.render( 
   
<FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'conectando...'}>
    <script type="text/javascript" src="//www.turnjs.com/lib/turn.min.js "></script>
          <App />
    </Suspense>
</FirebaseAppProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
