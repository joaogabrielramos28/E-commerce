import React, { InputHTMLAttributes, RefObject } from 'react';
import { IconBaseProps } from 'react-icons';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    icon?: React.ComponentType<IconBaseProps>;
    ref?: React.MutableRefObject<null>;
}
import { Container } from './styles';

const Input: React.FC<InputProps> = ({ icon: Icon, ...rest }) => (
    <Container>
        {Icon && <Icon size={20} />}

        <input {...rest} />
    </Container>
);

export default Input;
