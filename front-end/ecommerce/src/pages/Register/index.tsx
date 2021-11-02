import React, { useCallback, useRef } from 'react';
import { Back, Container, Content, Background } from './styles';
import Button from '../../components/form/button/index';
import Input from '../../components/form/input/index';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import ToastFunction from '../../utils/toast';

import {
    IoIosArrowRoundBack,
    FaSignInAlt,
    AiFillLock,
    AiOutlineUser,
    BsFillCalendarDateFill,
} from 'react-icons/all';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import * as Yup from 'yup';
import validationErrors from '../../utils/validationErrors';
interface RegisterData {
    name: string;
    email: string;
    password: string;
    age: number;
}

const Register = () => {
    const history = useHistory();
    const formRef = useRef<FormHandles>(null);
    const handelSubmit = useCallback(
        async (data: RegisterData) => {
            try {
                const schema = Yup.object().shape({
                    name: Yup.string().required('Name is required.'),
                    email: Yup.string()
                        .required('Email is required')
                        .email('Type a valid email'),
                    password: Yup.string().min(6, 'Password is too short'),
                    age: Yup.number().required('Age is required.'),
                });

                await schema.validate(data, { abortEarly: false });

                const response = await api
                    .post('/users', {
                        name: data.name,
                        email: data.email,
                        age: data.age,
                        password: data.password,
                    })
                    .then(() => {
                        ToastFunction(
                            `Welcome ${data.name}.Now, you can login!`,
                            'success',
                        );

                        history.push('/login');
                    })
                    .catch(() => {
                        ToastFunction(
                            'Register failed. Check your credentials and try again',
                            'error',
                        );

                        return;
                    });
            } catch (err) {
                validationErrors(err);
            }
        },
        [useHistory, ToastFunction],
    );

    return (
        <Container>
            <Back>
                <Link to="/">
                    <IoIosArrowRoundBack size={40} />
                    Back
                </Link>
            </Back>
            <Content>
                <Form ref={formRef} method="POST" onSubmit={handelSubmit}>
                    <h1>store.com</h1>
                    <h2>Register</h2>
                    <Input
                        name="name"
                        placeholder="John Doe"
                        icon={AiOutlineUser}
                    />
                    <Input
                        name="email"
                        type="email"
                        placeholder="example@hotmail.com"
                        icon={FaSignInAlt}
                    />

                    <Input
                        name="age"
                        placeholder="Your Age"
                        icon={BsFillCalendarDateFill}
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
    );
};

export default Register;
