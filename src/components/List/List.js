import React from 'react'

import Item from '../Item/Item'
import styles from './List.module.css'
import Button from '../UI/Button/Button'

const list = ({ items, canLoadMore, onLoadMore, loading }) => {

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
            {loading && <div class={styles.Loader}>Loading...</div>}
            <Button
                onClick={onLoadMore}
                btnType={'Default'}
                disabled={!canLoadMore || loading}>load more</Button>
        </div>
    )
}


export default list