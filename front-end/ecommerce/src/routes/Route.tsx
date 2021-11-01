import React from 'react';
import {
    RouteProps as RouteDomProps,
    Redirect,
    Route as RouteDom,
} from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface RouterProps extends RouteDomProps {
    isPrivate?: boolean;
    component: React.ComponentType;
}

const Route: React.FC<RouterProps> = ({
    isPrivate = false,
    component: Component,
    ...rest
}) => {
    const { user } = useAuth();
    return (
        <RouteDom
            {...rest}
            render={() => {
                return isPrivate === !!user ? (
                    <Component />
                ) : (
                    <Redirect to={{ pathname: isPrivate ? '/' : '/' }} />
                );
            }}
        />
    );
};

export default Route;
