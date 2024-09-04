import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { routes } from '../router';

export const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route) => (
                <Route
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                />
            ))}
        </Routes>
    );
};
