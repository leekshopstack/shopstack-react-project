import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './routers';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="wrapper">
                    <Header />
                    <Switch>
                        { this.showContentMenu(routes) }
                    </Switch>
                    <Footer />
                </div>
            </Router>
        );
    }
    
    showContentMenu = (routes) => {
        var result = null;

        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route 
                        key={index} 
                        path={route.path} 
                        exact={route.exact} 
                        component={route.main} 
                    />
                );
            });
        }

        return result;
    }
}

export default App;
