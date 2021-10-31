import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, FaSignInAlt, AiFillLock } from 'react-icons/all';
import Input from '../../components/form/input/index';
import { Container, Content, Background, Back } from './styles';
import Button from '../../components/form/button/index';

import { Form } from '@unform/web';
import { useAuth } from '../../context/AuthContext';
interface AuthData {
    email: string;
    password: string;
}

const Login = () => {
    const { signIn, user } = useAuth();

    const handleSubmit = async (data: AuthData) => {
        signIn({
            email: data.email,
            password: data.password,
        });
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
