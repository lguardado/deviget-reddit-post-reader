import React from 'react'

import styles from './Item.module.css'
import Thumb from '../Thumb/Thumb'

const sidebarItem = ({ item, itemClicked }) => {

    let dotStyles = [styles.Dot]
    if (item.clicked) {
        dotStyles.push(styles.DotDisabled)
    }

    return (
        <div onClick={() => itemClicked(item.id)} className={styles.Item}>
            <span className={dotStyles.join(' ')}></span>
            <p>{item.title}</p>
            <Thumb classes={[styles.ItemImage]} source={item.thumbnail}/>
                <br />
            {item.num_comments} comments
        </div>)
}

export default React.memo(sidebarItem)