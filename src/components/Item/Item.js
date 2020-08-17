import React from 'react'

import styles from './Item.module.css'
import Thumb from '../Thumb/Thumb'
import Button from '../UI/Button/Button'

const Item = ({ item, itemClicked, itemDismissed }) => {

    let dotStyles = [styles.Dot]
    if (item.clicked) {
        dotStyles.push(styles.DotDisabled)
    }

    return (
        <div className={styles.Item}>
            <div onClick={() => itemClicked(item.id)} >
                <span className={dotStyles.join(' ')}></span>
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