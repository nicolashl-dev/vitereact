import React from 'react';
import 'tailwindcss/tailwind.css';
import './index.css';

const MiEjemplo = () => {
  return (
    <section>
      <div>
        <h1 className="text-white text-9xl mt-2 font-semibold">Servicios Empresariales</h1>
      </div>
    </section>
  );
};

const BlockExample = () => {
  return (
    <div className="block bg-blue-500 text-white p-4 mb-4">
      Bloque de texto con display: block;
    </div>
  );
};

const InlineBlockExample = () => {
  return (
    <div className="inline-block bg-green-500 text-white p-4 mb-4">
      Elemento en línea con display: inline-block;
    </div>
  );
};

const InlineExample = () => {
  return (
    <span className="inline bg-yellow-500 text-white p-4 mb-4">
      Texto en línea con display: inline;
    </span>
  );
};

const FlexExample = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-purple-500 text-white p-4 mb-4">
      <div className="lg:flex-1">Elemento 1</div>
      <div className="lg:flex-1">Elemento 2</div>
      <div className="lg:flex-1">Elemento 3</div>
    </div>
  );
};

const GridExample = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-indigo-500 text-white p-4 mb-4">
      <div>Elemento 1</div>
      <div>Elemento 2</div>
      <div>Elemento 3</div>
    </div>
  );
};

const NoneExample = () => {
  return (
    <div className="hidden lg:block bg-red-500 text-white p-4 mb-4">
      Este elemento tiene display: none en pantallas pequeñas (lg y más grandes).
    </div>
  );
};

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Ejemplos de Display en Tailwind CSS</h1>
      <MiEjemplo />
      <BlockExample />
      <InlineBlockExample />
      <InlineExample />
      <FlexExample />
      <GridExample />
      <NoneExample />
    </div>
  );
};

export default App;
