import React from 'react'

const sidebarItem = ({ item }) => {

    return (
    <div>
        <p>{ item.title }</p>
        {item.thumbnail && 
        <img src={item.thumbnail} alt='thumbnail'/>}
        Comments: {item.num_comments}
    </div>)
}

export default React.memo(sidebarItem)