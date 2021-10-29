import React, { EventHandler, FormEvent, useRef } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowRoundBack, FaSignInAlt, AiFillLock } from 'react-icons/all';
import Input from '../../components/form/input/index';
import { Container, Content, Background, Back } from './styles';
import Button from '../../components/form/button/index';
import EventEmitter from 'events';
const Login = () => {
    const inputRef = useRef(null);

    const HandleSubmit = (e: FormEvent) => {
        e.preventDefault();

        console.log(inputRef.current);
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
                    <form method="POST" onSubmit={HandleSubmit}>
                        <h1>store.com</h1>
                        <h2>Sign In</h2>
                        <Input
                            name="email"
                            placeholder="example@hotmail.com"
                            icon={FaSignInAlt}
                            ref={inputRef}
                        />

                        <Input
                            name="password"
                            placeholder="Your password"
                            type="password"
                            icon={AiFillLock}
                        />

                        <Button type="submit"> Login</Button>
                    </form>
                </Content>
                <Background />
            </Container>
        </>
    );
};

export default Login;
