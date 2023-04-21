import React, { useState } from 'react';
import EditTask from '../modals/EditTask';

const Card = ({taskObj,index,deleteTask,updateListArray}) => {

    const [modal,setModal] = useState(false)
    
    const handleDelete = () => {
        deleteTask(index)
    }
    const updateTask =(obj)=>{
        updateListArray(obj,index)
    }

    const toggle = ()=>{
        setModal(!modal)
    }

    return (
        <div className="card-wrapper mr-5">
            <div className="card-top" style={{"backgroundColor":""}}>
                <div className="task-holder">
                    <span type="text" className="card-header" style={{"backgroundColor":"#ced4da" , "borderRadius":"10px" , "marginTop":"10px" , "marginBottom":"10px", "height": "30px" , "display":"list-item"}}>
                   {taskObj.Name}</span>
                    <p className='mt-4'>{taskObj.Description}</p>

                    <div style={{"position":"absolute" , "right":"20px" , "marginTop":"150px" }}>
                        <i className="far fa-edit mr-5" style={{"color":"#5DC250","cursor":"pointer"}} onClick={()=> setModal(true)}></i>
                        
                        <i className="fas fa-trash-alt " style={{"color":"#5DC250" , "cursor":"pointer"}}  onClick={handleDelete}></i>
                    </div>

                </div>

            </div>
            <EditTask modal={modal} setModal={setModal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>

        </div>
    );
};

export default Card;