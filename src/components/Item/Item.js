import React from 'react'

import styles from './Item.module.css'
import Thumb from '../Thumb/Thumb'
import Button from '../UI/Button/Button'

const Item = ({ item, itemClicked, itemDismissed }) => {

    return (
        <div className={styles.Item} data-testid="item">
            <div onClick={() => itemClicked(item)} >
                <span className={`${styles.Dot} ${item.clicked && styles.DotDisabled}`}></span>
                <div className={styles.ItemAuthor}>{item.author}</div>
                <br />
                <div className={styles.ImageChevron}>
                    <Thumb classes={[styles.ItemImage]} source={item.thumbnail} />
                    <div className={styles.ChevronRight}></div>
                </div>
                <p> {item.title}</p>
                <br />
                <p>{item.num_comments} comments</p>
            </div>
            <Button onClick={() => itemDismissed(item.id)}>Dismiss</Button>
        </div>
    )
}

export default React.memo(Item)