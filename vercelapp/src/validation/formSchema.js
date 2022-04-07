import * as yup from 'yup';

const schema = yup.object().shape({

    username: yup 
            .string()
            .required('Username is required')
            .trim()
            .min(3, 'Username must be at least 3 characters long'),
    email: yup
            .string()
            .email('Must be a valid email address')
            .required('Email is required'),
    password: yup
            .string()
            .required('Password is required')
            .min(5, 'Password must be at least 5 characters long'),
    tos: yup
            .boolean()
            .oneOf([true],'Must accept the terms of service to submit')

})

export default schema;
