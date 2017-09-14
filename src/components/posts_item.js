import React,{Component} from 'react'

const PostsItem = ({match}) => {
    return (
        <div>Item {match.params.id}</div>
    )
}

export default PostsItem