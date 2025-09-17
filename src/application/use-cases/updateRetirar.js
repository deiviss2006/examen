
export default class UpdateRetirar {
  /**
   * Constructor de la clase UpdateCuenta.
   *
   * @param {Object} cuentaRepository - Repositorio de cuentas encargado
   * de la comunicación con la base de datos. Debe implementar el
   * método `update(id, cuentaData)`.
   */
  constructor(cuentaRepository) {
    this.cuentaRepository = cuentaRepository;
  }

  /**
   * Ejecuta el caso de uso: actualizar los datos de un cliente.
   *
   * @async
   * @param {string|number} id - Identificador único del cliente a actualizar.
   * @param {Object} cuentaData - Datos a modificar del cliente.
   * @param {number} [cuentaData.NumeroCuenta] - Documento de identidad actualizado.
   * @param {number} [cuentaData.Saldo] - Saldo actualizado.
   *
   * @returns {Promise<Object|null>} El cliente actualizado, o `null` si no existe.
   *
   * @example
   * const updateCliente = new UpdateClienteUseCase(cuentaRepository);
   * const clienteActualizado = await updateCliente.execute(10, {
   *   nombreCompleto: "Carlos Pérez",
   *   direccion: "Calle 123 #45-67",
   *   whatsapp: "+573001112233"
   * });
   *
   * console.log("Cliente actualizado:", clienteActualizado);
   */
  async execute(id, monto) {
    // Restar el monto al saldo y aumentar el contador de transacciones
    const cuentaActualizada = await this.cuentaRepository.retirar(id, monto);
    if (cuentaActualizada) {
      // Incrementar el contador de transacciones
      await this.cuentaRepository.update(id, { contadorTransacciones: (cuentaActualizada.contadorTransacciones || 0) + 1 });
      // Obtener la cuenta actualizada final
      const cuentaFinal = await this.cuentaRepository.findById(id);
      return cuentaFinal;
    }
    return null;
  }
}
