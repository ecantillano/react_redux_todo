import React from 'react';
import { connect } from 'react-redux';
import { Container, ListGroup, Button, Card, ButtonGroup, Form  } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";
// import PropTypes from 'prop-types';
import {
    deleteTodo,
    toggleTodo,
    setVisibilityFilter
} from "../actions/actionCreator";

import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from "../actions/actionsTypes";
import { bindActionCreators } from "redux";


class TodoList extends React.Component {

    render() {

        return (
            <Container>
                <ButtonGroup aria-label="Filtrar lista">
                    <Button className={this.props.visibilityFilter === SHOW_ACTIVE ? 'active' : ''}
                        onClick={() => this.props.setVisibilityFilter(SHOW_ACTIVE)} variant="secondary">Pendientes</Button>
                    <Button className={this.props.visibilityFilter === SHOW_COMPLETED ? 'active' : ''} 
                    variant="secondary"
                        onClick={() => this.props.setVisibilityFilter(SHOW_COMPLETED)}
                        >Completadas</Button>
                    <Button className={this.props.visibilityFilter === SHOW_ALL ? 'active' : ''} 
                    variant="secondary"
                        onClick={() => this.props.setVisibilityFilter(SHOW_ALL)} >Todas</Button>
                </ButtonGroup>

                {this.props.todos.length !== 0 ? ( 
                    <Card>
                        <ListGroup>
                            {this.props.todos.map(todo => (
                                <ListGroup.Item 
                                    key={todo.id}
                                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                                >
                                    <Form.Check style={{ position: 'absolute', left: 30}}
                                        onClick={() => this.props.toggleTodo(todo.id)}/>

                                    {todo.text}
                                    <Button onClick={() => this.props.deleteTodo(todo.id)} style={{ position: 'absolute', right: 30, padding: 0 }} name="removeTask" variant="red" size="sm"><FaRegTrashAlt /></Button>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    </Card>
                ): (<h1> Lista vacía</h1> )}{" "}
            </Container>
        );
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case SHOW_ALL:
            return todos;
        case SHOW_COMPLETED:
            return todos.filter(t => t.completed);
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        default:
            throw new Error("Filtro erróneo: " + filter);
    }
};

const s2p = state => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
};

const d2p = dispatch => {
    return bindActionCreators(
        {
            deleteTodo,
            toggleTodo,
            setVisibilityFilter
        },
        dispatch
    );
};

export default connect(s2p, d2p)(TodoList);