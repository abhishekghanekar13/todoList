import styles from "./Component.module.css"
let Component=({children})=>{

    return(<>
     <div className={styles.container}>{children}</div>    
    </>)
}
export default Component;