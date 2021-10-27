import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";


const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className='flex flex-col w-full justify-center items-center'>
       <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>
        ¡Gracias por Visitarnos!
      </h2>
      <br>
      </br>
      <h3 className='m-3 text-center text-2xl font-extrabold text-gray-900'>
        Inicia sesión en tu cuenta
      </h3>
      <form className='mt-8 max-w-md'>
          <div className='flex justify-between'>
          <div>
            <label htmlFor='recuerdame'>
              <input type='checkbox' name='recuerdame'className='' />
                Recuérdame
            </label>
          </div>
          <div>
            <Link to='/'>¿Olvidaste tu contraseña?</Link>
          </div>
        </div>
        <div>

            <button onClick={() => loginWithRedirect()} type='submit' 
            className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
            >
             Iniciar Sesion
            </button>

        </div>
      </form>
    </div>
  );
};


export default Login;

