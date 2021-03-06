import React from 'react';

import styles from './Button.module.css';

const Button = ({ children, disabled, onClick, btnType = 'Default'}) => (
    <button
        disabled={disabled}
        className={`${styles.Button} ${styles[btnType]}`}
        onClick={onClick}>{children}</button>
);

export default Button