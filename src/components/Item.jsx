import { useState } from "react";
import styles from "./Item.module.css"
let Item=({item,handclick})=>{
  //let [deleteitem,setdeleteitem]=useState([])
  
    return(<>

  <li className={`${styles["box"]} list-group-item`}>{item}<button className={`${styles["btn"]} btn btn-danger`}
  onClick={()=>handclick(item)}>Delete</button></li>
   </>)
}
export default Item;