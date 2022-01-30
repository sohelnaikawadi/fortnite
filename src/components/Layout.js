import React from 'react'
import {connect} from 'react-redux'
import Header from './header/Header'
import { fetchProducts } from '../store/actions/ProductActions'
import {useEffect} from 'react'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import Body from './body/Body'

const Layout =({getProductsList}) => {

    useEffect(() => {
        console.log('Going to call fetch product')
        getProductsList();
        console.log('success');
    }, [])

    return (
        <div>
            <Header/>
            <Body/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) =>({
getProductsList: () => dispatch(fetchProducts()),
})

export default connect(null, mapDispatchToProps)(Layout)
