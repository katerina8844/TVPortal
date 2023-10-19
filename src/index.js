import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import loadable from '@loadable/component';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
const LazyApp = loadable(() => import("../src/App"), {
    fallback: <></>,  //loader
});




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
                <LazyApp/>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
