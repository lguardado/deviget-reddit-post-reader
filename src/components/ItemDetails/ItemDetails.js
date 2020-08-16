import React from 'react'

import styles from './ItemDetails.module.css'
import Thumb from '../Thumb/Thumb'

const itemDetails = ({ item }) => {
    return (
        <React.Fragment>
            <h3>{item.title}</h3>
            <Thumb source={item.thumbnail}/>
            <ul className={styles.List}>
                <li> Comments: {item.num_comments} </li>
                <li> Created: {item.created}</li>
            </ul>
        </React.Fragment>
    )
}

export default itemDetails