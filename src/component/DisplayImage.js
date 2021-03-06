import React from 'react';

const DispalyImage = (props) => {

    const images = props.images.map(({id, description, urls}) => {
        return <img key={id} alt={description} src={urls.regular} />;
    });
   
    return <div>{images}</div>;
}

export default DispalyImage;