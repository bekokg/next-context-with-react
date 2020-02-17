import axios from 'axios';

const Index = ({posts}) => {
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

Index.getInitialProps = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    return { posts: response.data}
  }

export default Index;