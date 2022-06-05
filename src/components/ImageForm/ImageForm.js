import {Alert, Button, Form} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {joiResolver} from '@hookform/resolvers/joi';
import {useState} from 'react';

import {ImageValidator} from '../../validators';
import {imageService} from '../../services';

import css from './ImageForm.module.css';

const ImageForm = () => {
    const [done, setDone] = useState();

    const {handleSubmit, register, reset, formState: {errors}} = useForm({
        resolver: joiResolver(ImageValidator),
        mode: 'onTouched'
    });

    const submit = (info) => {
        const tags = [];

        for (const infoKey in info) {
            if (infoKey === 'image')
                continue;

            if (info[infoKey] !== ' ')
                tags.push(info[infoKey]);
        }

        imageService.createImage({image: info.image, tags}).then(value => console.log(value));

        setDone(true);
        reset();
    }

    return (
        <Form onSubmit={handleSubmit(submit)} className={`${css.form}`}>
            <div className={`${css.title}`}>Add new image:</div>
            <Form.Group className={`${css.dFlex} ${css.inputs}`}>
                <Form.Label>URL:</Form.Label>
                <Form.Control type="text" {...register('image')}/>
            </Form.Group>
            {errors.image && <Alert variant={'warning'}>{errors.image.message}</Alert>}

            <Form.Group className={`${css.dFlex} ${css.inputs}`}>
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" {...register('tag1')}/>
            </Form.Group>
            {errors.tag1 && <Alert variant={'warning'}>{errors.tag1.message}</Alert>}

            <Form.Group className={`${css.dFlex} ${css.inputs}`}>
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" {...register('tag2')} defaultValue={' '}/>
            </Form.Group>

            <Form.Group className={`${css.dFlex} ${css.inputs}`}>
                <Form.Label>Name: </Form.Label>
                <Form.Control type="text" {...register('tag3')} defaultValue={' '}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            {done && <Alert variant={'success'} className={`${css.alert}`}>Image successfully added</Alert>}
        </Form>
    );
};

export {ImageForm};
