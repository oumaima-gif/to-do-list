import {React} from 'react'
import './style.css'
export default function Task({txt,deletf,changer,t}){
  return (
    <div>
        <input type="text" className={t.done ? 'txt':''} style={{ borderRadius: "5px",
    position: "absolute",
    display: "inlineBlock",
    fontSize:"15px",
    left:"33%",
    margin:"0"
    }} readOnly value={txt}/>
            <input type="button" style={{backgroundColor:"red",fontSize:"17px", borderRaduis:"5px",color:'white', borderColor:'rgb(114, 46, 146)',position:'absolute',left:"54%",}} onClick={deletf}  value="Delete"/>
            <input type="button"style={{backgroundColor:"green",fontSize:"17px", borderRaduis:"5px",color:'white', borderColor:'rgb(114, 46, 146)',position:'absolute',left:"60%",}} onClick={()=>changer(t.id)}  value="Done"/>
    </div>
  )
}