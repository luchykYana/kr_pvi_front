import {Image} from '../Image/Image';

import css from './Images.module.css';

const Images = ({images, setText}) => {
    return (
        <div className={`${css.images}`}>
            {images.map(image => <Image image={image} key={image.image} setText={setText}/>)}
        </div>
    );
};

export {Images};
