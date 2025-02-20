import React from 'react';
import styles from './circleImage.module.css';

const CircleImage = ({ src, alt, size = 250 }) => {
    return (
        <div className={styles.circle} style={{ width: size, height: size }}>
            <img src={src} alt={alt} className={styles.image} />
        </div>
    );
};

export default CircleImage;
