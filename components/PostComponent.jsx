import React from 'react';
import styles from './PostComponent.module.css';
import PropTypes from 'prop-types';
import Image from "next/image";

export const PostComponent = props => {
    return (
        <div className={styles.globalContainer}>
            <div className={styles.upperContainer}>
                <div className={styles.upperImageContainer}>
                    <Image src={props.image} alt={props.title} layout="fill" />
                </div>
            </div>

        </div>
    );
};

PostComponent.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
};

PostComponent.defaultProps = {
    image: "/postimage.webp",
    title: "",
}