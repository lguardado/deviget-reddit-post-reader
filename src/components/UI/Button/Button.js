import React from 'react';

import styles from './Button.module.css';

const button = ({ children, disabled, onClick, btnType}) => (
    <button
        disabled={disabled}
        className={[styles.Button, styles[btnType]].join(' ')}
        onClick={onClick}>{children}</button>
);

export default button;