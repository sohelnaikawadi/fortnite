import {all} from 'redux-saga/effects'
import {productWatchers} from './ProductSaga'

export const RootSaga = function* root(){
    const watchers = [
            ...productWatchers,
    ];
    yield all(watchers);
}