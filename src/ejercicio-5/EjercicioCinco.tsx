import React, { Component } from 'react';

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

interface AppProps {}

interface AppState {
  tareas: Tarea[];
}

class EjercicioCinco extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      tareas: [],
    };
  }

  agregarTarea = (texto: string) => {
    const nuevaTarea: Tarea = {
      id: Date.now(),
      texto,
      completada: false,
    };
    this.setState((prevState) => ({
      tareas: [...prevState.tareas, nuevaTarea],
    }));
  };

  marcarComoCompletada = (id: number) => {
    this.setState((prevState) => ({
      tareas: prevState.tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      ),
    }));
  };

  render() {
    return (
      <div>
        <h1>Lista de Tareas</h1>
        <NuevaTarea agregarTarea={this.agregarTarea} />
        <ListaTareas
          tareas={this.state.tareas}
          marcarComoCompletada={this.marcarComoCompletada}
        />
      </div>
    );
  }
}

interface NuevaTareaProps {
  agregarTarea: (texto: string) => void;
}

class NuevaTarea extends Component<NuevaTareaProps> {
  state = {
    texto: '',
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ texto: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (this.state.texto.trim() !== '') {
      this.props.agregarTarea(this.state.texto);
      this.setState({ texto: '' });
    }
  };

  render() {
    return (
      <div className='contenedor'>
        <h2>Nueva Tarea</h2>
        <form onSubmit={this.handleSubmit}>
          <input className='cajainput'
            type="text"
            placeholder="Nueva tarea"
            value={this.state.texto}
            onChange={this.handleChange}
          />
          

           
          <button className='button2' type="submit">Agregar</button>
        </form>
      </div>
    );
  }
}

interface ListaTareasProps {
  tareas: Tarea[];
  marcarComoCompletada: (id: number) => void;
}

class ListaTareas extends Component<ListaTareasProps> {
  render() {
    return (
        <div>
        <h2>Lista de Tareas</h2>
        <ul>
          {this.props.tareas.map((tarea) => (
            <li key={tarea.id}>
              <span
                style={{
                  textDecoration: tarea.completada ? 'line-through' : 'none',
                }}
              >
                {tarea.texto}
              </span>
              
              <input
                type="checkbox"
                checked={tarea.completada}
                onChange={() => this.props.marcarComoCompletada(tarea.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}



export default EjercicioCinco;
