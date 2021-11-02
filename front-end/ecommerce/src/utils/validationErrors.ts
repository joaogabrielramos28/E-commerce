import { ValidationError } from 'yup';
import ToastFunction from './toast';
interface Errors {
    [key: string]: string;
}

export default function validationErrors(err: ValidationError): void {
    err.inner.forEach((error) => {
        ToastFunction(`${error.message}`, 'error');
    });
}
