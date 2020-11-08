import React from 'react'

const Thumb = ({ source, classes }) => {
    
    return (source && source !== 'self' ?
    <img className={classes} src={source} alt='' />:
    <div className={classes}>No Image</div>
    )
}

export default Thumb