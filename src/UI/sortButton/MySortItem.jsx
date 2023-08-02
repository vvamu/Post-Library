import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

import React from "react";


export default function MySortItem({sort,setSort,selectedSortOrder,posts,postEvent}) {
    
    
    const toggleSortOrder = (sortValue) => {
        const newOrder = sort.order === "asc" ? "desc" : "asc";
        setSort({ property: sortValue, order: newOrder });
      
        const sortedPosts = [...posts].sort((a, b) => {
          if (sortValue === "Id") {
            return newOrder === "asc" ? a[sortValue] - b[sortValue] : b[sortValue] - a[sortValue];
          } else {
            return newOrder === "asc" ? a[sortValue].localeCompare(b[sortValue]) : b[sortValue].localeCompare(a[sortValue]);
          }
        });
      
        postEvent(sortedPosts);
      };
      const sortItems = [
        {
          name: "Sort Default",
          sortFunction: () => toggleSortOrder("Id"),
        },
        {
          name: "Sort by Title",
          sortFunction: () => toggleSortOrder("Title"),
        },
        {
          name: "Sort by Description",
          sortFunction: () => toggleSortOrder("Description"),
        },
      ];
    

          return(
            <div className="dropdown" >
             <button style={{alignItems:"center", display:"flex", backgroundColor:"#5959ca"}} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <FontAwesomeIcon icon={faSort} />
                      {selectedSortOrder}
             </button>

          {sortItems.length !== 0 
                    ?
                    <ul className="dropdown-menu " style={{padding:"0pt" }}>
                        {sortItems.map((sortItem) => 

                            <li key={sortItem.name}  className="dropdown-item" style={{margin:"0pt"}}
                            onClick={sortItem.sortFunction}>
                                    {sortItem.name}
                        </li>
                        )}
                    </ul>

                    :
                    <div></div>
          }
      </div>              
)
}