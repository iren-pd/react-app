import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyButton } from '../components/ui/button/MyButton';
import { MyInput } from '../components/ui/input/MyInput';
import { AuthContext } from '../context';

export const Login = () => {
    const navigate = useNavigate();
    const { setIsAuth } = useContext(AuthContext);
    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        navigate('/posts');
        localStorage.setItem('auth', 'true');
    };

    return (
        <div>
            <h1>Страница для логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин" />
                <MyInput type="password" placeholder="Введите пароль" />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};
