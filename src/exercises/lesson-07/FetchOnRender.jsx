import './Lesson07Styles.css';
import { useEffect, useState, useRef } from 'react';
import { getPosts } from './api';

export default function FetchOnRender() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let dataFetched = false;
    (async () => {
      console.log('useEffect running');
      try {
        if (!dataFetched) {
          setLoading(true);
          const data = await getPosts();
          setTimeout(() => {
            setPosts(data);
            dataFetched = true;
            setLoading(false);
          }, 1000);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    })();
    return () => {
      console.log('cleanup performed');
      dataFetched = true;
    };
  }, []);
  return (
    <div className="root">
      <h1 className="heading">Fetch list of posts on render</h1>
      <div className="content">
        {loading ? (
          <p>loading posts</p>
        ) : posts?.length > 0 ? (
          posts.map((post) => {
            return (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            );
          })
        ) : error ? (
          <p>error: {error} </p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}
