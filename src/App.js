import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {todos} from './todos';
import TareasForm from "./components/TareasForm";
import Swal from "sweetalert2";
class App extends Component {
    constructor() {
        super();
        this.state = {
            todos
        };
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(todo) {
        Swal.fire({
            title: 'Tarea',
            text: "Tarea Agregada",
            icon: 'success'
        })
        this.setState({
            todos: [...this.state.todos, todo]
        });
    }

    remove(index) {
        Swal.fire({
            title: 'Estas Seguro?',
            text: "No podras revertir este cambio :)",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si'
        }).then((result) => {
            if (result.value) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                this.setState({
                    todos: this.state.todos.filter((e, i) => {
                        return i !== index;
                    })
                })
            }
        });
    }

    render() {
        const todos = this.state.todos.map((todo, i) => {
            return (
                <div className='col-md-4' key={i}>
                    <div className='card mt-4'>
                        <div className='card-header'>
                            <h3>{todo.title}</h3>
                            <span className='badge badge-pill badge-danger ml-2'>
                                {todo.priority}
                            </span>
                        </div>
                        <div className='card-body'>
                            <p>{todo.description}</p>
                            <p>{todo.responsible}</p>
                        </div>
                        <div className='card-footer'>
                            <button
                                className='btn btn-danger'
                                onClick={this.remove.bind(this, i)}>
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            )
        });
        return (
            <div className="App">
                <nav className='navbar navbar-dark bg-dark'>
                    <a href='/' className='text-white'>
                        App de Tareas
                        <span className='badge badge-pill badge-light ml-2'>
                            {this.state.todos.length}
                        </span>
                    </a>
                </nav>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xs-12 col-md-4'>
                            <img src={logo} className="App-logo" alt="logo"/>
                            <TareasForm onAddTodo={this.handleAdd}/>
                        </div>
                        <div className='col-xs-12 col-md-8'>
                            <div className='row mt-4'>
                                {todos}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
