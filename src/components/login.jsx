import React from 'react';
import {useState, useEffect} from 'react';

const Login = ()=> {
     return(
        <div className="login">
            <div className="logincontainter">
                <form action="/" className='form'>
                    <label htmlFor="email" className="email">Ingrese email</label>
                        <input type="text" id="email" placeholder="robin23232@example.com" className="inputemail" />
                             <label htmlFor="contraseña" className="contraseña">Contraseña</label>
                                 <input type="contraseña" id="contraseña" placeholder="*********" className="inputcontraseña" />
                                    <input type="submit" value="Log in" className="loginboton" />
                                        <a href="/">¿Olvidaste tu contraseña?</a>
                </form>
                    <button className="signupboton">Registrarse</button>
            </div>

        </div>
     );
}
export default login;