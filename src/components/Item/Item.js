import React from 'react'

import styles from './Item.module.css'

const sidebarItem = ({ item }) => {

    return (
    <div className={styles.Item}>
        <span className={styles.Dot}></span>
        <p>{ item.title }</p>
        {item.thumbnail && 
        <img className={styles.ItemImage} src={item.thumbnail} alt='thumbnail'/>}
        Comments: {item.num_comments}
    </div>)
}

export default React.memo(sidebarItem)