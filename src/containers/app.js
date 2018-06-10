import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { AppHeader, TodoInput, TodoList, UpdateTodo } from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    getTodos, deleteTodo,
    updateCurrentTodoText, addTodo,
    toggleTodoModal, updateCurrentTodoId,
    updateModifiedText, updateTodo
} from '../actions';
import { Modal } from 'reactstrap';

class App extends Component {

    componentDidMount() {
        this.props.getTodos();
    }

    handleDeleteTodo = (todoId) => {
        this.props.deleteTodo(todoId);
    }

    handleTextChange = (text) => {
        this.props.updateCurrentTodoText(text);
    }

    handleAddTodo = () => {
        this.props.addTodo(this.props.text);
        this.props.getTodos();
    }

    handleUpdateTodo = (objTodo) => {
        this.props.updateCurrentTodoId(objTodo);
        this.props.toggleTodoModal();
    }

    showHideTodoModal = () => {
        this.props.toggleTodoModal();
    }

    handleModifiedTextChange = (text) => {
        this.props.updateModifiedText(text);
    }

    updateTodo = () => {
        this.props.updateTodo();
    }

    render() {
        {
            console.log(this.props.modifiedText)
        }
        return (
            <div>
                <AppHeader />
                <Container>
                    <TodoInput
                        handleTextChange={this.handleTextChange}
                        handleAddTodo={this.handleAddTodo} />
                    <TodoList
                        todos={this.props.todos}
                        handleUpdateTodo={this.handleUpdateTodo}
                        handleDeleteTodo={this.handleDeleteTodo} />
                    {this.props.currentTodo &&
                        <UpdateTodo
                            currentTodo={this.props.currentTodo}
                            handleModifiedTextChange={this.handleModifiedTextChange}
                            showUpdateTodoModal={this.props.showUpdateTodoModal}
                            showHideTodoModal={this.showHideTodoModal}
                            updateTodo={this.updateTodo} />
                    }
                </Container>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos.todos,
        text: state.todos.currentTodoText,
        showUpdateTodoModal: state.todos.showUpdateTodoModal,
        currentTodo: state.todos.currentTodo.todo,
        modifiedText: state.todos.modifiedText
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getTodos: getTodos,
        deleteTodo: deleteTodo,
        updateCurrentTodoText: updateCurrentTodoText,
        addTodo: addTodo,
        toggleTodoModal: toggleTodoModal,
        updateCurrentTodoId: updateCurrentTodoId,
        updateModifiedText: updateModifiedText,
        updateTodo: updateTodo
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);