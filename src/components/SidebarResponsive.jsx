import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SidebarResponsive = () => {
  const [mostrarNavegacion, setMostrarNavegacion] = useState(false);
  return (
    <div
      className='lg:hidden'
      onClick={() => {
        setMostrarNavegacion(!mostrarNavegacion);
      }}
    >
      <i
        className={`mx-2 fas fa-${
          mostrarNavegacion ? 'times' : 'bars'
        } hover:text-blue-600 cursor-pointer`}
      />
      {mostrarNavegacion && (
        <ul className='bg-gray-900'>
          <ResponsiveRoute nombre='Productos' ruta='/GestionProductos' />
          <ResponsiveRoute nombre='Ventas' ruta='/GestionVentas' />
          <ResponsiveRoute nombre='Usuarios' ruta='/GestionUsuarios' />
        </ul>
      )}
    </div>
  );
};

const ResponsiveRoute = ({ ruta, nombre }) => {
  return (
    <Link to={ruta}>
      <li className='text-gray-200 border border-gray-300 p-1'>{nombre}</li>
    </Link>
  );
};

export default SidebarResponsive;
