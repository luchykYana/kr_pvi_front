import {useEffect, useState} from 'react';
import {Form} from 'react-bootstrap';

import {Images} from '../../components';
import {imageService} from '../../services';

import css from './ImageForm.module.css';

const ImagePage = () => {
    const [images, setImages] = useState([]);
    const [text, setText] = useState('');

    useEffect(() => {
        if (text === '') {
            imageService.getAll().then(value => {
                setImages(value.data);
            });
        } else {
            imageService.getAll().then(value => {
                const filteredImages = value.data.filter(image => (image.tags.filter(tag => tag.includes(text))).length > 0);

                console.log(filteredImages);

                setImages(filteredImages);
            });
        }
    }, [text]);

    const findImages = (e) => setText(e.target.value);

    return (
        <div>
            <Form onChange={findImages} className={`${css.form}`}>
                <Form.Control type="text" placeholder="Find..." id={'find'}/>
            </Form>
            <Images images={images} setText={setText}/>
        </div>
    );
};

export {ImagePage};
