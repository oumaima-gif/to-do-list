import {React ,useState} from 'react'
import Task from './Task'
import './style.css'
import { v4 as uuidv4} from 'uuid';
export default function Formtask() {
    const [tasks,settasks]=useState([
        {id:uuidv4(),nom:'Sport',done:false},
        {id:uuidv4(),nom:'Film',done:false},
        {id:uuidv4(),nom:'Coder en react',done:false},

    ]);
    const [task,settask]=useState('');
    const addTask=()=>{
        let ntasks=[...tasks];
        let ntask={};
        ntasks.push(ntask);
        settasks(ntasks);
        settask('');
    };
    const Delete=(idp)=>{
      let ntasks=tasks.filter((t)=>{
      return t.id !== idp
      });
      settasks(ntasks);

    };
    const changer=(id)=>{
      let arr=tasks.map((e)=>{
        if(e.id===id){
          e.done!==e.done
        };
        return e
      })
      settasks(arr);
    };
   
  return ( 
    <div id='rect'>
        <h1> To Do List </h1>
        <form>
            <input className='inpt1' type="text" placeholder='Entrer Une Tache' value={task}  onChange={(e)=>{settask(e.target.value)}}/>
             <input type="button" style={{backgroundColor:"rgb(99, 99, 240)", borderRaduis:"5px",color:'white', borderColor:'rgb(114, 46, 146)',}} onClick={addTask} value="Add"/>
       </form> 
        <br/><br/> 
        <ul>
            {
                tasks.map((t)=>{
                  return  <li key={t.id}> 
                    <Task  deletf={()=>Delete(t.id)} txt={t.nom}
                    changer={changer} t={t}
                      />
                  </li> 
                })
            }



        </ul>
    </div>
  )
}
