function Inputs() {
    const handleFormSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes agregar la lógica para enviar los datos del formulario
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