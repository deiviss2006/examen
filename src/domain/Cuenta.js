
class Cuenta {
  /**
   * Constructor de la clase Cuenta.
   *
   * @param {Object} params - Parámetros de inicialización de la cuenta.
   * @param {string|number} params.id - Identificador único de la cuenta.
   * @param {string} params.NombreCliente - Nombre del cliente que posee la cuenta.
   * @param {number} params.NumeroCuenta - Número de cuenta del cliente.
   * @param {number} params.Saldo - Saldo de la cuenta del cliente.
   */
  constructor({ id, NombreCliente, NumeroCuenta, Saldo }) {
    this.id = id;
    this.NombreCliente = NombreCliente;
    this.NumeroCuenta = NumeroCuenta;
    this.Saldo = Saldo;
  }
}

export default Cuenta;
