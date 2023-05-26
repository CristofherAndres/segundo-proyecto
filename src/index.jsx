import React  from "react";
import { createRoot } from 'react-dom/client';

const App = () => {
  const Juanito = {
    nombre: 'Juanito',
    edad: 20,
    titulo: 'Ingeniero',
    saludar: function(){
      console.log('Hola, mi nombre es: ',this.nombre)
    }
  }

  /* Asignar un metodo post creación */

  Juanito.Cumpleanos = function(){
    this.edad += 1
  }

  Juanito.saludar()
  console.log("La edad es: ",Juanito.edad)
  Juanito.Cumpleanos()
  console.log("La edad es: ",Juanito.edad)

}

const App2 = () =>{
  class Persona{
    constructor(nombre, edad){
      this.nombre = nombre,
      this.edad = edad
    }
    saludar(){
      console.log('Hola, mi nombre es: '+this.nombre)
    }
  }

  const Cristiano = new Persona('Cristiano',35)
  Cristiano.saludar()

  const Elsa = new Persona('Elsa', 20)
  Elsa.saludar()

}

const container = document.getElementById('root');
const root = createRoot(container); 
root.render(<App2 />);