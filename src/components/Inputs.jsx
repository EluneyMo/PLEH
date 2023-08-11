function Inputs() {
    const handleFormSubmit = (event) => {
      event.preventDefault();
    };
  

    return (
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="email">Correo:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    );
  }
  
  export default Inputs;