import {Alert, Button, Form} from 'react-bootstrap';
import {useState} from 'react';

import css from './AdminForm.module.css';

const AdminForm = ({setTrigger}) => {
    const [error, setError] = useState();

    const submit = (e) => {
        if (e.target.email.value === 'yanaluchyk@gmail.com' && e.target.password.value === '11111111') {
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
                <Form.Control type="email" placeholder="Enter email..." name='email'/>
                <Form.Control type="password" placeholder="Enter password..." name='password'/>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                {error && <Alert variant='danger'>Wrong email or password!</Alert>}
            </Form>
        </div>
    );
};

export {AdminForm};
