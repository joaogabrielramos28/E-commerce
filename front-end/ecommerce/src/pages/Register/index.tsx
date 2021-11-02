import React from 'react';
import { Back, Container, Content, Background } from './styles';
import Button from '../../components/form/button/index';
import Input from '../../components/form/input/index';
import { Form } from '@unform/web';
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

interface RegisterData {
    name: string;
    email: string;
    password: string;
    age: number;
}

const Register = () => {
    const history = useHistory();
    const handelSubmit = async (data: RegisterData) => {
        try {
            const response = await api.post('/users', {
                name: data.name,
                email: data.email,
                age: data.age,
                password: data.password,
            });

            ToastFunction(
                `Welcome ${data.name}.Now, you can login!`,
                'success',
            );

            history.push('/login');
        } catch (err) {
            ToastFunction('Error to create your account ', 'error');
        }
    };

    return (
        <Container>
            <Back>
                <Link to="/">
                    <IoIosArrowRoundBack size={40} />
                    Back
                </Link>
            </Back>
            <Content>
                <Form method="POST" onSubmit={handelSubmit}>
                    <h1>store.com</h1>
                    <h2>Sign In</h2>
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
