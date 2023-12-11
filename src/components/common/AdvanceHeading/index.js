// components/AdvanceHeading.js
import React from 'react';

const AdvanceHeading = ({ advance_heading }) => {
    const {
        heading_title,
        heading_prefix,
        heading_suffix,
        container_type,
        module_background_color,
        background_image,
        heading_color,
        prefix_color,
    } = advance_heading;

    return (
        <div style={{ backgroundColor: module_background_color, color: heading_color }}>
            <h4>{heading_prefix} {heading_title} {heading_suffix}</h4>
        </div>
    );
};

export default AdvanceHeading;
