import { call, cancel, fork, ForkEffect, put, takeEvery, select } from 'redux-saga/effects';
import {fetchProducts} from '../apis/ProductApi'
import {fetchProductsSuccess} from '../actions/ProductActions'

export function* watchFetchAndUpdateQuoteSaga(){
    console.log('inside watcher')
    yield takeEvery('FETCH_PRODUCTS', fetchAndUpdateProductListSaga)
}

export function* fetchAndUpdateProductListSaga(){
    console.log('Inside Saga')
    try{
        const result = yield call(fetchProducts)
        //const result = [{id:"12"}]
        console.log("result inside saga", result)
        yield put(fetchProductsSuccess(result))
    }
    catch{
        console.log("error");
    }
}

export const productWatchers = [
    fork(watchFetchAndUpdateQuoteSaga),
];