import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Provider from "react-redux/lib/components/Provider";
import store from './Redux/Redux-store'

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);
