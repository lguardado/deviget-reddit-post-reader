import React from 'react'

import styles from './Item.module.css'
import Thumb from '../Thumb/Thumb'
import Button from '../UI/Button/Button'

const sidebarItem = ({ item, itemClicked, itemDismissed }) => {

    let dotStyles = [styles.Dot]
    if (item.clicked) {
        dotStyles.push(styles.DotDisabled)
    }

    return (
        <div className={styles.Item}>
            <div onClick={() => itemClicked(item.id)} >
                <span className={dotStyles.join(' ')}></span>
                <p>{item.title}</p>
                <div className={styles.ImageChevron}>
                    <Thumb classes={[styles.ItemImage]} source={item.thumbnail} />
                    <div className={styles.ChevronRight}></div>

                </div>

                <br />
                {item.num_comments} comments
            </div>
            <Button onClick={() => itemDismissed(item.id)}>Dismiss</Button>
        </div>
    )
}

export default React.memo(sidebarItem)