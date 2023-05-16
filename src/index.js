import React from 'react';
import ReactDOM from 'react-dom/client';
import {HashRouter} from 'react-router-dom';
import './styles/index.css';
import './styles/inbox.css'
import './styles/card.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <HashRouter>
    <App />
    </HashRouter>

);

