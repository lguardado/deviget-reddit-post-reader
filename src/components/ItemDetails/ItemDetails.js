import React from 'react'

import styles from './ItemDetails.module.css'
import Thumb from '../Thumb/Thumb'
import { ParseToTimeDistance } from '../../Utils/DateUtils'

const ItemDetails = ({ item }) => {
    return (
        <React.Fragment>
            <h3>{item.title}</h3>
            <Thumb source={item.thumbnail} classes={[styles.DetailsThumbnail]} />
            <ul className={styles.DetailsList}>
                <li>{item.num_comments} comments </li>
                <li> Created {ParseToTimeDistance(item.created)}</li>
            </ul>
        </React.Fragment>
    )
}

export default ItemDetails