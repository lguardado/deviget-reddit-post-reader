import React from 'react'

const Thumb = ({ source, classes }) => {
    if (classes && classes.length) {
        classes.join(' ')
    }
    
    return (source && source !== 'self' ?
    <img className={classes} src={source} alt='thumbnail' />:
    <div className={classes} >No Image</div>
    )
}

export default React.memo(Thumb)