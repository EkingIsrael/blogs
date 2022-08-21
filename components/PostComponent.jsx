import React from 'react';
import PropTypes from 'prop-types';
import Image from "next/image";

const PostComponent = props => {
    return (
        <div className={globalContainer}>
            <div className={upperContainer}>
                <div className={upperImageContainer}>
                    <Image src={props.image} alt={props.title} width={fill} />
                </div>
            </div>

        </div>
    );
};

PostComponent.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
};

export default MyComponent;
