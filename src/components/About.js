import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hola, Mi nombre es Guillermo.
            <br className="hidden lg:inline-block" />Soy un Full Stack Developer  <span role="img" aria-label="shine"> {'\u2728'}</span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Soy un desarrollador Full-Stack o al menos ese es el camino que pretendo seguir.<br/>
            Egresado de Inacap en Chillan, de la carrera Ingenieria en Informatica. <br/>
            Actualmente trabajo como freelancer, especificamente desarrollando un sitio web con 
            React.js  (styled-components).
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Trabajemos Juntos!
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              Algunas Actividades
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </div>
      </div>
    </section>
  );
}
