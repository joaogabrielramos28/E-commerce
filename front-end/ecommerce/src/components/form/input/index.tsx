import React, {
    InputHTMLAttributes,
    RefObject,
    useEffect,
    useRef,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}
import { Container } from './styles';

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, clearError, defaultValue, registerField } =
        useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);
    return (
        <Container>
            {Icon && <Icon size={20} />}

            <input {...rest} ref={inputRef} />
        </Container>
    );
};

export default Input;
