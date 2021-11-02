import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, FaSignInAlt, AiFillLock } from 'react-icons/all';
import Input from '../../components/form/input/index';
import { Container, Content, Background, Back } from './styles';
import Button from '../../components/form/button/index';
import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../context/AuthContext';
import validationErrors from '../../utils/validationErrors';
interface AuthData {
    email: string;
    password: string;
}

const Login = () => {
    const { signIn } = useAuth();
    const formRef = useRef<FormHandles>(null);
    const handleSubmit = useCallback(async (data: AuthData) => {
        try {
            formRef.current?.setErrors({});
            const schema = Yup.object().shape({
                email: Yup.string()
                    .email('type a valid email.')
                    .required('E-mail is required.'),
                password: Yup.string().required('Password is required.'),
            });

            await schema.validate(data, { abortEarly: false });

            signIn({
                email: data.email,
                password: data.password,
            });
        } catch (err) {
            validationErrors(err);
        }
    }, []);
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
                    <Form ref={formRef} method="POST" onSubmit={handleSubmit}>
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
                    <Link to="/register">
                        Don't have a account? Register here!
                    </Link>
                </Content>
                <Background />
            </Container>
        </>
    );
};

export default Login;
