import Item from "./Item";
let ListItem=({textbox,handclick})=>{
    
    return(<>
       <ul className="list-group">    
    {
        textbox.map((textbox)=>(<Item key={textbox} item={textbox} handclick={handclick}></Item>))
    }
      </ul>
 
    </>)
}
export default ListItem;