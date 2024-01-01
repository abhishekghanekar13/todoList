import styles from "./ErrorMassage.module.css"
let ErrorMassage=({textbox})=>{
    return(<>
    <div > {textbox.length===0?<p className={styles.box}>Please Enter your Task</p>:null}
         </div>
    
    
    </>)
}
export default ErrorMassage;