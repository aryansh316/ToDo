import React, { useState } from 'react';
import { Button , Modal ,ModalHeader , ModalBody , ModalFooter, Label } from 'reactstrap';  

const CreateTask = ({modal,toggle,save}) => {
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

    const handleSave = (e)=>{
        let taskObj = {}
        taskObj["Name"] = taskName
        taskObj["Description"] = description
        save(taskObj);
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}> Create-Task</ModalHeader>
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
                            onChange={handleChange} name ='description' ></textarea>
                        </div>
                    </form>
                </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
      </Modal>
    );
};

export default CreateTask;