import React, { useEffect, useRef, useState } from "react";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../firebase-config";
import "../Styles/Posts.css";

function Posts() {
  const [posts, setPosts] = useState([]);
  const postRef = collection(db, "posts");

  useEffect(() => {
    const queryPosts = query(postRef, orderBy("createdAt"));
    const unsubscribe = onSnapshot(queryPosts, (snapshot) => {
      let postsList = [];
      snapshot.forEach((doc) => {
        postsList.push({ ...doc.data(), id: doc.id });
      });
      setPosts(postsList);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="posts-container">
      Currently in Development
      {posts.map((post) => (
        <div className="post-item">
          <h1>{post.title}</h1>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
