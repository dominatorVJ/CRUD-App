import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import {Route,Switch} from "react-router-dom"

import customerAll from "./components/customer/customerAll"
import customerView from "./components/customer/customerView"
import customerUpdate from "./components/customer/customerUpdate"
import customerNew from "./components/customer/customerNew"
import customerDelete from "./components/customer/customerDelete"

import Navbar from "./components/common/navbarDB"

class App extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() { 
        return (
            <div>
            <Navbar />
            <div className="container mt-3">
            <Switch>
                <Route path="/customerView/:id" component={customerView}></Route>
                <Route path="/customerDelete/:id" component={customerDelete}></Route>
                <Route path="/customerUpdate/:id" component={customerUpdate}></Route>
                <Route path="/customerNew"  component={customerNew} ></Route>        
                <Route path="/"  exact component={customerAll}></Route>
            </Switch>
            </div>
            </div>
        );
    }
}
 
export default App;