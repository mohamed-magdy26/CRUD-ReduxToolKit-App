import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deletePost, updatePost } from '../store/postsSlice'

const PostItem = ({ post }) => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isEdit, setIsEdit] = useState(false)

  const editForm = () => {
    return (
      <>
        <input
          type='text'
          placeholder='enter the title'
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />
        <input
          type='text'
          placeholder='enter the description'
          onChange={(e) => {
            setDescription(e.target.value)
          }}
        />
        <button
          onClick={() => {
            dispatch(updatePost({ id: post.id, title, description }))
            setIsEdit(false)
          }}
        >
          Update
        </button>
      </>
    )
  }

  const renderPost = () => {
    return (
      <div className='post'>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <button onClick={() => setIsEdit(true)}>Edit</button>
        <button onClick={() => dispatch(deletePost({ id: post.id }))}>
          Delete
        </button>
        {isEdit && editForm()}
      </div>
    )
  }

  return <>{renderPost()}</>
}

export default PostItem
