import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Redirect } from 'react-router';



export function isAuthenticated(component) {
    let jwt_Token = JSON.parse(localStorage.getItem('login_parameters'))

    if (jwt_Token) {
        return component;
    } else {
        return <Redirect to="/sign" />;
    }
}

export function get_jwt() {
    let jwt_Token = JSON.parse(localStorage.getItem('login_parameters'))
    if (jwt_Token) {
        return jwt_Token.user.token;
    } else {
        console.log('No Token');
    }
}