import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store, { persistor } from './App/providers/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Modal from 'react-modal';
Modal.setAppElement('#root');
ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
				<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
