import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import axios from 'axios'
import List from '../../components/List/List'
import { savePosts } from '../../store/actions'

const Sidebar = ({ posts, onSavePosts }) => {
    // const [data, setData] = useState([])
    const fetchPosts = () => {
    axios
        .get('https://www.reddit.com/r/mac/top.json?limit=50')
        .then(res => {
            debugger
            onSavePosts(res.data.data.children)
            // const data = res.data.data.children
            // setData(data)
        })
        .catch(e => {
            console.log('error:', e)
        });
    }

    useEffect(() => {
        fetchPosts()
    }, []);
    return (
        <List items={posts} />
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