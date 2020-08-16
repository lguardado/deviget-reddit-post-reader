import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import axios from 'axios'
import List from '../../components/List/List'
import { savePosts, itemClicked, itemDismissed, clearPosts } from '../../store/actions'

const Sidebar = ({
    posts,
    onSavePosts,
    onItemClicked,
    onItemDismissed,
    onDismissAll }) => {

    const POSTS_LIMIT = 10
    const PAGES_LIMIT = 5

    // Redit's API uses the last item name to get the rest of the items from there.
    const [lastItem, setLastItem] = useState('')
    const [hasMore, setHasMore] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState({ errorStatus: false, errorMessage: '' })

    const fetchPosts = () => {
        setLoading(true)
        setError({ errorStatus: false })
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
                setLoading(false)
            })
            .catch(e => {
                setLoading(false)
                setError({ errorStatus: true, errorMessage: e.message })
            })
    }

    useEffect(() => {
        fetchPosts()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    let renderList = () => (
        <List
            items={posts}
            canLoadMore={hasMore}
            onLoadMore={fetchPosts}
            onItemDismissed={onItemDismissed}
            onDismissAll={onDismissAll}
            loading={loading}
            handleItemClicked={(item) => onItemClicked(item)}
            handleItemDismissed={(item) => onItemDismissed(item)}
        />
    )

    if (error.errorStatus === true) {
        renderList = () => (<h3>Error retreiving items: {error.errorMessage}</h3>)
    }

    return (
        <React.Fragment>
            {renderList()}
        </React.Fragment>
    )
}


const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSavePosts: (posts) => dispatch(savePosts(posts)),
        onItemClicked: (item) => dispatch(itemClicked(item)),
        onItemDismissed: (item) => dispatch(itemDismissed(item)),
        onDismissAll: (item) => dispatch(clearPosts(item)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)