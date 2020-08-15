import React from 'react'

import styles from './Item.module.css'

const sidebarItem = ({ item, itemClicked }) => {

    let dotStyles = [styles.Dot]
    if (item.clicked) {
        dotStyles.push(styles.DotDisabled)
    }

    return (
        <div onClick={() => itemClicked(item.id)} className={styles.Item}>
            <span className={dotStyles.join(' ')}></span>
            <p>{item.title}</p>
            {item.thumbnail &&
                <img className={styles.ItemImage} src={item.thumbnail} alt='thumbnail' />}
        {item.num_comments} comments
        </div>)
}

export default React.memo(sidebarItem)