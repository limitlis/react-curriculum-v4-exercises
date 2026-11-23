import { useState, useRef } from 'react';
import './Lesson07Styles.css';

import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const content = useRef();
  async function getPost() {
    if (loading) return;
    setLoading(true);
    content.current.setHTML(`
        <p>Loading post ...</p>
      `);
    try {
      const post = await getSinglePost(1);
      // artificial timeout to show loading state
      setTimeout(() => {
        setPost(post);
        content.current.setHTML(`
          <h2>${post.title}</h2>
          <p>${post.body}</p>
        `);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.error(error);
      content.current.textContent = 'Error loading post.';
      setLoading(false);
    }
  }
  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={getPost}>
        Get post
      </button>
      <div className="content" ref={content}>
        TODO: Replace me with fetched data when the <code>Get post</code> button
        is clicked
      </div>
    </div>
  );
}
