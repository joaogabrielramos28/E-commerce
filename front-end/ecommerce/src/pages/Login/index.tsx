import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, FaSignInAlt, AiFillLock } from 'react-icons/all';
import Input from '../../components/form/input/index';
import { Container, Content, Background, Back } from './styles';
import Button from '../../components/form/button/index';

import { Form } from '@unform/web';
import api from '../../services/api';
import ToastFunction from '../../utils/toast';
import { AuthContext } from '../../context/AuthContext';

interface AuthData {
    email: string;
    password: string;
}

interface ResponseData {
    data: DataProps;
}

interface DataProps {
    user: object;
}

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const handleSubmit = async (data: AuthData) => {
        try {
            const response: ResponseData = await api.post('/sessions', {
                email: data.email,
                password: data.password,
            });

            signIn;
            ToastFunction('Login successful', 'success');
        } catch (err) {
            ToastFunction('Login Error', 'error');
        }
    };
    return (
        <>
            <Container>
                <Back>
                    <Link to="/">
                        <IoIosArrowRoundBack size={40} />
                        Back
                    </Link>
                </Back>
                <Content>
                    <Form method="POST" onSubmit={handleSubmit}>
                        <h1>store.com</h1>
                        <h2>Sign In</h2>
                        <Input
                            name="email"
                            placeholder="example@hotmail.com"
                            icon={FaSignInAlt}
                        />

                        <Input
                            name="password"
                            placeholder="Your password"
                            type="password"
                            icon={AiFillLock}
                        />

                        <Button type="submit"> Login</Button>
                    </Form>
                </Content>
                <Background />
            </Container>
        </>
    );
};

export default Login;
