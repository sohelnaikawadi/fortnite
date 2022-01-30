import Layout from './components/Layout';
import createSagaMiddleware from 'redux-saga'
import {applyMiddleware, combineReducers, createStore} from 'redux'
import ProductReducer from './store/reducer/ProductReducer'
import { RootSaga } from './store/saga/RootSaga';
import { Provider } from 'react-redux'
import {composeWithDevTools} from 'redux-devtools-extension'

const sagaMiddleware = createSagaMiddleware();

const reducers = combineReducers({
  ProductReducer
})

const composeEnhancers = composeWithDevTools({
	trace: true,
	traceLimit: 25
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(RootSaga)

function App() {
  return (
    <Provider store = {store}>
      <Layout/>
    </Provider>
  );
}

export default App;
