import styles from "./InputBox.module.css"
let InputBox=({Inputitem})=>{
    return(<>
    <input type="text" placeholder="Enter your task" className={styles.inputbox} onKeyDown={Inputitem}></input>
    
    </>)
}
export default InputBox;