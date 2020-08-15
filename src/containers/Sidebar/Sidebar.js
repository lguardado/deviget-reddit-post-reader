import React, { useState, useEffect } from 'react'

import axios from 'axios'
import List from '../../components/List/List'

const Sidebar = () => {
    const [data, setData] = useState([])
    const fetchPosts = () => {
    axios
        .get('https://www.reddit.com/r/mac/top.json?limit=50')
        .then(res => {
            const data = res.data.data.children
            setData(data)
        })
        .catch(e => {
            console.log('error:', e)
        });
    }

    useEffect(() => {
        fetchPosts()
    }, []);
    return (
        <List items={data} />
    )
}

export default Sidebar