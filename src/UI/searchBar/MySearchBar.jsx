import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

import React from "react";

export default function MySearchBar({postEvent, searchEvent}) {
          return(
          <div style={{display:"flex", alignItems:"center"}}>
                    <FontAwesomeIcon icon={faSearch}
                    />
                    <input
                    onChange={e=> searchEvent(e.target.value)} />
          </div>)
}