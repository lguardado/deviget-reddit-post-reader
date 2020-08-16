import React from 'react'

const thumb = ({ source, classes }) => {
    if (classes && classes.length) {
        classes.join(' ')
    }
    
    return (source && source !== 'self' ?
    <img className={classes} src={source} alt='thumbnail' />:
    <div>No Image</div>
    )
}

export default React.memo(thumb)