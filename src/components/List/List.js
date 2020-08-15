import React from 'react'

import Item from '../Item/Item'
import styles from './List.module.css'

const list = ({ items }) => {

    const renderItems = () => items.map(item =>
        <Item
            key={item.data.id}
            item={item.data} />
    )
    return (
        <div className={styles.List}>
            {renderItems()}
        </div>)
}


export default list