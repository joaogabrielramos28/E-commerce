import React, { ButtonHTMLAttributes } from 'react';
import { Container } from './styles';
import { IconBaseProps } from 'react-icons';
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    icon?: React.ComponentType<IconBaseProps>;
};
const Button: React.FC<ButtonProps> = ({
    children,
    icon: Icon,
    disabled,
    ...rest
}) => {
    return (
        <Container disabled={disabled} type="button" {...rest}>
            {Icon && <Icon size={20} />}
            {children}
        </Container>
    );
};

export default Button;
