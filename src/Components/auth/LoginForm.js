import React from 'react';
import {Field,reduxForm} from 'redux-form';

function LoginForm(props) {
    const {handleSubmit,reset} = props;

    const onsubmit = data => {
        props.logInfo(data)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <Field placeholder='enter your login' type='text' name='login' component={'input'} />
                <Field placeholder='enter your password' type='password' name='password' component={'input'} />
                <button>Log in</button>
            </form>
        </div>
    )
}

LoginForm = reduxForm({
    form:'admin'
})(LoginForm)

export default LoginForm;