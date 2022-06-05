import css from './Image.module.css';

const Image = ({image, setText}) => {

    const putTag = (e) => {
        const value = e.target.innerText.replace('#', '');

        setText(value);

        document.getElementById('find').value = value;
        window.scroll(0, 0);
    }

    return (
        <div className={`${css.card}`}>
            <img src={image?.image} alt={image?.tags[0]} width='400px'/>
            {image?.tags.map(tag => <button onClick={putTag}>{tag}</button>)}
        </div>
    );
};

export {Image};
