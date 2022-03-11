import React, { Component, Fragment } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import store from '../store';

import Header from './layout/Header';
import Sidebar from './layout/Sidebar';
import Footer from './layout/Footer';
import LogoutModal from './layout/LogoutModal';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';

import AccountList from '../pages/account/AccountList';
import AccountForm from '../pages/account/AccountForm';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                
                <Fragment>

                    <div id="wrapper">

                        <Sidebar />

                        <div id="content-wrapper" className="d-flex flex-column">


                            <div id="content">

                                <Header />

                                <AccountForm />
                            </div>                       

                            <Footer />

                        </div>
                        

                    </div>
                
                    <a className="scroll-to-top rounded" href="#page-top">
                        <i className="fas fa-angle-up"></i>
                    </a>
                
                    <LogoutModal />
                </Fragment>

            </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'));