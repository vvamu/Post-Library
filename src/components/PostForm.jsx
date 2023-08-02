import React from "react";
import { useState } from "react";

import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";


export default function PostForm({postEvent}){
          const [post,changePost] = useState({Title:'',Description:''});

          const createNew = (e)=>{
          e.preventDefault();
          postEvent(posts => [...posts, {...post, Id : Date.now()} ]);
          changePost({Title:'',Description:''});         
          }

          return(<div >
                    <h1>Create a Post</h1>
                    <form>
                              <MyInput type="text" value={post.Title} 
                              onChange={e=>changePost({...post,Title:e.target.value})} placeholder="Post Title"/>
                              <MyInput  type="text" value={post.Description} 
                              onChange={e=>changePost({...post,Description:e.target.value})} placeholder="Post Description"/>
                              <MyButton type="button" onClick={createNew}>Create</MyButton>
                    </form>
          </div>)
}