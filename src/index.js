import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import { store } from './app/store';
// redux persister
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			{/* <PersistGate loading={null} persistor={persistor}>
				<App />
			</PersistGate> */}
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
