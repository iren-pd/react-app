import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import { privateRoutes, publicRoutes } from '../router';
import { Loader } from './UI/Loader/Loader';

export const AppRouter = () => {
    const { isAuth, isLoading } = useContext(AuthContext);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map((route) => (
                      <Route
                          key={route.path}
                          element={route.element}
                          path={route.path}
                      />
                  ))
                : publicRoutes.map((route) => (
                      <Route
                          key={route.path}
                          element={route.element}
                          path={route.path}
                      />
                  ))}
        </Routes>
    );
};
