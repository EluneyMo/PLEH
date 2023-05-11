import {useState, useEffect} from 'react';

const Login = ()=> {
     return(
        <div className="login">
            <div className="logincontainter">
                <form action="/" className='form'>
                    <label htmlFor="email" className="email">Ingrese email</label><br/>
                        <input type="text" id="email" placeholder="robin23232@example.com" className="inputemail" /><br/>
                             <label htmlFor="contraseña" className="contraseña">Contraseña</label><br/>
                                 <input type="contraseña" id="contraseña" placeholder="*********" className="inputcontraseña" /><br/>
                                    <input type="submit" value="Log in" className="loginboton" /><br/>
                                        <a href="/">¿Olvidaste tu contraseña?</a>
                </form>
                    <button className="signupboton">Registrarse</button>
            </div>

        </div>
     );
}
export default Login;