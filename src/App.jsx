import Heading from './components/Heading'
import InputBox from './components/InputBox';
import "bootstrap/dist/css/bootstrap.min.css";
import ListItem from './components/ListItem';
import Component from './Component';
import ErrorMassage from './ErrorMassage';
import './App.css'
import { useState } from 'react';

function App() {
  
  let [itemlist,setitemlist]= useState([])
  let sand=(event)=>{
    console.log(event);
console.log(event.target.value)
if(event.key==="Enter"){
  let newitemlist=event.target.value;
  let newlist=[...itemlist,newitemlist];
  setitemlist(newlist);
  event.target.value="";
}
  }
  let handclick=(itemclicked)=>{
  let newitemlist=itemlist.filter(item=>item!==itemclicked);
   setitemlist(newitemlist);
  console.log(newitemlist);       
  
    console.log(`${itemclicked} the clicked`);
    
  }
  
  return(<>
  <Component>
   <Heading></Heading>
  <InputBox Inputitem={sand}></InputBox>
  <ErrorMassage textbox={itemlist}></ErrorMassage>
  <ListItem textbox={itemlist} handclick={handclick}></ListItem>
  </Component>
  
  </>)
}
export default App;