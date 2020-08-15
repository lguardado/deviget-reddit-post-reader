import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import axios from 'axios'
import List from '../../components/List/List'
import { savePosts } from '../../store/actions'

const Sidebar = ({ posts, onSavePosts }) => {
    const POSTS_LIMIT = 10
    const PAGES_LIMIT = 5

    // Redit's API uses the last item name to get the rest of the items from there.
    const [lastItem, setLastItem] = useState('')
    const [hasMore, setHasMore] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const fetchPosts = () => {
        axios
            .get(
                `https://www.reddit.com/r/mac/top.json?limit=${POSTS_LIMIT}&after=${lastItem}`
            )
            .then(res => {
                const data = res.data.data.children
                setLastItem(data[data.length - 1].data.name)
                onSavePosts(res.data.data.children)
                setCurrentPage(currentPage => currentPage + 1)
                setHasMore(currentPage < PAGES_LIMIT)
            })
            .catch(e => {
                console.log('error:', e)
            });
    }

    useEffect(() => {
        fetchPosts()
    }, []);
    return (
        <List
            items={posts}
            canLoadMore={hasMore}
            onLoadMore={fetchPosts} />
    )
}


const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSavePosts: (posts) => dispatch(savePosts(posts))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)