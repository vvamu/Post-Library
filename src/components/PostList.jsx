import React from "react";
import { useState } from "react";
import { useMemo }  from "react"
import PostItem from "./PostItem";
import MySortItem from "../UI/sortButton/MySortItem";
import MySearchBar from "../UI/searchBar/MySearchBar";

export default function PostList({title,posts,postEvent}){   


const [sort, setSort] = useState({ property: "Id", order: "asc" });


const [searchValue,searchEvent] = useState("");

const searchPost = useMemo((e) =>{

  console.log(posts);

  return posts.filter((post) => {
    const lowerSearchValue = searchValue.toLowerCase();
    return (
      post.Id.toString().includes(lowerSearchValue) ||
      post.Title.toLowerCase().includes(lowerSearchValue) ||
      post.Description.toLowerCase().includes(lowerSearchValue)
    );
  });

},[posts,searchValue])

return(
<div>
  <h1 style={{textAlign:"center"}}>
  {title}
  </h1>
  <div style={{display:"flex"}}>
    <MySortItem 
    setSort={setSort}
    posts={posts}
    sort={sort}
    postEvent={postEvent}
    selectedSortOrder={sort.property} />
    <MySearchBar postEvent={postEvent}
    searchEvent={searchEvent} 
    
    />
  </div>
  <div className="Posts" style={{margin:0}}>
    {searchPost.length !== 0
      ?
      searchPost.map((post,index)=> 
        <PostItem post={post} postCounterId={index} postEvent={postEvent} key={post.Id} posts={posts} />)
      :
      <div style={{textAlign:"center"}}>Empty post`s list</div>
    }
  </div>
</div>);
}