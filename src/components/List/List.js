import React from 'react'

import Item from '../Item/Item'
import styles from './List.module.css'
import Button from '../UI/Button/Button'

const list = ({
    items,
    canLoadMore,
    onLoadMore,
    loading,
    handleItemClicked
}) => {

    const renderItems = () => items.map(item =>
        <Item
            key={item.data.id}
            item={item.data}
            itemClicked={handleItemClicked}
        />
    )
    return (
        <div className={styles.ListWrapper}>
            <div className={styles.List}>
                {renderItems()}
            </div>
            {loading && <div className={styles.Loader}>Loading...</div>}
            <Button
                onClick={onLoadMore}
                disabled={!canLoadMore || loading}>load more</Button>
        </div>
    )
}


export default list