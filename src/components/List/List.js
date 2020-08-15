import React from 'react'

import Item from '../Item/Item'
import styles from './List.module.css'

const list = ({ items, canLoadMore, onLoadMore }) => {

    const renderItems = () => items.map(item =>
        <Item
            key={item.data.id}
            item={item.data} />
    )
    return (
        <div>
            <div className={styles.List}>
                {renderItems()}
            </div>
            {canLoadMore && <button onClick={onLoadMore}>load more</button>}
        </div>
    )
}


export default list