import React, {
    InputHTMLAttributes,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    icon?: React.ComponentType<IconBaseProps>;
}
import { Container } from './styles';

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, clearError, defaultValue, error, registerField } =
        useField(name);
    const handleInputBlur = useCallback(() => {
        setIsFocused(false);

        setIsFilled(!!inputRef.current?.value);
    }, []);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);
    return (
        <Container isFilled={isFilled} isFocused={isFocused}>
            {Icon && <Icon size={20} />}

            <input
                defaultValue={defaultValue}
                {...rest}
                ref={inputRef}
                onBlur={handleInputBlur}
                onFocus={() => setIsFocused(true)}
            />
            {error}
        </Container>
    );
};

export default Input;
