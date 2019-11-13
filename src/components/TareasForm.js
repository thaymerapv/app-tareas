import React, {Component} from 'react';

class TareasForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            responsible: '',
            description: '',
            priority: 'low'
        };
        this.handleImput = this.handleImput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleImput(e) {
        const {value, name} = e.target;
        this.setState({
            [name]: value
        });
        console.log(this.state)
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
    }
    render() {
        return (
            <div className='card'>
                <form className='card-body' onSubmit={this.handleSubmit}>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='title'
                            onChange={this.handleImput}
                            className='form-control'
                            placeholder='Titulo'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='responsible'
                            className='form-control'
                            placeholder='Responsable'
                            onChange={this.handleImput}
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            name='description'
                            className='form-control'
                            placeholder='Descriptcion'
                            onChange={this.handleImput}
                        />
                    </div>
                    <div className='form-group'>
                        <select
                            name='priority'
                            className='form-control'
                            onChange={this.handleImput}>
                            <option>low</option>
                            <option>Medium</option>
                            <option>high</option>
                        </select>
                    </div>
                    <button type='submit' className='btn btn-primary'>
                        crear
                    </button>
                </form>
            </div>
        )
    }
}

export default TareasForm;
