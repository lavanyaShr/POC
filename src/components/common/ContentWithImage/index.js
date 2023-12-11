// components/ContentWithImage.js
import React from 'react';

const ContentWithImage = ({ content_with_image,imageDetails }) => {
    const {
        content_title,
        content,
        container_type,
        background_color,
        title_color,
        content_color,
    } = content_with_image;
    console.log('semi',imageDetails)
    const imageUrl = imageDetails && imageDetails.source_url;
console.log(imageUrl)

    return (
        <div style={{ backgroundColor: background_color, color: title_color }}>
            <h2>{content_title}</h2>
            <p style={{ color: content_color }}>{content}</p>
            {imageUrl && <img style={{ maxHeight: '400px' }} src={imageUrl} alt="Content Image" />}
        </div>
    );
};

export default ContentWithImage;

