import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch, Redirect
} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { firebase } from '../firebase/firebase-config';

import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { login } from '../actions/auth';
import { LoadingScreen } from '../components/journal/LoadingScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';



export const AppRouter = () => {
    
    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);

    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            
            if( user?.uid ) {
                dispatch( login( user.uid, user.displayName) );
                setIsLoggedIn( true );
            } else {
                setIsLoggedIn( false );
            }

            setChecking( false );
        });
    }, [ dispatch, setChecking, setIsLoggedIn ])

    if( checking ) {
        return (
            <LoadingScreen />
        )
    }

    return (
        <Router>
            <div>
                <Switch>

                    <PublicRoute path="/auth" component={ AuthRouter } isAuthenticated={ isLoggedIn } />
                    <PrivateRoute path="/" component={ JournalScreen } exact isAuthenticated={ isLoggedIn } />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>
        </Router>
    )
}
