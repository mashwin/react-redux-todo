import React from 'react';
import {
    Row, Col, Card, CardBody
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/fontawesome-free-solid'

const TodoList = ({ todos, handleUpdateTodo, handleDeleteTodo }) => (
    <Row>
        <Col xs={12} sm={12} md={12} style={{ marginTop: 5 }}>
            {todos.map((todo, index) => (
                <Card key={index} style={{ marginTop: '10px' }}>
                    <CardBody>
                        <Row>
                            <Col xs={10} sm={10} md={10}>{todo.text}</Col>
                            <Col xs={1} sm={1} md={1}>
                                <FontAwesomeIcon
                                    style={{ 'cursor': 'pointer' }}
                                    onClick={() => {
                                        handleUpdateTodo({ todo })
                                    }}
                                    icon={faEdit} />
                            </Col>
                            <Col xs={1} sm={1} md={1}>
                                <FontAwesomeIcon
                                    style={{ 'cursor': 'pointer' }}
                                    onClick={() => {
                                        handleDeleteTodo(todo.id)
                                    }}
                                    icon={faTrash} />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            ))
            }
        </Col>
    </Row>
)

export default TodoList;