import React from 'react';
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div>

            <h3 className="auth__title">Register</h3>

            <form>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                />

                <input
                    type="text"
                    placeholder="Password"
                    name="password"
                    className="auth__input"
                />

                <input
                    type="text"
                    placeholder="Confirm password"
                    name="password2"
                    className="auth__input"
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
