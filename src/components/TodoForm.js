import React from 'react';
import "./TodoForm.css";



class TodoForm extends React.Component {
  constructor () {
    super();
    this.state = {
      title: '',
      description: '',
      tags:[]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddTodo(this.state);
    this.setState({
      title: '',
      description: '',
      tags:[]
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }






  render() {
    return (
      <div id="cuerpoform" className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
          <h2 id="titulocrearnota">Crear nueva nota</h2>
            <input
              type="text"
              name="title"
              className="form-control"
              value={this.state.title}
              onChange={this.handleInputChange}
              placeholder="T&iacute;tulo"
              required
              />
          </div>
   
          <div className="form-group">
            <textarea
              type="text"
              name="description"
              className="form-control"
              value={this.state.description}
              onChange={this.handleInputChange}
              placeholder="Descripci&oacute;n"
              id="textarea"
              required
              ></textarea>
          </div>
         
        
     
          <button id="botonguardar" type="submit" className="btn btn-primary">
            Guardar
          </button>
        </form>
      </div>
    )
  }

}

export default TodoForm;
