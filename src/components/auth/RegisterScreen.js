import React from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';

export const RegisterScreen = () => {

    const [ formValues, handleInputChange, reset ] = useForm({
        name: 'Dua Lipa',
        email: 'dua@email.com',
        password: '12345',
        password: '12345'
    });

    const { name, email, password, password2 } = formValues;

    const handleRegister = (e) => {
        e.preventDefault();

        if( isFormValid() ) {
            console.log('Form is correct')
        }
    }

    const isFormValid = () => {

        if( name.trim().length === 0) {
            console.log('Name is required');
            return false;
        } else if ( !validator.isEmail( email ) ) {
            console.log( 'Email is not valid' );
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            console.log('Password should be at least 6 characters and match each other');
            return false
        }

        return true;
    }

    return (
        <div>

            <h3 className="auth__title">Register</h3>

            <form onSubmit={ handleRegister }>

                <div className='auth__alert-error'>
                    Hello world
                </div>

                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                    value= { name }
                    onChange= { handleInputChange }
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value= { email }
                    onChange= { handleInputChange }
                />

                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                    value= { password }
                    onChange= { handleInputChange }
                />

                <input
                    type="text"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
                    value= { password2 }
                    onChange= { handleInputChange }
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block mb-1"
                >
                    Register
                </button>

                <Link to="/auth/login" className="link">
                    Already Registered?
                </Link>

            </form>

        </div>
    )
}
