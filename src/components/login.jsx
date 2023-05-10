import React from 'react';

const login = ()=> {
     return(
        <div className="login">
            <div className="logincontainter">
<form action="/" className='form'>
<label htmlFor="email" className="email">Ingrese email</label>
<input type="text" id="email" placeholder="robin23232@example.com" className="inputemail" />

</form>
            </div>

        </div>
     );
}