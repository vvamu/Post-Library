import React from "react";
import {useState} from "react"

import "./styles/index.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import db from "./db"
import ColorComponent from "./components/ColorComponent";

export default function App() {
  var [posts,setPosts] = useState(db());


  return (
    <div className="App">
      <PostList title="Posts" posts={posts} postEvent={setPosts} />
      <hr/>
      <PostForm postEvent={setPosts} />
      <hr/>
      <ColorComponent/>
    </div>
  );
}
