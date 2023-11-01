import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import loadable from '@loadable/component';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import { Provider } from 'react-redux';
import store, { persistor }from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';



const LazyApp = loadable(() => import("../src/App"), {
    fallback: <></>,  //loader
});




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <LazyApp/>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
