import {useState, useEffect} from 'react';

const Login = ()=> {
     return(
     <section class="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="login">
            <div className="logincontainter">
                <form action="/" className='form'>
                    <label htmlFor="email" className="email">Ingrese email</label><br/>
                        <input type="text" id="email" placeholder="robin23232@example.com" className="inputemail" /><br/>
                             <label htmlFor="contraseña" className="contraseña">Contraseña</label><br/>
                                 <input type="contraseña" id="contraseña" placeholder="*********" className="inputcontraseña" /><br/>
                                 <a href="/">¿Olvidaste tu contraseña?</a><br/>
                                    <input type="submit" value="Log in" className="loginboton" /><br/>
                                        
                </form>
                    <button className="signupboton">Registrarse</button>
            </div>

        </div>
       </section>
     );
}
export default Login;