import React from 'react';
import './App.css';
//importo el componente formulario
import TodoForm from './components/TodoForm';


//importo las notas que escribí en el json
import { todos } from './todos.json';


class App extends React.Component {
  //primero el constructor
  constructor() {
    super();
    //le paso las notas a través del estado
    this.state = {
      todos
    }

    //como funciona esto? por qué va en el contructor?
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  //como funciona esto que es para remover las notas? A que refiere index?
  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  //como funciona esto que es para agregar notas?
  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

//renderizo
  render() {
    //recorro con map las notas existentes
    const todos = this.state.todos.map((todo, i) => {
      return (
        //para que sean diferentes tiene que pasar la key
        <div id="formanota" className="col-md-4" key={i}>
          <div>
            <div>
              <h3 id='titulotarjeta' >{todo.title}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.priority}
              </span>
            </div>
            <div>
              {todo.description}
            </div>
            <div>
              <button id="footer"
                className="btn btn-danger"
                //ejecuto la función para borrar
                onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )
    });

    //Retorno

    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Cantidad de notas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="row mt-5">
            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div id="notas" className="col-md-7">
              <div className="row">
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
