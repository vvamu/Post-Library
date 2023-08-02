import React from "react";
import classes from "./MyInput.module.css"


export default function MyInput({children,...props}) {
          return(
          <div className={classes.inputDiv}>
                    <input {...props} className={classes.myInput}  type="text">{children}</input>
          </div>)
}
