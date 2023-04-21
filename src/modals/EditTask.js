import React, { useEffect, useState } from 'react';
import { Button , Modal ,ModalHeader , ModalBody , ModalFooter, Label } from 'reactstrap';  

const EditTask = ({modal,toggle,updateTask,taskObj, setModal}) => {
    // creating state to let parent class know when type something on 
    // create button in modal that it gets created and form cards
    const [taskName , setTaskName] = useState('');
    const [description , setDescription] = useState('');

    const handleChange = (e)=>{
        const {name,value} = e.target

        if(name === "taskName")
        {
            setTaskName(value)
        }
        else{
            setDescription(value)
        }
    }

    useEffect(()=>{
        setTaskName(taskObj.Name)
        setDescription(taskObj.Description)
    },[])
    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        updateTask(tempObj)
        setModal(false)
    }


    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}> Update-Task</ModalHeader>
                <ModalBody>
                    <form>
                        <div className='form-group'>
                            <Label>Title</Label>
                            <br/>
                            <input type='text' className='form-control' value={taskName} 
                            onChange={handleChange} name='taskName'/>
                        </div>
                        <div className='form-group'>
                            <Label>Description</Label>
                            <br/>
                            <textarea rows={5} className='form-control' value={description}
                            onChange={handleChange} name ='description' style={{"border":"2px solid #ccc"
                            ,"fontfamily" :"roboto"}}></textarea>
                        </div>
                    </form>
                </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>
                    Update
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
      </Modal>
    );
};

export default EditTask;