import React from 'react';
import {
    Button, Modal,
    ModalHeader, ModalBody,
    ModalFooter, Input
} from 'reactstrap';

const UpdateTodo = ({ currentTodo, handleModifiedTextChange, showUpdateTodoModal, showHideTodoModal, updateTodo }) => (
    <div>
        <Modal isOpen={showUpdateTodoModal} toggle={showHideTodoModal}>
            <ModalHeader toggle={showHideTodoModal}>Update Todo</ModalHeader>
            <ModalBody>
                <Input onChange={(event) => handleModifiedTextChange(event.target.value)} defaultValue={currentTodo.text} />
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={updateTodo}>Update</Button>{' '}
                <Button color="secondary" onClick={showHideTodoModal}>Cancel</Button>
            </ModalFooter>
        </Modal>
    </div>
)

export default UpdateTodo;