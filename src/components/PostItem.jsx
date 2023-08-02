import React from "react";
import MyButton from "../UI/button/MyButton";


export default function PostItem({postEvent, post,postCounterId , posts}){
  
  const removePost = (post)=> {
    postEvent(posts.filter((x) => x.Id !== post.Id));
  }
  

      return(<div className="post">
        <div className="post_content ">
          <div className="post_name">{postCounterId}. {post.Title ?? "default"}</div>
          <div className="post_description">{post.Description}</div>
        </div>
        <div className="post_btn">
          <MyButton onClick={() => removePost(post)} >Delete</MyButton>
        </div>
      </div>);
  
}