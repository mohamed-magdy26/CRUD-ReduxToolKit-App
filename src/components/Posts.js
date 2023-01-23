import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPost } from '../store/postsSlice'
import PostItem from './PostItem'
const Posts = () => {
  // * input states
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  //* using react-redux hooks (useDispatch and useSelector)
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.items)

  //* add the post (checking if input is not empty then dispatch the action, resetting the input field)
  const addThePost = () => {
    if (title && description) {
      dispatch(addPost({ id: Math.random(), title, description }))
      setTitle('')
      setDescription('')
    }
  }
  //* mapping through posts state to return every postItem component which contain the post
  const renderPostsList = () => {
    return posts.map((post) => <PostItem key={post.id} post={post} />)
  }
  return (
    <div className='app-container'>
      <div className='form-container'>
        <input
          type='text'
          id='title'
          placeholder='Enter the title'
          onChange={(e) => setTitle(e.target.value)} //* lisenting to input change to set the title with the input value
          value={title}
        />
        <input
          type='text'
          id='description'
          placeholder='Enter the description'
          onChange={(e) => setDescription(e.target.value)} //* lisenting to input change to set the description with the input value
          value={description}
        />
        <button
          onClick={() => addThePost()} //* lisenting to input click to fire addThePost func
        >
          Add Post
        </button>
      </div>
      <div className='posts'>{renderPostsList()}</div>
    </div>
  )
}

export default Posts
