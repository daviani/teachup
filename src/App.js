import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './styles/main.css'
import data from './utils/data.json'
import Home from './pages/home'
import User from './pages/user'
import Card from './pages/card'
import Error from './pages/error'

import Products from './pages/products'
import Product from './pages/product-id'

function App () {
    const [categoryId, setCategoryId] = useState('')
    const [label, setLabel] = useState('')
    const [product, setProduct] = useState('')

    useEffect(() => {
        setCategoryId('')
        setLabel('')
        setProduct('')
    }, [])
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home data={data}
                          setCategoryId={setCategoryId}
                          setLabel={setLabel}
                    />
                </Route>
                <Route path="/product">
                    <Product product={product} label={label}/>
                </Route>
                <Route path="/products">
                    <Products data={data}
                              categoryId={categoryId}
                              label={label}
                              setProduct={setProduct}
                    />
                </Route>
                <Route path="/card">
                    <Card data={data}/>/>
                </Route>
                <Route path="/user" component={User}/>
                <Route path="*" component={Error}/>
            </Switch>
        </Router>
    )
}

export default App
