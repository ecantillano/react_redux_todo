import React, { Component } from 'react';
import { Container, InputGroup, Button, FormControl } from "react-bootstrap";
import { connect } from 'react-redux';
import { FaPlus } from "react-icons/fa";
import { addTodo } from '../actions/actionCreator'
import { bindActionCreators } from 'redux'

class NewTask extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todotext: '',
        }
        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    onChangeTodoText(e) {
        this.setState({
            todotext: e.target.value
        })
    }

    render() {

        return (
            <Container>   
                <InputGroup onChange={this.onChangeTodoText} value={this.state.todotext} className="mb-3">
                    <FormControl placeholder="Ingresa una nueva tarea"  />
                <InputGroup.Prepend>
                        <Button variant="outline-secondary"
                            onClick={() => {
                                this.props.addTodo(this.state.todotext); }} ><FaPlus/></Button>
                </InputGroup.Prepend>
            </InputGroup>
            </Container>
        );
    }
}

const m2p = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
}

export default connect(null, m2p)(NewTask);