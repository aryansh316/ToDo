import React, { useState , useEffect} from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const ToDoList = () => {
    console.log(taskObj)

    
    const [modal , setModal] = useState(false);
    const [taskList,setTaskList] = useState([]);
    const [reload,setReload] = useState([]);

    useEffect(()=>{
        let arr = localStorage.getItem('taskList')
        
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])

    const deleteTask = (index) => {
        
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setReload([reload,index])
    }

    const updateListArray=(obj,index)=>{
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList" ,JSON.stringify(tempList))
        setTaskList(tempList)  
        setReload([reload,obj])
        
    }

    const toggle = ()=>{
        setModal(!modal); 
    }

    const saveTask = (taskObj) =>{
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList" , JSON.stringify(tempList))
        setModal(false)
        setTaskList(taskList)
    }
    console.log(taskList.sort((a,b)=>b.Name-a.Name),"opo")

    return (
        <>
            <div className='header text-center'>
                <h2>Todo List</h2>
                <button className='btn btn-primary mg-2' onClick={()=> setModal(true)}>Create Task</button>
            </div>
            <div className='task-container'>
                {taskList && taskList.sort((a,b)=>b.Name-a.Name).map((obj,index)=><Card key={index } taskObj = {obj} index={index} 
                deleteTask={deleteTask} updateListArray={updateListArray}/>)}
            </div>      
            <CreateTask toggle={toggle} modal={modal} save = {saveTask}/>
            
        </>
    );
};

export default ToDoList;