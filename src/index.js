import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import registerServiceWorker from './registerServiceWorker';
//引入reducer
import reducer from './reducers'
//创建store,store里边需要传reducer
const store = createStore(
	reducer,
	// 触发 redux-devtools
	window.devToolsExtension ? window.devToolsExtension() : undefined
)


ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
