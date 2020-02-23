import axios from 'axios';

const Post = ({comments,id}) => {
  return (
    <div>
      <h1>Comments for post #{id}</h1>
      {comments.map((comment, i) => (
        <li key={comment.id}>{i+1}) {comment.email}</li>
      ))}
    </div>
  )
}

Post.getInitialProps = async ({query}) => {
  const id = Number(query.id)
  const res = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
  return {...query, comments: res.data};
}
  

export default Post;