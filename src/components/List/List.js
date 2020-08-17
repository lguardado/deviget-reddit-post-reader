import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Item from '../Item/Item'
import styles from './List.module.css'
import './List.css'
import Button from '../UI/Button/Button'

const List = ({
    items,
    canLoadMore,
    onLoadMore,
    onDismissAll,
    loading,
    handleItemClicked,
    handleItemDismissed
}) => {

    const renderItems = () => items.map(item => {
        return (
            <CSSTransition
                key={item.data.id}
                timeout={500}
                classNames='item'
            >
                <Item
                    item={item.data}
                    itemClicked={handleItemClicked}
                    itemDismissed={handleItemDismissed}
                />
            </CSSTransition>
        )
    })

    return (
        <div className={styles.ListWrapper}>
            <h3>Reddit posts</h3>
            <div className={styles.List}>
                <TransitionGroup className='post' >
                    {renderItems()}
                </TransitionGroup>
            </div>
            {loading && <div className={styles.Loader}>Loading...</div>}
            <Button
                onClick={onDismissAll}
                disabled={loading || !items.length}>Dismiss all</Button>
            <Button
                onClick={onLoadMore}
                disabled={!canLoadMore || loading}>load more</Button>
        </div>
    )
}


export default List