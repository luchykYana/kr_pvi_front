import {Alert, Button, Form} from 'react-bootstrap';
import {useState} from 'react';

import css from './AdminForm.module.css';

const AdminForm = ({setTrigger}) => {
    const [error, setError] = useState();

    const submit = (e) => {
        if (e.target.email.value === 'yanaluchyk@gmail.com' && e.target.password.value === '11111111' && e.target.passwordAgain.value === '11111111') {
            setError(null);
            setTrigger(true);
        } else {
            setError(true);
        }

        e.preventDefault();
    }

    return (
        <div>
            <Form onSubmit={submit} className={`${css.form}`}>
                <div className={`${css.styleDiv}`}>Email:</div>
                <Form.Control type="email" name='email'/>

                <div className={`${css.styleDiv}`}>Password:</div>
                <Form.Control type="password" name='password'/>

                <div className={`${css.styleDiv}`}>Repeat password:</div>
                <Form.Control type="password" name='passwordAgain'/>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                {error && <Alert variant='danger' className={`${css.alert}`}>Wrong email or password!</Alert>}
            </Form>
        </div>
    );
};

export {AdminForm};
