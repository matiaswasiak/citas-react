import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario pacientes={pacientes} setPacientes={setPacientes} />
        <ListadoPacientes />
      </div>
    </div>
  );
}

export default App;

/**
 * REGLAS JSX
 * Un elemento que tiene apertura y cierre debe de tener las dos etiquetas, si solamente tiene de apertura tienes que colocar una diagonal antes de cerrarlo.
 * Cada componente debe tener un return, ya que este mismo es lo que se muestra en pantalla.
 * Solamente puedes retornar 1 elemento en el nivel mas alto
 */
