import React from 'react';
import {
    Row, Col, Card, CardBody,
    CardTitle, InputGroup,
    InputGroupText, InputGroupAddon, Input
} from 'reactstrap';

const TodoInput = ({ handleTextChange, handleAddTodo }) => (
    <div>
        <Row>
            <Col xs={12} sm={12} md={12} style={{ marginTop: 50 }}>
                <Card>
                    <CardBody>
                        <CardTitle>Create Todo</CardTitle>
                        <InputGroup>
                            <Input onChange={(event) => { handleTextChange(event.target.value) }} />
                            <InputGroupAddon addonType="append">
                                <InputGroupText style={{ cursor: 'pointer' }} onClick={handleAddTodo}>Create Todo</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </div>
)

export default TodoInput;